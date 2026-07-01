#[starknet::contract]
pub mod AgentRegistry {
    use core::num::traits::Zero;
    use phantomlayer::interfaces::registry::IAgentRegistry;
    use starknet::storage::{
        Map, StoragePathEntry, StoragePointerReadAccess, StoragePointerWriteAccess,
    };
    use starknet::{ContractAddress, get_caller_address};

    #[storage]
    struct Storage {
        next_id: felt252,
        owner_of: Map<felt252, ContractAddress>,
        viewing_key: Map<felt252, felt252>,
        registration_uri: Map<felt252, ByteArray>,
        registered: Map<felt252, bool>,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    pub enum Event {
        AgentRegistered: AgentRegistered,
        ViewingKeyUpdated: ViewingKeyUpdated,
        AgentTransferred: AgentTransferred,
    }

    #[derive(Drop, starknet::Event)]
    pub struct AgentRegistered {
        #[key]
        pub agent_id: felt252,
        #[key]
        pub owner: ContractAddress,
    }

    #[derive(Drop, starknet::Event)]
    pub struct ViewingKeyUpdated {
        #[key]
        pub agent_id: felt252,
        pub viewing_key_commitment: felt252,
    }

    #[derive(Drop, starknet::Event)]
    pub struct AgentTransferred {
        #[key]
        pub agent_id: felt252,
        pub previous_owner: ContractAddress,
        pub new_owner: ContractAddress,
    }

    #[constructor]
    fn constructor(ref self: ContractState) {
        self.next_id.write(1);
    }

    #[abi(embed_v0)]
    impl AgentRegistryImpl of IAgentRegistry<ContractState> {
        fn register_agent(
            ref self: ContractState, registration_uri: ByteArray, viewing_key_commitment: felt252,
        ) -> felt252 {
            let caller = get_caller_address();
            let agent_id = self.next_id.read();
            self.next_id.write(agent_id + 1);
            self.owner_of.entry(agent_id).write(caller);
            self.viewing_key.entry(agent_id).write(viewing_key_commitment);
            self.registration_uri.entry(agent_id).write(registration_uri);
            self.registered.entry(agent_id).write(true);
            self.emit(AgentRegistered { agent_id, owner: caller });
            agent_id
        }

        fn set_viewing_key(
            ref self: ContractState, agent_id: felt252, viewing_key_commitment: felt252,
        ) {
            self.assert_owner(agent_id);
            self.viewing_key.entry(agent_id).write(viewing_key_commitment);
            self.emit(ViewingKeyUpdated { agent_id, viewing_key_commitment });
        }

        fn set_registration_uri(
            ref self: ContractState, agent_id: felt252, registration_uri: ByteArray,
        ) {
            self.assert_owner(agent_id);
            self.registration_uri.entry(agent_id).write(registration_uri);
        }

        fn transfer_agent(ref self: ContractState, agent_id: felt252, new_owner: ContractAddress) {
            self.assert_owner(agent_id);
            assert(new_owner.is_non_zero(), 'agent: zero owner');
            let previous_owner = self.owner_of.entry(agent_id).read();
            self.owner_of.entry(agent_id).write(new_owner);
            self.emit(AgentTransferred { agent_id, previous_owner, new_owner });
        }

        fn owner_of(self: @ContractState, agent_id: felt252) -> ContractAddress {
            self.owner_of.entry(agent_id).read()
        }

        fn viewing_key_of(self: @ContractState, agent_id: felt252) -> felt252 {
            self.viewing_key.entry(agent_id).read()
        }

        fn registration_uri_of(self: @ContractState, agent_id: felt252) -> ByteArray {
            self.registration_uri.entry(agent_id).read()
        }

        fn exists(self: @ContractState, agent_id: felt252) -> bool {
            self.registered.entry(agent_id).read()
        }

        fn total_agents(self: @ContractState) -> felt252 {
            self.next_id.read() - 1
        }
    }

    #[generate_trait]
    impl InternalImpl of InternalTrait {
        fn assert_owner(self: @ContractState, agent_id: felt252) {
            assert(self.registered.entry(agent_id).read(), 'agent: unknown');
            assert(
                get_caller_address() == self.owner_of.entry(agent_id).read(), 'agent: not owner',
            );
        }
    }
}
