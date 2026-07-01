export declare const auxAbi: readonly [{
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
    readonly type: "struct";
    readonly name: "tongo::structs::traits::GeneralPrefixData";
    readonly members: readonly [{
        readonly name: "chain_id";
        readonly type: "core::felt252";
    }, {
        readonly name: "tongo_address";
        readonly type: "core::starknet::contract_address::ContractAddress";
    }, {
        readonly name: "sender_address";
        readonly type: "core::starknet::contract_address::ContractAddress";
    }];
}, {
    readonly type: "struct";
    readonly name: "tongo::structs::operations::fund::InputsFund";
    readonly members: readonly [{
        readonly name: "y";
        readonly type: "tongo::structs::common::pubkey::PubKey";
    }, {
        readonly name: "amount";
        readonly type: "core::integer::u128";
    }, {
        readonly name: "nonce";
        readonly type: "core::integer::u64";
    }, {
        readonly name: "prefix_data";
        readonly type: "tongo::structs::traits::GeneralPrefixData";
    }];
}, {
    readonly type: "struct";
    readonly name: "core::array::Span::<core::felt252>";
    readonly members: readonly [{
        readonly name: "snapshot";
        readonly type: "@core::array::Array::<core::felt252>";
    }];
}, {
    readonly type: "function";
    readonly name: "_expose_struct_fund";
    readonly inputs: readonly [{
        readonly name: "arg0";
        readonly type: "tongo::structs::operations::fund::InputsFund";
    }];
    readonly outputs: readonly [{
        readonly type: "core::array::Span::<core::felt252>";
    }];
    readonly state_mutability: "view";
}, {
    readonly type: "struct";
    readonly name: "tongo::structs::common::starkpoint::StarkPoint";
    readonly members: readonly [{
        readonly name: "x";
        readonly type: "core::felt252";
    }, {
        readonly name: "y";
        readonly type: "core::felt252";
    }];
}, {
    readonly type: "struct";
    readonly name: "tongo::structs::common::cipherbalance::CipherBalance";
    readonly members: readonly [{
        readonly name: "L";
        readonly type: "tongo::structs::common::starkpoint::StarkPoint";
    }, {
        readonly name: "R";
        readonly type: "tongo::structs::common::starkpoint::StarkPoint";
    }];
}, {
    readonly type: "struct";
    readonly name: "tongo::structs::operations::transfer::InputsTransfer";
    readonly members: readonly [{
        readonly name: "from";
        readonly type: "tongo::structs::common::pubkey::PubKey";
    }, {
        readonly name: "to";
        readonly type: "tongo::structs::common::pubkey::PubKey";
    }, {
        readonly name: "nonce";
        readonly type: "core::integer::u64";
    }, {
        readonly name: "currentBalance";
        readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
    }, {
        readonly name: "transferBalance";
        readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
    }, {
        readonly name: "transferBalanceSelf";
        readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
    }, {
        readonly name: "auxiliarCipher";
        readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
    }, {
        readonly name: "auxiliarCipher2";
        readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
    }, {
        readonly name: "bit_size";
        readonly type: "core::integer::u32";
    }, {
        readonly name: "prefix_data";
        readonly type: "tongo::structs::traits::GeneralPrefixData";
    }, {
        readonly name: "data";
        readonly type: "core::array::Span::<core::felt252>";
    }];
}, {
    readonly type: "function";
    readonly name: "_expose_struct_transfer";
    readonly inputs: readonly [{
        readonly name: "arg0";
        readonly type: "tongo::structs::operations::transfer::InputsTransfer";
    }];
    readonly outputs: readonly [{
        readonly type: "core::array::Span::<core::felt252>";
    }];
    readonly state_mutability: "view";
}, {
    readonly type: "struct";
    readonly name: "tongo::structs::operations::withdraw::InputsWithdraw";
    readonly members: readonly [{
        readonly name: "y";
        readonly type: "tongo::structs::common::pubkey::PubKey";
    }, {
        readonly name: "nonce";
        readonly type: "core::integer::u64";
    }, {
        readonly name: "to";
        readonly type: "core::starknet::contract_address::ContractAddress";
    }, {
        readonly name: "amount";
        readonly type: "core::integer::u128";
    }, {
        readonly name: "currentBalance";
        readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
    }, {
        readonly name: "auxiliarCipher";
        readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
    }, {
        readonly name: "bit_size";
        readonly type: "core::integer::u32";
    }, {
        readonly name: "prefix_data";
        readonly type: "tongo::structs::traits::GeneralPrefixData";
    }, {
        readonly name: "data";
        readonly type: "core::array::Span::<core::felt252>";
    }];
}, {
    readonly type: "function";
    readonly name: "_expose_struct_withdraw";
    readonly inputs: readonly [{
        readonly name: "arg0";
        readonly type: "tongo::structs::operations::withdraw::InputsWithdraw";
    }];
    readonly outputs: readonly [{
        readonly type: "core::array::Span::<core::felt252>";
    }];
    readonly state_mutability: "view";
}, {
    readonly type: "struct";
    readonly name: "tongo::structs::operations::ragequit::InputsRagequit";
    readonly members: readonly [{
        readonly name: "y";
        readonly type: "tongo::structs::common::pubkey::PubKey";
    }, {
        readonly name: "nonce";
        readonly type: "core::integer::u64";
    }, {
        readonly name: "to";
        readonly type: "core::starknet::contract_address::ContractAddress";
    }, {
        readonly name: "amount";
        readonly type: "core::integer::u128";
    }, {
        readonly name: "currentBalance";
        readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
    }, {
        readonly name: "prefix_data";
        readonly type: "tongo::structs::traits::GeneralPrefixData";
    }, {
        readonly name: "data";
        readonly type: "core::array::Span::<core::felt252>";
    }];
}, {
    readonly type: "function";
    readonly name: "_expose_struct_ragequit";
    readonly inputs: readonly [{
        readonly name: "arg0";
        readonly type: "tongo::structs::operations::ragequit::InputsRagequit";
    }];
    readonly outputs: readonly [{
        readonly type: "core::array::Span::<core::felt252>";
    }];
    readonly state_mutability: "view";
}, {
    readonly type: "struct";
    readonly name: "tongo::structs::operations::rollover::InputsRollOver";
    readonly members: readonly [{
        readonly name: "y";
        readonly type: "tongo::structs::common::pubkey::PubKey";
    }, {
        readonly name: "nonce";
        readonly type: "core::integer::u64";
    }, {
        readonly name: "prefix_data";
        readonly type: "tongo::structs::traits::GeneralPrefixData";
    }];
}, {
    readonly type: "function";
    readonly name: "_expose_struct_rollover";
    readonly inputs: readonly [{
        readonly name: "arg0";
        readonly type: "tongo::structs::operations::rollover::InputsRollOver";
    }];
    readonly outputs: readonly [{
        readonly type: "core::array::Span::<core::felt252>";
    }];
    readonly state_mutability: "view";
}, {
    readonly type: "function";
    readonly name: "_expose_struct_general_prefix_data";
    readonly inputs: readonly [{
        readonly name: "arg0";
        readonly type: "tongo::structs::traits::GeneralPrefixData";
    }];
    readonly outputs: readonly [{
        readonly type: "core::array::Span::<core::felt252>";
    }];
    readonly state_mutability: "view";
}, {
    readonly type: "struct";
    readonly name: "tongo::structs::operations::audit::InputsAudit";
    readonly members: readonly [{
        readonly name: "y";
        readonly type: "tongo::structs::common::pubkey::PubKey";
    }, {
        readonly name: "auditorPubKey";
        readonly type: "tongo::structs::common::pubkey::PubKey";
    }, {
        readonly name: "storedBalance";
        readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
    }, {
        readonly name: "auditedBalance";
        readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
    }, {
        readonly name: "prefix_data";
        readonly type: "tongo::structs::traits::GeneralPrefixData";
    }];
}, {
    readonly type: "function";
    readonly name: "_expose_struct_audit";
    readonly inputs: readonly [{
        readonly name: "arg0";
        readonly type: "tongo::structs::operations::audit::InputsAudit";
    }];
    readonly outputs: readonly [{
        readonly type: "core::array::Span::<core::felt252>";
    }];
    readonly state_mutability: "view";
}, {
    readonly type: "constructor";
    readonly name: "constructor";
    readonly inputs: readonly [];
}, {
    readonly type: "event";
    readonly name: "tongo::tongo::Aux::Aux::Event";
    readonly kind: "enum";
    readonly variants: readonly [];
}];
