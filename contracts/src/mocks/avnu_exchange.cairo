#[starknet::interface]
pub trait IMockAvnuAdmin<TContractState> {
    fn set_rate(ref self: TContractState, rate_num: u256, rate_den: u256);
}

/// Deterministic stand-in for the avnu exchange used in tests and local devnet. Output is
/// `amount_in * rate_num / rate_den`, paid from the exchange's own token-out reserves. The
/// `routes` and integrator-fee arguments are accepted for ABI parity and ignored.
#[starknet::contract]
pub mod MockAvnuExchange {
    use phantomlayer::interfaces::avnu::IAvnuExchange;
    use phantomlayer::interfaces::erc20::{IERC20Dispatcher, IERC20DispatcherTrait};
    use phantomlayer::types::Route;
    use starknet::storage::{StoragePointerReadAccess, StoragePointerWriteAccess};
    use starknet::{ContractAddress, get_caller_address, get_contract_address};
    use super::IMockAvnuAdmin;

    #[storage]
    struct Storage {
        rate_num: u256,
        rate_den: u256,
    }

    #[constructor]
    fn constructor(ref self: ContractState, rate_num: u256, rate_den: u256) {
        assert(rate_den != 0, 'avnu: zero denominator');
        self.rate_num.write(rate_num);
        self.rate_den.write(rate_den);
    }

    #[abi(embed_v0)]
    impl AvnuExchangeImpl of IAvnuExchange<ContractState> {
        fn multi_route_swap(
            ref self: ContractState,
            token_from_address: ContractAddress,
            token_from_amount: u256,
            token_to_address: ContractAddress,
            token_to_amount: u256,
            token_to_min_amount: u256,
            beneficiary: ContractAddress,
            integrator_fee_amount_bps: u128,
            integrator_fee_recipient: ContractAddress,
            routes: Array<Route>,
        ) -> bool {
            let _ = token_to_amount;
            let _ = integrator_fee_amount_bps;
            let _ = integrator_fee_recipient;
            let _ = routes;

            let this = get_contract_address();
            IERC20Dispatcher { contract_address: token_from_address }
                .transfer_from(get_caller_address(), this, token_from_amount);

            let received = token_from_amount * self.rate_num.read() / self.rate_den.read();
            assert(received >= token_to_min_amount, 'avnu: min amount');
            IERC20Dispatcher { contract_address: token_to_address }.transfer(beneficiary, received);
            true
        }
    }

    #[abi(embed_v0)]
    impl MockAvnuAdminImpl of IMockAvnuAdmin<ContractState> {
        fn set_rate(ref self: ContractState, rate_num: u256, rate_den: u256) {
            assert(rate_den != 0, 'avnu: zero denominator');
            self.rate_num.write(rate_num);
            self.rate_den.write(rate_den);
        }
    }
}
