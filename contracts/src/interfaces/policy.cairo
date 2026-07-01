use starknet::ContractAddress;

/// Per-agent execution limits enforced on-chain. A compromised agent or session key cannot
/// exceed the bounds its owner configured here. `authorize` reverts when any check fails.
#[starknet::interface]
pub trait IPolicyEngine<TContractState> {
    fn authorize(
        self: @TContractState,
        agent_id: felt252,
        caller: ContractAddress,
        token_in: ContractAddress,
        token_out: ContractAddress,
        amount_in: u256,
        exchange: ContractAddress,
    );
    fn is_authorized(
        self: @TContractState,
        agent_id: felt252,
        caller: ContractAddress,
        token_in: ContractAddress,
        token_out: ContractAddress,
        amount_in: u256,
        exchange: ContractAddress,
    ) -> bool;
    fn set_policy_active(ref self: TContractState, agent_id: felt252, active: bool);
    fn set_max_amount_in(
        ref self: TContractState, agent_id: felt252, token: ContractAddress, max_amount: u256,
    );
    fn set_token_allowed(
        ref self: TContractState, agent_id: felt252, token: ContractAddress, allowed: bool,
    );
    fn set_exchange_allowed(
        ref self: TContractState, agent_id: felt252, exchange: ContractAddress, allowed: bool,
    );
    fn add_session_key(
        ref self: TContractState, agent_id: felt252, session: ContractAddress, expires_at: u64,
    );
    fn revoke_session_key(ref self: TContractState, agent_id: felt252, session: ContractAddress);
    fn session_expiry(self: @TContractState, agent_id: felt252, session: ContractAddress) -> u64;
}
