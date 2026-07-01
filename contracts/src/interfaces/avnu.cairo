use phantomlayer::types::Route;
use starknet::ContractAddress;

/// Subset of the avnu exchange interface used by AgentShield. `multi_route_swap` clears the
/// trade through existing public liquidity; AgentShield is set as the beneficiary so the
/// output lands back in the anonymizing contract before being reshielded.
#[starknet::interface]
pub trait IAvnuExchange<TContractState> {
    fn multi_route_swap(
        ref self: TContractState,
        token_from_address: ContractAddress,
        token_from_amount: u256,
        token_to_address: ContractAddress,
        token_to_amount: u256,
        token_to_min_amount: u256,
        beneficiary: ContractAddress,
        integrator_fee_amount_bps: u128,
        integrator_fee_recipient: ContractAddress,
        routes: Array<Route>,
    ) -> bool;
}
