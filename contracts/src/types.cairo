use starknet::ContractAddress;

/// A single hop in an avnu execution route, used by the mock exchange's ABI.
#[derive(Drop, Serde, Clone)]
pub struct Route {
    pub token_from: ContractAddress,
    pub token_to: ContractAddress,
    pub exchange_address: ContractAddress,
    pub percent: u128,
    pub additional_swap_params: Array<felt252>,
}

/// A shielded swap intent. Confidentiality of balances is provided by the Tongo pool that
/// brackets this call (withdraw in → swap → fund out); AgentShield only enforces policy, routes
/// the swap, and records an encrypted audit entry.
#[derive(Drop, Serde)]
pub struct ShieldedSwap {
    pub agent_id: felt252,
    pub token_in: ContractAddress,
    pub token_out: ContractAddress,
    pub amount_in: u256,
    pub min_out: u256,
}
