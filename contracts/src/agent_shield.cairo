#[starknet::contract]
pub mod AgentShield {
    use core::num::traits::Zero;
    use phantomlayer::interfaces::agent_shield::IAgentShield;
    use phantomlayer::interfaces::erc20::{IERC20Dispatcher, IERC20DispatcherTrait};
    use phantomlayer::interfaces::policy::{IPolicyEngineDispatcher, IPolicyEngineDispatcherTrait};
    use phantomlayer::types::ShieldedSwap;
    use starknet::storage::{StoragePointerReadAccess, StoragePointerWriteAccess};
    use starknet::syscalls::call_contract_syscall;
    use starknet::{ContractAddress, SyscallResultTrait, get_caller_address, get_contract_address};

    const BPS_DENOMINATOR: u256 = 10000;
    const MAX_FEE_BPS: u16 = 100; // 1% ceiling
    const CD_MIN_LEN: u32 = 12; // avnu multi_route_swap calldata header length

    #[storage]
    struct Storage {
        owner: ContractAddress,
        policy: ContractAddress,
        router: ContractAddress,
        fee_bps: u16,
        fee_recipient: ContractAddress,
        record_count: u64,
        entered: bool,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    pub enum Event {
        ShieldedSwapExecuted: ShieldedSwapExecuted,
    }

    /// Emitted on every shielded swap. Carries only a global record id and an audit blob the agent
    /// owner can decrypt with their viewing key. No agent id, token pair, or amount in clear.
    #[derive(Drop, starknet::Event)]
    pub struct ShieldedSwapExecuted {
        #[key]
        pub record_id: u64,
        pub audit_blob: Span<felt252>,
    }

    #[constructor]
    fn constructor(
        ref self: ContractState,
        owner: ContractAddress,
        policy: ContractAddress,
        router: ContractAddress,
        fee_bps: u16,
        fee_recipient: ContractAddress,
    ) {
        assert(owner.is_non_zero(), 'shield: zero owner');
        assert(policy.is_non_zero(), 'shield: zero policy');
        assert(router.is_non_zero(), 'shield: zero router');
        assert_fee_config(fee_bps, fee_recipient);
        self.owner.write(owner);
        self.policy.write(policy);
        self.router.write(router);
        self.fee_bps.write(fee_bps);
        self.fee_recipient.write(fee_recipient);
    }

    #[abi(embed_v0)]
    impl AgentShieldImpl of IAgentShield<ContractState> {
        fn execute_swap(
            ref self: ContractState,
            swap: ShieldedSwap,
            swap_calldata: Span<felt252>,
            recipient: ContractAddress,
            audit_blob: Span<felt252>,
        ) -> u256 {
            self.reentrancy_start();

            let caller = get_caller_address();
            let this = get_contract_address();
            let router = self.router.read();
            assert(router.is_non_zero(), 'shield: router unset');
            assert(recipient.is_non_zero(), 'shield: zero recipient');
            assert(swap.amount_in > 0, 'shield: zero amount');

            // 1. On-chain policy: session validity, allowlists, and notional cap.
            IPolicyEngineDispatcher { contract_address: self.policy.read() }
                .authorize(
                    swap.agent_id, caller, swap.token_in, swap.token_out, swap.amount_in, router,
                );

            // 2. Validate avnu's forwarded calldata against the declared swap.
            self.assert_calldata_matches(swap_calldata, @swap, this);

            let token_in = IERC20Dispatcher { contract_address: swap.token_in };
            let token_out = IERC20Dispatcher { contract_address: swap.token_out };

            // 3. Route the swap; input already sits in this contract (delivered by Tongo withdraw).
            token_in.approve(router, swap.amount_in);
            let balance_before = token_out.balance_of(this);
            call_contract_syscall(router, selector!("multi_route_swap"), swap_calldata)
                .unwrap_syscall();
            let received = token_out.balance_of(this) - balance_before;
            assert(received >= swap.min_out, 'shield: slippage');

            // 4. Take the protocol fee, deliver the rest to the recipient (back into the pool).
            let fee = received * self.fee_bps.read().into() / BPS_DENOMINATOR;
            let net = received - fee;
            if fee > 0 {
                token_out.transfer(self.fee_recipient.read(), fee);
            }
            token_out.transfer(recipient, net);

            // 5. Record the owner-decryptable audit entry.
            let record_id = self.record_count.read();
            self.record_count.write(record_id + 1);
            self.emit(ShieldedSwapExecuted { record_id, audit_blob });

            self.reentrancy_end();
            net
        }

        fn set_router(ref self: ContractState, router: ContractAddress) {
            self.assert_owner();
            self.router.write(router);
        }

        fn set_fee(ref self: ContractState, fee_bps: u16, fee_recipient: ContractAddress) {
            self.assert_owner();
            assert_fee_config(fee_bps, fee_recipient);
            self.fee_bps.write(fee_bps);
            self.fee_recipient.write(fee_recipient);
        }

        fn transfer_ownership(ref self: ContractState, new_owner: ContractAddress) {
            self.assert_owner();
            assert(new_owner.is_non_zero(), 'shield: zero owner');
            self.owner.write(new_owner);
        }

        fn router(self: @ContractState) -> ContractAddress {
            self.router.read()
        }

        fn fee_bps(self: @ContractState) -> u16 {
            self.fee_bps.read()
        }

        fn owner(self: @ContractState) -> ContractAddress {
            self.owner.read()
        }

        fn record_count(self: @ContractState) -> u64 {
            self.record_count.read()
        }
    }

    #[generate_trait]
    impl InternalImpl of InternalTrait {
        /// Ensures the forwarded `multi_route_swap` calldata agrees with the declared swap: same
        /// sell token/amount, same buy token, output beneficiary is this contract, and the router's
        /// min-out is no weaker than ours. Layout matches the avnu exchange ABI.
        fn assert_calldata_matches(
            self: @ContractState,
            swap_calldata: Span<felt252>,
            swap: @ShieldedSwap,
            this: ContractAddress,
        ) {
            assert(swap_calldata.len() >= CD_MIN_LEN, 'shield: bad calldata');
            let sell_token: ContractAddress = (*swap_calldata.at(0)).try_into().unwrap();
            let sell_amount = read_u256(swap_calldata, 1);
            let buy_token: ContractAddress = (*swap_calldata.at(3)).try_into().unwrap();
            let buy_min = read_u256(swap_calldata, 6);
            let beneficiary: ContractAddress = (*swap_calldata.at(8)).try_into().unwrap();
            assert(sell_token == *swap.token_in, 'shield: cd token_in');
            assert(sell_amount == *swap.amount_in, 'shield: cd amount_in');
            assert(buy_token == *swap.token_out, 'shield: cd token_out');
            assert(beneficiary == this, 'shield: cd beneficiary');
            assert(buy_min >= *swap.min_out, 'shield: cd min_out');
        }

        fn assert_owner(self: @ContractState) {
            assert(get_caller_address() == self.owner.read(), 'shield: not owner');
        }

        fn reentrancy_start(ref self: ContractState) {
            assert(!self.entered.read(), 'shield: reentrant');
            self.entered.write(true);
        }

        fn reentrancy_end(ref self: ContractState) {
            self.entered.write(false);
        }
    }

    fn read_u256(data: Span<felt252>, low_index: u32) -> u256 {
        u256 {
            low: (*data.at(low_index)).try_into().unwrap(),
            high: (*data.at(low_index + 1)).try_into().unwrap(),
        }
    }

    /// A non-zero fee requires a real recipient, or the fee amount would be transferred into the
    /// zero address and burned.
    fn assert_fee_config(fee_bps: u16, fee_recipient: ContractAddress) {
        assert(fee_bps <= MAX_FEE_BPS, 'shield: fee too high');
        if fee_bps > 0 {
            assert(fee_recipient.is_non_zero(), 'shield: zero fee recipient');
        }
    }
}
