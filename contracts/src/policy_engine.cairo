#[starknet::contract]
pub mod PolicyEngine {
    use core::num::traits::Zero;
    use phantomlayer::interfaces::policy::IPolicyEngine;
    use phantomlayer::interfaces::registry::{
        IAgentRegistryDispatcher, IAgentRegistryDispatcherTrait,
    };
    use starknet::storage::{
        Map, StoragePathEntry, StoragePointerReadAccess, StoragePointerWriteAccess,
    };
    use starknet::{ContractAddress, get_block_timestamp, get_caller_address};

    #[storage]
    struct Storage {
        registry: ContractAddress,
        policy_active: Map<felt252, bool>,
        max_amount_in: Map<felt252, Map<ContractAddress, u256>>,
        token_allowed: Map<felt252, Map<ContractAddress, bool>>,
        exchange_allowed: Map<felt252, Map<ContractAddress, bool>>,
        session_expires: Map<felt252, Map<ContractAddress, u64>>,
        session_revoked: Map<felt252, Map<ContractAddress, bool>>,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    pub enum Event {
        SessionKeyAdded: SessionKeyAdded,
        SessionKeyRevoked: SessionKeyRevoked,
    }

    #[derive(Drop, starknet::Event)]
    pub struct SessionKeyAdded {
        #[key]
        pub agent_id: felt252,
        #[key]
        pub session: ContractAddress,
        pub expires_at: u64,
    }

    #[derive(Drop, starknet::Event)]
    pub struct SessionKeyRevoked {
        #[key]
        pub agent_id: felt252,
        #[key]
        pub session: ContractAddress,
    }

    #[constructor]
    fn constructor(ref self: ContractState, registry: ContractAddress) {
        assert(registry.is_non_zero(), 'policy: zero registry');
        self.registry.write(registry);
    }

    #[abi(embed_v0)]
    impl PolicyEngineImpl of IPolicyEngine<ContractState> {
        fn authorize(
            self: @ContractState,
            agent_id: felt252,
            caller: ContractAddress,
            token_in: ContractAddress,
            token_out: ContractAddress,
            amount_in: u256,
            exchange: ContractAddress,
        ) {
            assert(self.policy_active.entry(agent_id).read(), 'policy: inactive');
            assert(self.session_valid(agent_id, caller), 'policy: session');
            assert(self.token_allowed.entry(agent_id).entry(token_in).read(), 'policy: token_in');
            assert(self.token_allowed.entry(agent_id).entry(token_out).read(), 'policy: token_out');
            assert(
                self.exchange_allowed.entry(agent_id).entry(exchange).read(), 'policy: exchange',
            );
            assert(
                amount_in <= self.max_amount_in.entry(agent_id).entry(token_in).read(),
                'policy: amount cap',
            );
        }

        fn is_authorized(
            self: @ContractState,
            agent_id: felt252,
            caller: ContractAddress,
            token_in: ContractAddress,
            token_out: ContractAddress,
            amount_in: u256,
            exchange: ContractAddress,
        ) -> bool {
            self.policy_active.entry(agent_id).read()
                && self.session_valid(agent_id, caller)
                && self.token_allowed.entry(agent_id).entry(token_in).read()
                && self.token_allowed.entry(agent_id).entry(token_out).read()
                && self.exchange_allowed.entry(agent_id).entry(exchange).read()
                && amount_in <= self.max_amount_in.entry(agent_id).entry(token_in).read()
        }

        fn set_policy_active(ref self: ContractState, agent_id: felt252, active: bool) {
            self.assert_agent_owner(agent_id);
            self.policy_active.entry(agent_id).write(active);
        }

        fn set_max_amount_in(
            ref self: ContractState, agent_id: felt252, token: ContractAddress, max_amount: u256,
        ) {
            self.assert_agent_owner(agent_id);
            self.max_amount_in.entry(agent_id).entry(token).write(max_amount);
        }

        fn set_token_allowed(
            ref self: ContractState, agent_id: felt252, token: ContractAddress, allowed: bool,
        ) {
            self.assert_agent_owner(agent_id);
            self.token_allowed.entry(agent_id).entry(token).write(allowed);
        }

        fn set_exchange_allowed(
            ref self: ContractState, agent_id: felt252, exchange: ContractAddress, allowed: bool,
        ) {
            self.assert_agent_owner(agent_id);
            self.exchange_allowed.entry(agent_id).entry(exchange).write(allowed);
        }

        fn add_session_key(
            ref self: ContractState, agent_id: felt252, session: ContractAddress, expires_at: u64,
        ) {
            self.assert_agent_owner(agent_id);
            assert(expires_at > get_block_timestamp(), 'policy: expiry in past');
            self.session_expires.entry(agent_id).entry(session).write(expires_at);
            self.session_revoked.entry(agent_id).entry(session).write(false);
            self.emit(SessionKeyAdded { agent_id, session, expires_at });
        }

        fn revoke_session_key(
            ref self: ContractState, agent_id: felt252, session: ContractAddress,
        ) {
            self.assert_agent_owner(agent_id);
            self.session_revoked.entry(agent_id).entry(session).write(true);
            self.emit(SessionKeyRevoked { agent_id, session });
        }

        fn session_expiry(
            self: @ContractState, agent_id: felt252, session: ContractAddress,
        ) -> u64 {
            self.session_expires.entry(agent_id).entry(session).read()
        }
    }

    #[generate_trait]
    impl InternalImpl of InternalTrait {
        /// A caller is authorized for an agent when it is the agent owner or holds a session
        /// key that is registered, not revoked, and not expired.
        fn session_valid(self: @ContractState, agent_id: felt252, caller: ContractAddress) -> bool {
            if caller == self.registry_dispatcher().owner_of(agent_id) {
                return true;
            }
            let expires = self.session_expires.entry(agent_id).entry(caller).read();
            if expires == 0 || self.session_revoked.entry(agent_id).entry(caller).read() {
                return false;
            }
            get_block_timestamp() < expires
        }

        fn assert_agent_owner(self: @ContractState, agent_id: felt252) {
            let owner = self.registry_dispatcher().owner_of(agent_id);
            assert(owner.is_non_zero(), 'policy: unknown agent');
            assert(get_caller_address() == owner, 'policy: not agent owner');
        }

        fn registry_dispatcher(self: @ContractState) -> IAgentRegistryDispatcher {
            IAgentRegistryDispatcher { contract_address: self.registry.read() }
        }
    }
}
