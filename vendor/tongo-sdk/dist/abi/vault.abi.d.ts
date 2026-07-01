export declare const vaultAbi: readonly [{
    readonly type: "impl";
    readonly name: "VaultImpl";
    readonly interface_name: "tongo::tongo::IVault::IVault";
}, {
    readonly type: "struct";
    readonly name: "core::integer::u256";
    readonly members: readonly [{
        readonly name: "low";
        readonly type: "core::integer::u128";
    }, {
        readonly name: "high";
        readonly type: "core::integer::u128";
    }];
}, {
    readonly type: "struct";
    readonly name: "tongo::structs::common::state::VaultConfig";
    readonly members: readonly [{
        readonly name: "vault_address";
        readonly type: "core::starknet::contract_address::ContractAddress";
    }, {
        readonly name: "tongo_class_hash";
        readonly type: "core::starknet::class_hash::ClassHash";
    }, {
        readonly name: "ERC20";
        readonly type: "core::starknet::contract_address::ContractAddress";
    }, {
        readonly name: "rate";
        readonly type: "core::integer::u256";
    }, {
        readonly name: "bit_size";
        readonly type: "core::integer::u32";
    }];
}, {
    readonly type: "enum";
    readonly name: "core::bool";
    readonly variants: readonly [{
        readonly name: "False";
        readonly type: "()";
    }, {
        readonly name: "True";
        readonly type: "()";
    }];
}, {
    readonly type: "enum";
    readonly name: "core::option::Option::<core::starknet::contract_address::ContractAddress>";
    readonly variants: readonly [{
        readonly name: "Some";
        readonly type: "core::starknet::contract_address::ContractAddress";
    }, {
        readonly name: "None";
        readonly type: "()";
    }];
}, {
    readonly type: "struct";
    readonly name: "tongo::structs::common::pubkey::PubKey";
    readonly members: readonly [{
        readonly name: "x";
        readonly type: "core::felt252";
    }, {
        readonly name: "y";
        readonly type: "core::felt252";
    }];
}, {
    readonly type: "enum";
    readonly name: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
    readonly variants: readonly [{
        readonly name: "Some";
        readonly type: "tongo::structs::common::pubkey::PubKey";
    }, {
        readonly name: "None";
        readonly type: "()";
    }];
}, {
    readonly type: "interface";
    readonly name: "tongo::tongo::IVault::IVault";
    readonly items: readonly [{
        readonly type: "function";
        readonly name: "get_vault_config";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly type: "tongo::structs::common::state::VaultConfig";
        }];
        readonly state_mutability: "view";
    }, {
        readonly type: "function";
        readonly name: "get_tongo_class_hash";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly type: "core::starknet::class_hash::ClassHash";
        }];
        readonly state_mutability: "view";
    }, {
        readonly type: "function";
        readonly name: "ERC20";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly type: "core::starknet::contract_address::ContractAddress";
        }];
        readonly state_mutability: "view";
    }, {
        readonly type: "function";
        readonly name: "get_rate";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly type: "core::integer::u256";
        }];
        readonly state_mutability: "view";
    }, {
        readonly type: "function";
        readonly name: "get_bit_size";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly type: "core::integer::u32";
        }];
        readonly state_mutability: "view";
    }, {
        readonly type: "function";
        readonly name: "is_known_tongo";
        readonly inputs: readonly [{
            readonly name: "address";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }];
        readonly outputs: readonly [{
            readonly type: "core::bool";
        }];
        readonly state_mutability: "view";
    }, {
        readonly type: "function";
        readonly name: "tag_to_address";
        readonly inputs: readonly [{
            readonly name: "tag";
            readonly type: "core::felt252";
        }];
        readonly outputs: readonly [{
            readonly type: "core::option::Option::<core::starknet::contract_address::ContractAddress>";
        }];
        readonly state_mutability: "view";
    }, {
        readonly type: "function";
        readonly name: "deploy_tongo";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "tag";
            readonly type: "core::felt252";
        }, {
            readonly name: "auditorKey";
            readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
        }];
        readonly outputs: readonly [{
            readonly type: "core::starknet::contract_address::ContractAddress";
        }];
        readonly state_mutability: "external";
    }, {
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [{
            readonly name: "amount";
            readonly type: "core::integer::u256";
        }];
        readonly outputs: readonly [];
        readonly state_mutability: "external";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "amount";
            readonly type: "core::integer::u256";
        }];
        readonly outputs: readonly [];
        readonly state_mutability: "external";
    }];
}, {
    readonly type: "constructor";
    readonly name: "constructor";
    readonly inputs: readonly [{
        readonly name: "ERC20";
        readonly type: "core::starknet::contract_address::ContractAddress";
    }, {
        readonly name: "rate";
        readonly type: "core::integer::u256";
    }, {
        readonly name: "bit_size";
        readonly type: "core::integer::u32";
    }, {
        readonly name: "tongo_class";
        readonly type: "core::starknet::class_hash::ClassHash";
    }];
}, {
    readonly type: "event";
    readonly name: "tongo::structs::events::TongoDeployed";
    readonly kind: "struct";
    readonly members: readonly [{
        readonly name: "tag";
        readonly type: "core::felt252";
        readonly kind: "key";
    }, {
        readonly name: "address";
        readonly type: "core::starknet::contract_address::ContractAddress";
        readonly kind: "data";
    }, {
        readonly name: "ERC20";
        readonly type: "core::starknet::contract_address::ContractAddress";
        readonly kind: "data";
    }, {
        readonly name: "rate";
        readonly type: "core::integer::u256";
        readonly kind: "data";
    }, {
        readonly name: "bit_size";
        readonly type: "core::integer::u32";
        readonly kind: "data";
    }, {
        readonly name: "auditor_key";
        readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
        readonly kind: "data";
    }];
}, {
    readonly type: "event";
    readonly name: "tongo::tongo::Vault::Vault::Event";
    readonly kind: "enum";
    readonly variants: readonly [{
        readonly name: "TongoDeployed";
        readonly type: "tongo::structs::events::TongoDeployed";
        readonly kind: "nested";
    }];
}];
