use starknet::ContractAddress;

#[starknet::interface]
pub trait IMintable<TContractState> {
    fn mint(ref self: TContractState, recipient: ContractAddress, amount: u256);
}

/// Minimal mintable ERC-20 for tests and local devnet. Snake_case entrypoints matching the
/// `IERC20` interface AgentShield depends on.
#[starknet::contract]
pub mod MockERC20 {
    use phantomlayer::interfaces::erc20::IERC20;
    use starknet::storage::{
        Map, StoragePathEntry, StoragePointerReadAccess, StoragePointerWriteAccess,
    };
    use starknet::{ContractAddress, get_caller_address};
    use super::IMintable;

    #[storage]
    struct Storage {
        total_supply: u256,
        balances: Map<ContractAddress, u256>,
        allowances: Map<ContractAddress, Map<ContractAddress, u256>>,
    }

    #[abi(embed_v0)]
    impl ERC20Impl of IERC20<ContractState> {
        fn transfer(ref self: ContractState, recipient: ContractAddress, amount: u256) -> bool {
            self.move_tokens(get_caller_address(), recipient, amount);
            true
        }

        fn transfer_from(
            ref self: ContractState,
            sender: ContractAddress,
            recipient: ContractAddress,
            amount: u256,
        ) -> bool {
            let caller = get_caller_address();
            let allowed = self.allowances.entry(sender).entry(caller).read();
            assert(allowed >= amount, 'erc20: allowance');
            self.allowances.entry(sender).entry(caller).write(allowed - amount);
            self.move_tokens(sender, recipient, amount);
            true
        }

        fn approve(ref self: ContractState, spender: ContractAddress, amount: u256) -> bool {
            self.allowances.entry(get_caller_address()).entry(spender).write(amount);
            true
        }

        fn balance_of(self: @ContractState, account: ContractAddress) -> u256 {
            self.balances.entry(account).read()
        }

        fn allowance(
            self: @ContractState, owner: ContractAddress, spender: ContractAddress,
        ) -> u256 {
            self.allowances.entry(owner).entry(spender).read()
        }

        fn total_supply(self: @ContractState) -> u256 {
            self.total_supply.read()
        }
    }

    #[abi(embed_v0)]
    impl MintableImpl of IMintable<ContractState> {
        fn mint(ref self: ContractState, recipient: ContractAddress, amount: u256) {
            self.total_supply.write(self.total_supply.read() + amount);
            let balance = self.balances.entry(recipient).read();
            self.balances.entry(recipient).write(balance + amount);
        }
    }

    #[generate_trait]
    impl InternalImpl of InternalTrait {
        fn move_tokens(
            ref self: ContractState, from: ContractAddress, to: ContractAddress, amount: u256,
        ) {
            let from_balance = self.balances.entry(from).read();
            assert(from_balance >= amount, 'erc20: balance');
            self.balances.entry(from).write(from_balance - amount);
            let to_balance = self.balances.entry(to).read();
            self.balances.entry(to).write(to_balance + amount);
        }
    }
}
