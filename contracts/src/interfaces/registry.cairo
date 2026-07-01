use starknet::ContractAddress;

/// ERC-8004-shaped agent identity registry: each agent id maps to an owner, an off-chain
/// registration file (the ERC-8004 Agent Registration pointer), and a commitment to the
/// owner's viewing key used to decrypt that agent's audit trail.
#[starknet::interface]
pub trait IAgentRegistry<TContractState> {
    fn register_agent(
        ref self: TContractState, registration_uri: ByteArray, viewing_key_commitment: felt252,
    ) -> felt252;
    fn set_viewing_key(
        ref self: TContractState, agent_id: felt252, viewing_key_commitment: felt252,
    );
    fn set_registration_uri(
        ref self: TContractState, agent_id: felt252, registration_uri: ByteArray,
    );
    fn transfer_agent(ref self: TContractState, agent_id: felt252, new_owner: ContractAddress);
    fn owner_of(self: @TContractState, agent_id: felt252) -> ContractAddress;
    fn viewing_key_of(self: @TContractState, agent_id: felt252) -> felt252;
    fn registration_uri_of(self: @TContractState, agent_id: felt252) -> ByteArray;
    fn exists(self: @TContractState, agent_id: felt252) -> bool;
    fn total_agents(self: @TContractState) -> felt252;
}
