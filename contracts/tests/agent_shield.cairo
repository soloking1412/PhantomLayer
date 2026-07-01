use phantomlayer::interfaces::agent_shield::{IAgentShieldDispatcher, IAgentShieldDispatcherTrait};
use phantomlayer::interfaces::erc20::{IERC20Dispatcher, IERC20DispatcherTrait};
use phantomlayer::interfaces::policy::{IPolicyEngineDispatcher, IPolicyEngineDispatcherTrait};
use phantomlayer::interfaces::registry::{IAgentRegistryDispatcher, IAgentRegistryDispatcherTrait};
use phantomlayer::mocks::erc20::{IMintableDispatcher, IMintableDispatcherTrait};
use phantomlayer::types::ShieldedSwap;
use snforge_std::{
    ContractClassTrait, DeclareResultTrait, declare, start_cheat_block_timestamp,
    start_cheat_caller_address, stop_cheat_caller_address,
};
use starknet::ContractAddress;

const FUNDING: u256 = 1_000_000;
const AMOUNT_IN: u256 = 1000;
const MIN_OUT: u256 = 900;

fn owner() -> ContractAddress {
    'OWNER'.try_into().unwrap()
}

fn session() -> ContractAddress {
    'SESSION'.try_into().unwrap()
}

fn stranger() -> ContractAddress {
    'STRANGER'.try_into().unwrap()
}

fn recipient() -> ContractAddress {
    'RECIPIENT'.try_into().unwrap()
}

#[derive(Drop, Copy)]
struct Stack {
    agent_id: felt252,
    policy: IPolicyEngineDispatcher,
    shield: IAgentShieldDispatcher,
    token_in: ContractAddress,
    token_out: ContractAddress,
    exchange: ContractAddress,
}

fn deploy(name: ByteArray, calldata: Array<felt252>) -> ContractAddress {
    let contract = declare(name).unwrap().contract_class();
    let (address, _) = contract.deploy(@calldata).unwrap();
    address
}

/// Deploys the stack with a 1:1 mock exchange, a registered agent, and an active policy. The
/// exchange is stocked with token-out reserves. Tokens-in are delivered to AgentShield per swap
/// (simulating a preceding Tongo withdraw).
fn setup() -> Stack {
    let registry_addr = deploy("AgentRegistry", array![]);
    let registry = IAgentRegistryDispatcher { contract_address: registry_addr };

    start_cheat_caller_address(registry_addr, owner());
    let agent_id = registry.register_agent("ipfs://agent-card", 'VIEW');
    stop_cheat_caller_address(registry_addr);

    let mut policy_cd = array![];
    registry_addr.serialize(ref policy_cd);
    let policy_addr = deploy("PolicyEngine", policy_cd);
    let policy = IPolicyEngineDispatcher { contract_address: policy_addr };

    let token_in = deploy("MockERC20", array![]);
    let token_out = deploy("MockERC20", array![]);

    let mut exchange_cd = array![];
    let rate: u256 = 1;
    rate.serialize(ref exchange_cd);
    rate.serialize(ref exchange_cd);
    let exchange = deploy("MockAvnuExchange", exchange_cd);

    let mut shield_cd = array![];
    owner().serialize(ref shield_cd);
    policy_addr.serialize(ref shield_cd);
    exchange.serialize(ref shield_cd);
    let fee_bps: u16 = 0;
    fee_bps.serialize(ref shield_cd);
    owner().serialize(ref shield_cd);
    let shield_addr = deploy("AgentShield", shield_cd);
    let shield = IAgentShieldDispatcher { contract_address: shield_addr };

    start_cheat_caller_address(policy_addr, owner());
    policy.set_policy_active(agent_id, true);
    policy.set_token_allowed(agent_id, token_in, true);
    policy.set_token_allowed(agent_id, token_out, true);
    policy.set_exchange_allowed(agent_id, exchange, true);
    policy.set_max_amount_in(agent_id, token_in, FUNDING);
    stop_cheat_caller_address(policy_addr);

    IMintableDispatcher { contract_address: token_out }.mint(exchange, FUNDING * 10);

    Stack { agent_id, policy, shield, token_in, token_out, exchange }
}

fn swap_intent(s: @Stack) -> ShieldedSwap {
    ShieldedSwap {
        agent_id: *s.agent_id,
        token_in: *s.token_in,
        token_out: *s.token_out,
        amount_in: AMOUNT_IN,
        min_out: MIN_OUT,
    }
}

/// Builds avnu `multi_route_swap` calldata for the mock exchange (1:1, empty routes).
fn build_swap_calldata(swap: @ShieldedSwap, beneficiary: ContractAddress) -> Span<felt252> {
    let amount_in: u256 = *swap.amount_in;
    let min_out: u256 = *swap.min_out;
    array![
        (*swap.token_in).into(), amount_in.low.into(), amount_in.high.into(),
        (*swap.token_out).into(), amount_in.low.into(), amount_in.high.into(), min_out.low.into(),
        min_out.high.into(), beneficiary.into(), 0, 0, 0,
    ]
        .span()
}

fn execute_as(s: @Stack, caller: ContractAddress, swap: ShieldedSwap) -> u256 {
    let shield_addr = *s.shield.contract_address;
    // Deliver the input token to AgentShield (a Tongo withdraw does this in production).
    IMintableDispatcher { contract_address: *s.token_in }.mint(shield_addr, swap.amount_in);
    let swap_calldata = build_swap_calldata(@swap, shield_addr);
    let audit_blob = array![0x501D, 0x1DEA].span();
    start_cheat_caller_address(shield_addr, caller);
    let net = (*s.shield).execute_swap(swap, swap_calldata, recipient(), audit_blob);
    stop_cheat_caller_address(shield_addr);
    net
}

#[test]
fn swap_happy_path() {
    let s = setup();
    let net = execute_as(@s, owner(), swap_intent(@s));

    assert(net == AMOUNT_IN, 'wrong net out');
    assert(
        IERC20Dispatcher { contract_address: s.token_out }.balance_of(recipient()) == AMOUNT_IN,
        'recipient not paid',
    );
    assert(s.shield.record_count() == 1, 'no audit record');
}

#[test]
fn session_key_can_execute() {
    let s = setup();
    start_cheat_block_timestamp(s.policy.contract_address, 100);
    start_cheat_caller_address(s.policy.contract_address, owner());
    s.policy.add_session_key(s.agent_id, session(), 10_000);
    stop_cheat_caller_address(s.policy.contract_address);

    start_cheat_block_timestamp(s.shield.contract_address, 200);
    let net = execute_as(@s, session(), swap_intent(@s));
    assert(net == AMOUNT_IN, 'session swap failed');
}

#[test]
fn fee_is_taken_from_output() {
    let s = setup();
    start_cheat_caller_address(s.shield.contract_address, owner());
    s.shield.set_fee(50, owner()); // 0.5%
    stop_cheat_caller_address(s.shield.contract_address);

    let net = execute_as(@s, owner(), swap_intent(@s));
    let expected_fee = AMOUNT_IN * 50 / 10000;
    assert(net == AMOUNT_IN - expected_fee, 'fee not applied');
    let token_out = IERC20Dispatcher { contract_address: s.token_out };
    assert(token_out.balance_of(recipient()) == AMOUNT_IN - expected_fee, 'recipient net wrong');
    assert(token_out.balance_of(owner()) == expected_fee, 'fee not received');
}

#[test]
#[should_panic(expected: 'policy: session')]
fn stranger_cannot_execute() {
    let s = setup();
    execute_as(@s, stranger(), swap_intent(@s));
}

#[test]
#[should_panic(expected: 'policy: amount cap')]
fn amount_over_cap_reverts() {
    let s = setup();
    start_cheat_caller_address(s.policy.contract_address, owner());
    s.policy.set_max_amount_in(s.agent_id, s.token_in, AMOUNT_IN - 1);
    stop_cheat_caller_address(s.policy.contract_address);
    execute_as(@s, owner(), swap_intent(@s));
}

#[test]
#[should_panic(expected: 'policy: token_in')]
fn disallowed_token_reverts() {
    let s = setup();
    start_cheat_caller_address(s.policy.contract_address, owner());
    s.policy.set_token_allowed(s.agent_id, s.token_in, false);
    stop_cheat_caller_address(s.policy.contract_address);
    execute_as(@s, owner(), swap_intent(@s));
}

#[test]
#[should_panic(expected: 'policy: exchange')]
fn disallowed_exchange_reverts() {
    let s = setup();
    start_cheat_caller_address(s.policy.contract_address, owner());
    s.policy.set_exchange_allowed(s.agent_id, s.exchange, false);
    stop_cheat_caller_address(s.policy.contract_address);
    execute_as(@s, owner(), swap_intent(@s));
}

#[test]
#[should_panic(expected: 'avnu: min amount')]
fn slippage_below_min_out_reverts() {
    let s = setup();
    let mut intent = swap_intent(@s);
    intent.min_out = AMOUNT_IN + 1; // 1:1 exchange can never satisfy this
    execute_as(@s, owner(), intent);
}

#[test]
#[should_panic(expected: 'shield: zero amount')]
fn zero_amount_in_reverts() {
    let s = setup();
    let mut intent = swap_intent(@s);
    intent.amount_in = 0;
    execute_as(@s, owner(), intent);
}

#[test]
#[should_panic(expected: 'shield: zero fee recipient')]
fn nonzero_fee_with_zero_recipient_reverts() {
    let s = setup();
    let zero_address: ContractAddress = 0.try_into().unwrap();
    start_cheat_caller_address(s.shield.contract_address, owner());
    s.shield.set_fee(50, zero_address);
}
