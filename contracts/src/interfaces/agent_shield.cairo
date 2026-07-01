use phantomlayer::types::ShieldedSwap;
use starknet::ContractAddress;

/// The policy-gated, audited avnu swap executor. The input token must already sit in the contract
/// (delivered by a preceding Tongo `withdraw` in the same multicall, or by a test transfer).
/// `execute_swap` validates the forwarded avnu calldata, routes the trade, takes the protocol fee,
/// sends the output to `recipient` (e.g. back into the Tongo pool), and emits an owner-encrypted
/// audit blob — never the agent id or amounts in clear.
#[starknet::interface]
pub trait IAgentShield<TContractState> {
    fn execute_swap(
        ref self: TContractState,
        swap: ShieldedSwap,
        swap_calldata: Span<felt252>,
        recipient: ContractAddress,
        audit_blob: Span<felt252>,
    ) -> u256;
    fn set_router(ref self: TContractState, router: ContractAddress);
    fn set_fee(ref self: TContractState, fee_bps: u16, fee_recipient: ContractAddress);
    fn transfer_ownership(ref self: TContractState, new_owner: ContractAddress);
    fn router(self: @TContractState) -> ContractAddress;
    fn fee_bps(self: @TContractState) -> u16;
    fn owner(self: @TContractState) -> ContractAddress;
    fn record_count(self: @TContractState) -> u64;
}
