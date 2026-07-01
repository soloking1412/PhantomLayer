import { AbiType, ExtractAbiTypeNames } from "@fatsolutions/cairo-abi-codec";
import { tongoAbi } from "./tongo.abi.js";
import { vaultAbi } from "./vault.abi.js";
import { auxAbi } from "./aux.abi.js";
export type TongoAbi = typeof tongoAbi;
export type VaultAbi = typeof vaultAbi;
export type AuxAbi = typeof auxAbi;
export type TongoAbiType<TName extends ExtractAbiTypeNames<TongoAbi>> = AbiType<TongoAbi, TName>;
export type AuxAbiType<TName extends ExtractAbiTypeNames<AuxAbi>> = AbiType<AuxAbi, TName>;
export declare const tongoCodec: {
    encode<TName extends ExtractAbiTypeNames<readonly [{
        readonly type: "impl";
        readonly name: "TongoImpl";
        readonly interface_name: "tongo::tongo::ITongo::ITongo";
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
        readonly type: "struct";
        readonly name: "tongo::structs::common::state::TongoConfig";
        readonly members: readonly [{
            readonly name: "address";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "tag";
            readonly type: "core::felt252";
        }, {
            readonly name: "ERC20";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "owner";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "vault";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "rate";
            readonly type: "core::integer::u256";
        }, {
            readonly name: "bit_size";
            readonly type: "core::integer::u32";
        }, {
            readonly name: "auditor_key";
            readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::integer::u512";
        readonly members: readonly [{
            readonly name: "limb0";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb1";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb2";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb3";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::aecipher::AEBalance";
        readonly members: readonly [{
            readonly name: "ciphertext";
            readonly type: "core::integer::u512";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u256";
        }];
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
        readonly name: "tongo::structs::operations::fund::ProofOfFund";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
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
        readonly name: "tongo::structs::operations::audit::ProofOfAudit";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AL0";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AL1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AR1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }, {
            readonly name: "sb";
            readonly type: "core::felt252";
        }, {
            readonly name: "sr";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::audit::Audit";
        readonly members: readonly [{
            readonly name: "auditedBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::audit::ProofOfAudit";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::audit::Audit";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::fund::Fund";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::fund::ProofOfFund";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::fund::OutsideFund";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::array::Span::<tongo::structs::common::starkpoint::StarkPoint>";
        readonly members: readonly [{
            readonly name: "snapshot";
            readonly type: "@core::array::Array::<tongo::structs::common::starkpoint::StarkPoint>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::verifier::range::bitProof";
        readonly members: readonly [{
            readonly name: "A0";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "c0";
            readonly type: "core::felt252";
        }, {
            readonly name: "s0";
            readonly type: "core::felt252";
        }, {
            readonly name: "s1";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::array::Span::<tongo::verifier::range::bitProof>";
        readonly members: readonly [{
            readonly name: "snapshot";
            readonly type: "@core::array::Array::<tongo::verifier::range::bitProof>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::verifier::range::Range";
        readonly members: readonly [{
            readonly name: "commitments";
            readonly type: "core::array::Span::<tongo::structs::common::starkpoint::StarkPoint>";
        }, {
            readonly name: "proofs";
            readonly type: "core::array::Span::<tongo::verifier::range::bitProof>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::ProofOfWithdraw";
        readonly members: readonly [{
            readonly name: "A_x";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }, {
            readonly name: "sb";
            readonly type: "core::felt252";
        }, {
            readonly name: "sr";
            readonly type: "core::felt252";
        }, {
            readonly name: "range";
            readonly type: "tongo::verifier::range::Range";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::Withdraw";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "auxiliarCipher";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::withdraw::ProofOfWithdraw";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::common::relayer::RelayData";
        readonly members: readonly [{
            readonly name: "fee_to_sender";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::common::relayer::RelayData";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::WithdrawOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::withdraw::WithdrawOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::withdraw::WithdrawOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::ProofOfRagequit";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AR";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::Ragequit";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::ragequit::ProofOfRagequit";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::RagequitOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::ragequit::RagequitOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::ragequit::RagequitOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ProofOfTransfer";
        readonly members: readonly [{
            readonly name: "A_x";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_b";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_b2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_bar";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "s_x";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_r";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_b";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_b2";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_r2";
            readonly type: "core::felt252";
        }, {
            readonly name: "range";
            readonly type: "tongo::verifier::range::Range";
        }, {
            readonly name: "range2";
            readonly type: "tongo::verifier::range::Range";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::Transfer";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "transferBalanceSelf";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "hintLeftover";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "auxiliarCipher";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "auxiliarCipher2";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::transfer::ProofOfTransfer";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }, {
            readonly name: "auditPartTransfer";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ExternalData";
        readonly members: readonly [{
            readonly name: "toTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::transfer::ExternalData>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::transfer::ExternalData";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::TransferOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }, {
            readonly name: "externalData";
            readonly type: "core::option::Option::<tongo::structs::operations::transfer::ExternalData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::transfer::TransferOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::transfer::TransferOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::rollover::ProofOfRollOver";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::rollover::Rollover";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::rollover::ProofOfRollOver";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::common::state::State";
        readonly members: readonly [{
            readonly name: "balance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "pending";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
        }, {
            readonly name: "audit";
            readonly type: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
        }, {
            readonly name: "ae_balance";
            readonly type: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        }, {
            readonly name: "ae_audit_balance";
            readonly type: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ExternalTransfer";
        readonly members: readonly [{
            readonly name: "fromTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }];
    }, {
        readonly type: "interface";
        readonly name: "tongo::tongo::ITongo::ITongo";
        readonly items: readonly [{
            readonly type: "function";
            readonly name: "get_tongo_config";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::state::TongoConfig";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_vault";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_tag";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::felt252";
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
            readonly name: "get_owner";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "fund";
            readonly inputs: readonly [{
                readonly name: "fund";
                readonly type: "tongo::structs::operations::fund::Fund";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "outside_fund";
            readonly inputs: readonly [{
                readonly name: "outsideFund";
                readonly type: "tongo::structs::operations::fund::OutsideFund";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "withdraw";
            readonly inputs: readonly [{
                readonly name: "withdraw";
                readonly type: "tongo::structs::operations::withdraw::Withdraw";
            }, {
                readonly name: "withdraw_options";
                readonly type: "core::option::Option::<tongo::structs::operations::withdraw::WithdrawOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "ragequit";
            readonly inputs: readonly [{
                readonly name: "ragequit";
                readonly type: "tongo::structs::operations::ragequit::Ragequit";
            }, {
                readonly name: "ragequit_options";
                readonly type: "core::option::Option::<tongo::structs::operations::ragequit::RagequitOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "transfer";
            readonly inputs: readonly [{
                readonly name: "transfer";
                readonly type: "tongo::structs::operations::transfer::Transfer";
            }, {
                readonly name: "transfer_options";
                readonly type: "core::option::Option::<tongo::structs::operations::transfer::TransferOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "rollover";
            readonly inputs: readonly [{
                readonly name: "rollover";
                readonly type: "tongo::structs::operations::rollover::Rollover";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "get_balance";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_pending";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_audit";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_nonce";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "core::integer::u64";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_state";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::state::State";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "auditor_key";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "change_auditor_key";
            readonly inputs: readonly [{
                readonly name: "new_auditor_key";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "receive_external_transfer";
            readonly inputs: readonly [{
                readonly name: "external";
                readonly type: "tongo::structs::operations::transfer::ExternalTransfer";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "approveTongo";
            readonly inputs: readonly [{
                readonly name: "address";
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "revokeTongo";
            readonly inputs: readonly [{
                readonly name: "address";
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }];
    }, {
        readonly type: "constructor";
        readonly name: "constructor";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "tag";
            readonly type: "core::felt252";
        }, {
            readonly name: "ERC20";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "rate";
            readonly type: "core::integer::u256";
        }, {
            readonly name: "bit_size";
            readonly type: "core::integer::u32";
        }, {
            readonly name: "auditor_key";
            readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::TransferEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "toTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "transferBalanceSelf";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintLeftover";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::FundEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::OutsideFundEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::RolloverEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "rollovered";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::WithdrawEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::RagequitEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::BalanceDeclared";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "auditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }, {
            readonly name: "declaredCipherBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::TransferDeclared";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "auditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }, {
            readonly name: "declaredCipherBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::AuditorPubKeySet";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "keyNumber";
            readonly type: "core::integer::u128";
            readonly kind: "key";
        }, {
            readonly name: "AuditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::ReceivedExternalTransfer";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "fromTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "data";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::tongo::Tongo::Tongo::Event";
        readonly kind: "enum";
        readonly variants: readonly [{
            readonly name: "TransferEvent";
            readonly type: "tongo::structs::events::TransferEvent";
            readonly kind: "nested";
        }, {
            readonly name: "FundEvent";
            readonly type: "tongo::structs::events::FundEvent";
            readonly kind: "nested";
        }, {
            readonly name: "OutsideFundEvent";
            readonly type: "tongo::structs::events::OutsideFundEvent";
            readonly kind: "nested";
        }, {
            readonly name: "RolloverEvent";
            readonly type: "tongo::structs::events::RolloverEvent";
            readonly kind: "nested";
        }, {
            readonly name: "WithdrawEvent";
            readonly type: "tongo::structs::events::WithdrawEvent";
            readonly kind: "nested";
        }, {
            readonly name: "RagequitEvent";
            readonly type: "tongo::structs::events::RagequitEvent";
            readonly kind: "nested";
        }, {
            readonly name: "BalanceDeclared";
            readonly type: "tongo::structs::events::BalanceDeclared";
            readonly kind: "nested";
        }, {
            readonly name: "TransferDeclared";
            readonly type: "tongo::structs::events::TransferDeclared";
            readonly kind: "nested";
        }, {
            readonly name: "AuditorPubKeySet";
            readonly type: "tongo::structs::events::AuditorPubKeySet";
            readonly kind: "nested";
        }, {
            readonly name: "ReceivedExternalTransfer";
            readonly type: "tongo::structs::events::ReceivedExternalTransfer";
            readonly kind: "nested";
        }];
    }]>>(typeName: TName, data: import("abi-wan-kanabi/kanabi").StringToPrimitiveType<readonly [{
        readonly type: "impl";
        readonly name: "TongoImpl";
        readonly interface_name: "tongo::tongo::ITongo::ITongo";
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
        readonly type: "struct";
        readonly name: "tongo::structs::common::state::TongoConfig";
        readonly members: readonly [{
            readonly name: "address";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "tag";
            readonly type: "core::felt252";
        }, {
            readonly name: "ERC20";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "owner";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "vault";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "rate";
            readonly type: "core::integer::u256";
        }, {
            readonly name: "bit_size";
            readonly type: "core::integer::u32";
        }, {
            readonly name: "auditor_key";
            readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::integer::u512";
        readonly members: readonly [{
            readonly name: "limb0";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb1";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb2";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb3";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::aecipher::AEBalance";
        readonly members: readonly [{
            readonly name: "ciphertext";
            readonly type: "core::integer::u512";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u256";
        }];
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
        readonly name: "tongo::structs::operations::fund::ProofOfFund";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
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
        readonly name: "tongo::structs::operations::audit::ProofOfAudit";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AL0";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AL1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AR1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }, {
            readonly name: "sb";
            readonly type: "core::felt252";
        }, {
            readonly name: "sr";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::audit::Audit";
        readonly members: readonly [{
            readonly name: "auditedBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::audit::ProofOfAudit";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::audit::Audit";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::fund::Fund";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::fund::ProofOfFund";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::fund::OutsideFund";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::array::Span::<tongo::structs::common::starkpoint::StarkPoint>";
        readonly members: readonly [{
            readonly name: "snapshot";
            readonly type: "@core::array::Array::<tongo::structs::common::starkpoint::StarkPoint>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::verifier::range::bitProof";
        readonly members: readonly [{
            readonly name: "A0";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "c0";
            readonly type: "core::felt252";
        }, {
            readonly name: "s0";
            readonly type: "core::felt252";
        }, {
            readonly name: "s1";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::array::Span::<tongo::verifier::range::bitProof>";
        readonly members: readonly [{
            readonly name: "snapshot";
            readonly type: "@core::array::Array::<tongo::verifier::range::bitProof>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::verifier::range::Range";
        readonly members: readonly [{
            readonly name: "commitments";
            readonly type: "core::array::Span::<tongo::structs::common::starkpoint::StarkPoint>";
        }, {
            readonly name: "proofs";
            readonly type: "core::array::Span::<tongo::verifier::range::bitProof>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::ProofOfWithdraw";
        readonly members: readonly [{
            readonly name: "A_x";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }, {
            readonly name: "sb";
            readonly type: "core::felt252";
        }, {
            readonly name: "sr";
            readonly type: "core::felt252";
        }, {
            readonly name: "range";
            readonly type: "tongo::verifier::range::Range";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::Withdraw";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "auxiliarCipher";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::withdraw::ProofOfWithdraw";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::common::relayer::RelayData";
        readonly members: readonly [{
            readonly name: "fee_to_sender";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::common::relayer::RelayData";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::WithdrawOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::withdraw::WithdrawOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::withdraw::WithdrawOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::ProofOfRagequit";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AR";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::Ragequit";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::ragequit::ProofOfRagequit";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::RagequitOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::ragequit::RagequitOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::ragequit::RagequitOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ProofOfTransfer";
        readonly members: readonly [{
            readonly name: "A_x";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_b";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_b2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_bar";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "s_x";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_r";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_b";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_b2";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_r2";
            readonly type: "core::felt252";
        }, {
            readonly name: "range";
            readonly type: "tongo::verifier::range::Range";
        }, {
            readonly name: "range2";
            readonly type: "tongo::verifier::range::Range";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::Transfer";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "transferBalanceSelf";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "hintLeftover";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "auxiliarCipher";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "auxiliarCipher2";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::transfer::ProofOfTransfer";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }, {
            readonly name: "auditPartTransfer";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ExternalData";
        readonly members: readonly [{
            readonly name: "toTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::transfer::ExternalData>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::transfer::ExternalData";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::TransferOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }, {
            readonly name: "externalData";
            readonly type: "core::option::Option::<tongo::structs::operations::transfer::ExternalData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::transfer::TransferOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::transfer::TransferOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::rollover::ProofOfRollOver";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::rollover::Rollover";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::rollover::ProofOfRollOver";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::common::state::State";
        readonly members: readonly [{
            readonly name: "balance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "pending";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
        }, {
            readonly name: "audit";
            readonly type: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
        }, {
            readonly name: "ae_balance";
            readonly type: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        }, {
            readonly name: "ae_audit_balance";
            readonly type: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ExternalTransfer";
        readonly members: readonly [{
            readonly name: "fromTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }];
    }, {
        readonly type: "interface";
        readonly name: "tongo::tongo::ITongo::ITongo";
        readonly items: readonly [{
            readonly type: "function";
            readonly name: "get_tongo_config";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::state::TongoConfig";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_vault";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_tag";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::felt252";
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
            readonly name: "get_owner";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "fund";
            readonly inputs: readonly [{
                readonly name: "fund";
                readonly type: "tongo::structs::operations::fund::Fund";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "outside_fund";
            readonly inputs: readonly [{
                readonly name: "outsideFund";
                readonly type: "tongo::structs::operations::fund::OutsideFund";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "withdraw";
            readonly inputs: readonly [{
                readonly name: "withdraw";
                readonly type: "tongo::structs::operations::withdraw::Withdraw";
            }, {
                readonly name: "withdraw_options";
                readonly type: "core::option::Option::<tongo::structs::operations::withdraw::WithdrawOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "ragequit";
            readonly inputs: readonly [{
                readonly name: "ragequit";
                readonly type: "tongo::structs::operations::ragequit::Ragequit";
            }, {
                readonly name: "ragequit_options";
                readonly type: "core::option::Option::<tongo::structs::operations::ragequit::RagequitOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "transfer";
            readonly inputs: readonly [{
                readonly name: "transfer";
                readonly type: "tongo::structs::operations::transfer::Transfer";
            }, {
                readonly name: "transfer_options";
                readonly type: "core::option::Option::<tongo::structs::operations::transfer::TransferOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "rollover";
            readonly inputs: readonly [{
                readonly name: "rollover";
                readonly type: "tongo::structs::operations::rollover::Rollover";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "get_balance";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_pending";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_audit";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_nonce";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "core::integer::u64";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_state";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::state::State";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "auditor_key";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "change_auditor_key";
            readonly inputs: readonly [{
                readonly name: "new_auditor_key";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "receive_external_transfer";
            readonly inputs: readonly [{
                readonly name: "external";
                readonly type: "tongo::structs::operations::transfer::ExternalTransfer";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "approveTongo";
            readonly inputs: readonly [{
                readonly name: "address";
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "revokeTongo";
            readonly inputs: readonly [{
                readonly name: "address";
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }];
    }, {
        readonly type: "constructor";
        readonly name: "constructor";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "tag";
            readonly type: "core::felt252";
        }, {
            readonly name: "ERC20";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "rate";
            readonly type: "core::integer::u256";
        }, {
            readonly name: "bit_size";
            readonly type: "core::integer::u32";
        }, {
            readonly name: "auditor_key";
            readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::TransferEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "toTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "transferBalanceSelf";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintLeftover";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::FundEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::OutsideFundEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::RolloverEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "rollovered";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::WithdrawEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::RagequitEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::BalanceDeclared";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "auditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }, {
            readonly name: "declaredCipherBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::TransferDeclared";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "auditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }, {
            readonly name: "declaredCipherBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::AuditorPubKeySet";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "keyNumber";
            readonly type: "core::integer::u128";
            readonly kind: "key";
        }, {
            readonly name: "AuditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::ReceivedExternalTransfer";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "fromTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "data";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::tongo::Tongo::Tongo::Event";
        readonly kind: "enum";
        readonly variants: readonly [{
            readonly name: "TransferEvent";
            readonly type: "tongo::structs::events::TransferEvent";
            readonly kind: "nested";
        }, {
            readonly name: "FundEvent";
            readonly type: "tongo::structs::events::FundEvent";
            readonly kind: "nested";
        }, {
            readonly name: "OutsideFundEvent";
            readonly type: "tongo::structs::events::OutsideFundEvent";
            readonly kind: "nested";
        }, {
            readonly name: "RolloverEvent";
            readonly type: "tongo::structs::events::RolloverEvent";
            readonly kind: "nested";
        }, {
            readonly name: "WithdrawEvent";
            readonly type: "tongo::structs::events::WithdrawEvent";
            readonly kind: "nested";
        }, {
            readonly name: "RagequitEvent";
            readonly type: "tongo::structs::events::RagequitEvent";
            readonly kind: "nested";
        }, {
            readonly name: "BalanceDeclared";
            readonly type: "tongo::structs::events::BalanceDeclared";
            readonly kind: "nested";
        }, {
            readonly name: "TransferDeclared";
            readonly type: "tongo::structs::events::TransferDeclared";
            readonly kind: "nested";
        }, {
            readonly name: "AuditorPubKeySet";
            readonly type: "tongo::structs::events::AuditorPubKeySet";
            readonly kind: "nested";
        }, {
            readonly name: "ReceivedExternalTransfer";
            readonly type: "tongo::structs::events::ReceivedExternalTransfer";
            readonly kind: "nested";
        }];
    }], TName>): string[];
    decode<TName extends ExtractAbiTypeNames<readonly [{
        readonly type: "impl";
        readonly name: "TongoImpl";
        readonly interface_name: "tongo::tongo::ITongo::ITongo";
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
        readonly type: "struct";
        readonly name: "tongo::structs::common::state::TongoConfig";
        readonly members: readonly [{
            readonly name: "address";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "tag";
            readonly type: "core::felt252";
        }, {
            readonly name: "ERC20";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "owner";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "vault";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "rate";
            readonly type: "core::integer::u256";
        }, {
            readonly name: "bit_size";
            readonly type: "core::integer::u32";
        }, {
            readonly name: "auditor_key";
            readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::integer::u512";
        readonly members: readonly [{
            readonly name: "limb0";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb1";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb2";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb3";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::aecipher::AEBalance";
        readonly members: readonly [{
            readonly name: "ciphertext";
            readonly type: "core::integer::u512";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u256";
        }];
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
        readonly name: "tongo::structs::operations::fund::ProofOfFund";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
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
        readonly name: "tongo::structs::operations::audit::ProofOfAudit";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AL0";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AL1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AR1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }, {
            readonly name: "sb";
            readonly type: "core::felt252";
        }, {
            readonly name: "sr";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::audit::Audit";
        readonly members: readonly [{
            readonly name: "auditedBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::audit::ProofOfAudit";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::audit::Audit";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::fund::Fund";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::fund::ProofOfFund";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::fund::OutsideFund";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::array::Span::<tongo::structs::common::starkpoint::StarkPoint>";
        readonly members: readonly [{
            readonly name: "snapshot";
            readonly type: "@core::array::Array::<tongo::structs::common::starkpoint::StarkPoint>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::verifier::range::bitProof";
        readonly members: readonly [{
            readonly name: "A0";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "c0";
            readonly type: "core::felt252";
        }, {
            readonly name: "s0";
            readonly type: "core::felt252";
        }, {
            readonly name: "s1";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::array::Span::<tongo::verifier::range::bitProof>";
        readonly members: readonly [{
            readonly name: "snapshot";
            readonly type: "@core::array::Array::<tongo::verifier::range::bitProof>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::verifier::range::Range";
        readonly members: readonly [{
            readonly name: "commitments";
            readonly type: "core::array::Span::<tongo::structs::common::starkpoint::StarkPoint>";
        }, {
            readonly name: "proofs";
            readonly type: "core::array::Span::<tongo::verifier::range::bitProof>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::ProofOfWithdraw";
        readonly members: readonly [{
            readonly name: "A_x";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }, {
            readonly name: "sb";
            readonly type: "core::felt252";
        }, {
            readonly name: "sr";
            readonly type: "core::felt252";
        }, {
            readonly name: "range";
            readonly type: "tongo::verifier::range::Range";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::Withdraw";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "auxiliarCipher";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::withdraw::ProofOfWithdraw";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::common::relayer::RelayData";
        readonly members: readonly [{
            readonly name: "fee_to_sender";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::common::relayer::RelayData";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::WithdrawOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::withdraw::WithdrawOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::withdraw::WithdrawOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::ProofOfRagequit";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AR";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::Ragequit";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::ragequit::ProofOfRagequit";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::RagequitOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::ragequit::RagequitOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::ragequit::RagequitOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ProofOfTransfer";
        readonly members: readonly [{
            readonly name: "A_x";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_b";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_b2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_bar";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "s_x";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_r";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_b";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_b2";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_r2";
            readonly type: "core::felt252";
        }, {
            readonly name: "range";
            readonly type: "tongo::verifier::range::Range";
        }, {
            readonly name: "range2";
            readonly type: "tongo::verifier::range::Range";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::Transfer";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "transferBalanceSelf";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "hintLeftover";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "auxiliarCipher";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "auxiliarCipher2";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::transfer::ProofOfTransfer";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }, {
            readonly name: "auditPartTransfer";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ExternalData";
        readonly members: readonly [{
            readonly name: "toTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::transfer::ExternalData>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::transfer::ExternalData";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::TransferOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }, {
            readonly name: "externalData";
            readonly type: "core::option::Option::<tongo::structs::operations::transfer::ExternalData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::transfer::TransferOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::transfer::TransferOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::rollover::ProofOfRollOver";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::rollover::Rollover";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::rollover::ProofOfRollOver";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::common::state::State";
        readonly members: readonly [{
            readonly name: "balance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "pending";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
        }, {
            readonly name: "audit";
            readonly type: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
        }, {
            readonly name: "ae_balance";
            readonly type: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        }, {
            readonly name: "ae_audit_balance";
            readonly type: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ExternalTransfer";
        readonly members: readonly [{
            readonly name: "fromTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }];
    }, {
        readonly type: "interface";
        readonly name: "tongo::tongo::ITongo::ITongo";
        readonly items: readonly [{
            readonly type: "function";
            readonly name: "get_tongo_config";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::state::TongoConfig";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_vault";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_tag";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::felt252";
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
            readonly name: "get_owner";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "fund";
            readonly inputs: readonly [{
                readonly name: "fund";
                readonly type: "tongo::structs::operations::fund::Fund";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "outside_fund";
            readonly inputs: readonly [{
                readonly name: "outsideFund";
                readonly type: "tongo::structs::operations::fund::OutsideFund";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "withdraw";
            readonly inputs: readonly [{
                readonly name: "withdraw";
                readonly type: "tongo::structs::operations::withdraw::Withdraw";
            }, {
                readonly name: "withdraw_options";
                readonly type: "core::option::Option::<tongo::structs::operations::withdraw::WithdrawOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "ragequit";
            readonly inputs: readonly [{
                readonly name: "ragequit";
                readonly type: "tongo::structs::operations::ragequit::Ragequit";
            }, {
                readonly name: "ragequit_options";
                readonly type: "core::option::Option::<tongo::structs::operations::ragequit::RagequitOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "transfer";
            readonly inputs: readonly [{
                readonly name: "transfer";
                readonly type: "tongo::structs::operations::transfer::Transfer";
            }, {
                readonly name: "transfer_options";
                readonly type: "core::option::Option::<tongo::structs::operations::transfer::TransferOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "rollover";
            readonly inputs: readonly [{
                readonly name: "rollover";
                readonly type: "tongo::structs::operations::rollover::Rollover";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "get_balance";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_pending";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_audit";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_nonce";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "core::integer::u64";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_state";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::state::State";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "auditor_key";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "change_auditor_key";
            readonly inputs: readonly [{
                readonly name: "new_auditor_key";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "receive_external_transfer";
            readonly inputs: readonly [{
                readonly name: "external";
                readonly type: "tongo::structs::operations::transfer::ExternalTransfer";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "approveTongo";
            readonly inputs: readonly [{
                readonly name: "address";
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "revokeTongo";
            readonly inputs: readonly [{
                readonly name: "address";
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }];
    }, {
        readonly type: "constructor";
        readonly name: "constructor";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "tag";
            readonly type: "core::felt252";
        }, {
            readonly name: "ERC20";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "rate";
            readonly type: "core::integer::u256";
        }, {
            readonly name: "bit_size";
            readonly type: "core::integer::u32";
        }, {
            readonly name: "auditor_key";
            readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::TransferEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "toTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "transferBalanceSelf";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintLeftover";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::FundEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::OutsideFundEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::RolloverEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "rollovered";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::WithdrawEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::RagequitEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::BalanceDeclared";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "auditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }, {
            readonly name: "declaredCipherBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::TransferDeclared";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "auditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }, {
            readonly name: "declaredCipherBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::AuditorPubKeySet";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "keyNumber";
            readonly type: "core::integer::u128";
            readonly kind: "key";
        }, {
            readonly name: "AuditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::ReceivedExternalTransfer";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "fromTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "data";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::tongo::Tongo::Tongo::Event";
        readonly kind: "enum";
        readonly variants: readonly [{
            readonly name: "TransferEvent";
            readonly type: "tongo::structs::events::TransferEvent";
            readonly kind: "nested";
        }, {
            readonly name: "FundEvent";
            readonly type: "tongo::structs::events::FundEvent";
            readonly kind: "nested";
        }, {
            readonly name: "OutsideFundEvent";
            readonly type: "tongo::structs::events::OutsideFundEvent";
            readonly kind: "nested";
        }, {
            readonly name: "RolloverEvent";
            readonly type: "tongo::structs::events::RolloverEvent";
            readonly kind: "nested";
        }, {
            readonly name: "WithdrawEvent";
            readonly type: "tongo::structs::events::WithdrawEvent";
            readonly kind: "nested";
        }, {
            readonly name: "RagequitEvent";
            readonly type: "tongo::structs::events::RagequitEvent";
            readonly kind: "nested";
        }, {
            readonly name: "BalanceDeclared";
            readonly type: "tongo::structs::events::BalanceDeclared";
            readonly kind: "nested";
        }, {
            readonly name: "TransferDeclared";
            readonly type: "tongo::structs::events::TransferDeclared";
            readonly kind: "nested";
        }, {
            readonly name: "AuditorPubKeySet";
            readonly type: "tongo::structs::events::AuditorPubKeySet";
            readonly kind: "nested";
        }, {
            readonly name: "ReceivedExternalTransfer";
            readonly type: "tongo::structs::events::ReceivedExternalTransfer";
            readonly kind: "nested";
        }];
    }]>>(typeName: TName, calldata: string[]): import("abi-wan-kanabi/kanabi").StringToPrimitiveType<readonly [{
        readonly type: "impl";
        readonly name: "TongoImpl";
        readonly interface_name: "tongo::tongo::ITongo::ITongo";
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
        readonly type: "struct";
        readonly name: "tongo::structs::common::state::TongoConfig";
        readonly members: readonly [{
            readonly name: "address";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "tag";
            readonly type: "core::felt252";
        }, {
            readonly name: "ERC20";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "owner";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "vault";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "rate";
            readonly type: "core::integer::u256";
        }, {
            readonly name: "bit_size";
            readonly type: "core::integer::u32";
        }, {
            readonly name: "auditor_key";
            readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::integer::u512";
        readonly members: readonly [{
            readonly name: "limb0";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb1";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb2";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb3";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::aecipher::AEBalance";
        readonly members: readonly [{
            readonly name: "ciphertext";
            readonly type: "core::integer::u512";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u256";
        }];
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
        readonly name: "tongo::structs::operations::fund::ProofOfFund";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
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
        readonly name: "tongo::structs::operations::audit::ProofOfAudit";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AL0";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AL1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AR1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }, {
            readonly name: "sb";
            readonly type: "core::felt252";
        }, {
            readonly name: "sr";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::audit::Audit";
        readonly members: readonly [{
            readonly name: "auditedBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::audit::ProofOfAudit";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::audit::Audit";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::fund::Fund";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::fund::ProofOfFund";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::fund::OutsideFund";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::array::Span::<tongo::structs::common::starkpoint::StarkPoint>";
        readonly members: readonly [{
            readonly name: "snapshot";
            readonly type: "@core::array::Array::<tongo::structs::common::starkpoint::StarkPoint>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::verifier::range::bitProof";
        readonly members: readonly [{
            readonly name: "A0";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "c0";
            readonly type: "core::felt252";
        }, {
            readonly name: "s0";
            readonly type: "core::felt252";
        }, {
            readonly name: "s1";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::array::Span::<tongo::verifier::range::bitProof>";
        readonly members: readonly [{
            readonly name: "snapshot";
            readonly type: "@core::array::Array::<tongo::verifier::range::bitProof>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::verifier::range::Range";
        readonly members: readonly [{
            readonly name: "commitments";
            readonly type: "core::array::Span::<tongo::structs::common::starkpoint::StarkPoint>";
        }, {
            readonly name: "proofs";
            readonly type: "core::array::Span::<tongo::verifier::range::bitProof>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::ProofOfWithdraw";
        readonly members: readonly [{
            readonly name: "A_x";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }, {
            readonly name: "sb";
            readonly type: "core::felt252";
        }, {
            readonly name: "sr";
            readonly type: "core::felt252";
        }, {
            readonly name: "range";
            readonly type: "tongo::verifier::range::Range";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::Withdraw";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "auxiliarCipher";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::withdraw::ProofOfWithdraw";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::common::relayer::RelayData";
        readonly members: readonly [{
            readonly name: "fee_to_sender";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::common::relayer::RelayData";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::WithdrawOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::withdraw::WithdrawOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::withdraw::WithdrawOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::ProofOfRagequit";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AR";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::Ragequit";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::ragequit::ProofOfRagequit";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::RagequitOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::ragequit::RagequitOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::ragequit::RagequitOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ProofOfTransfer";
        readonly members: readonly [{
            readonly name: "A_x";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_b";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_b2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_bar";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "s_x";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_r";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_b";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_b2";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_r2";
            readonly type: "core::felt252";
        }, {
            readonly name: "range";
            readonly type: "tongo::verifier::range::Range";
        }, {
            readonly name: "range2";
            readonly type: "tongo::verifier::range::Range";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::Transfer";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "transferBalanceSelf";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "hintLeftover";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "auxiliarCipher";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "auxiliarCipher2";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::transfer::ProofOfTransfer";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }, {
            readonly name: "auditPartTransfer";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ExternalData";
        readonly members: readonly [{
            readonly name: "toTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::transfer::ExternalData>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::transfer::ExternalData";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::TransferOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }, {
            readonly name: "externalData";
            readonly type: "core::option::Option::<tongo::structs::operations::transfer::ExternalData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::transfer::TransferOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::transfer::TransferOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::rollover::ProofOfRollOver";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::rollover::Rollover";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::rollover::ProofOfRollOver";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::common::state::State";
        readonly members: readonly [{
            readonly name: "balance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "pending";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
        }, {
            readonly name: "audit";
            readonly type: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
        }, {
            readonly name: "ae_balance";
            readonly type: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        }, {
            readonly name: "ae_audit_balance";
            readonly type: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ExternalTransfer";
        readonly members: readonly [{
            readonly name: "fromTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }];
    }, {
        readonly type: "interface";
        readonly name: "tongo::tongo::ITongo::ITongo";
        readonly items: readonly [{
            readonly type: "function";
            readonly name: "get_tongo_config";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::state::TongoConfig";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_vault";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_tag";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::felt252";
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
            readonly name: "get_owner";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "fund";
            readonly inputs: readonly [{
                readonly name: "fund";
                readonly type: "tongo::structs::operations::fund::Fund";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "outside_fund";
            readonly inputs: readonly [{
                readonly name: "outsideFund";
                readonly type: "tongo::structs::operations::fund::OutsideFund";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "withdraw";
            readonly inputs: readonly [{
                readonly name: "withdraw";
                readonly type: "tongo::structs::operations::withdraw::Withdraw";
            }, {
                readonly name: "withdraw_options";
                readonly type: "core::option::Option::<tongo::structs::operations::withdraw::WithdrawOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "ragequit";
            readonly inputs: readonly [{
                readonly name: "ragequit";
                readonly type: "tongo::structs::operations::ragequit::Ragequit";
            }, {
                readonly name: "ragequit_options";
                readonly type: "core::option::Option::<tongo::structs::operations::ragequit::RagequitOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "transfer";
            readonly inputs: readonly [{
                readonly name: "transfer";
                readonly type: "tongo::structs::operations::transfer::Transfer";
            }, {
                readonly name: "transfer_options";
                readonly type: "core::option::Option::<tongo::structs::operations::transfer::TransferOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "rollover";
            readonly inputs: readonly [{
                readonly name: "rollover";
                readonly type: "tongo::structs::operations::rollover::Rollover";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "get_balance";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_pending";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_audit";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_nonce";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "core::integer::u64";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_state";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::state::State";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "auditor_key";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "change_auditor_key";
            readonly inputs: readonly [{
                readonly name: "new_auditor_key";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "receive_external_transfer";
            readonly inputs: readonly [{
                readonly name: "external";
                readonly type: "tongo::structs::operations::transfer::ExternalTransfer";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "approveTongo";
            readonly inputs: readonly [{
                readonly name: "address";
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "revokeTongo";
            readonly inputs: readonly [{
                readonly name: "address";
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }];
    }, {
        readonly type: "constructor";
        readonly name: "constructor";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "tag";
            readonly type: "core::felt252";
        }, {
            readonly name: "ERC20";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "rate";
            readonly type: "core::integer::u256";
        }, {
            readonly name: "bit_size";
            readonly type: "core::integer::u32";
        }, {
            readonly name: "auditor_key";
            readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::TransferEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "toTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "transferBalanceSelf";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintLeftover";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::FundEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::OutsideFundEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::RolloverEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "rollovered";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::WithdrawEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::RagequitEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::BalanceDeclared";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "auditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }, {
            readonly name: "declaredCipherBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::TransferDeclared";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "auditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }, {
            readonly name: "declaredCipherBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::AuditorPubKeySet";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "keyNumber";
            readonly type: "core::integer::u128";
            readonly kind: "key";
        }, {
            readonly name: "AuditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::ReceivedExternalTransfer";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "fromTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "data";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::tongo::Tongo::Tongo::Event";
        readonly kind: "enum";
        readonly variants: readonly [{
            readonly name: "TransferEvent";
            readonly type: "tongo::structs::events::TransferEvent";
            readonly kind: "nested";
        }, {
            readonly name: "FundEvent";
            readonly type: "tongo::structs::events::FundEvent";
            readonly kind: "nested";
        }, {
            readonly name: "OutsideFundEvent";
            readonly type: "tongo::structs::events::OutsideFundEvent";
            readonly kind: "nested";
        }, {
            readonly name: "RolloverEvent";
            readonly type: "tongo::structs::events::RolloverEvent";
            readonly kind: "nested";
        }, {
            readonly name: "WithdrawEvent";
            readonly type: "tongo::structs::events::WithdrawEvent";
            readonly kind: "nested";
        }, {
            readonly name: "RagequitEvent";
            readonly type: "tongo::structs::events::RagequitEvent";
            readonly kind: "nested";
        }, {
            readonly name: "BalanceDeclared";
            readonly type: "tongo::structs::events::BalanceDeclared";
            readonly kind: "nested";
        }, {
            readonly name: "TransferDeclared";
            readonly type: "tongo::structs::events::TransferDeclared";
            readonly kind: "nested";
        }, {
            readonly name: "AuditorPubKeySet";
            readonly type: "tongo::structs::events::AuditorPubKeySet";
            readonly kind: "nested";
        }, {
            readonly name: "ReceivedExternalTransfer";
            readonly type: "tongo::structs::events::ReceivedExternalTransfer";
            readonly kind: "nested";
        }];
    }], TName>;
    encodeConstructor(data: import("@fatsolutions/cairo-abi-codec").ConstructorArgs<readonly [{
        readonly type: "impl";
        readonly name: "TongoImpl";
        readonly interface_name: "tongo::tongo::ITongo::ITongo";
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
        readonly type: "struct";
        readonly name: "tongo::structs::common::state::TongoConfig";
        readonly members: readonly [{
            readonly name: "address";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "tag";
            readonly type: "core::felt252";
        }, {
            readonly name: "ERC20";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "owner";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "vault";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "rate";
            readonly type: "core::integer::u256";
        }, {
            readonly name: "bit_size";
            readonly type: "core::integer::u32";
        }, {
            readonly name: "auditor_key";
            readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::integer::u512";
        readonly members: readonly [{
            readonly name: "limb0";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb1";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb2";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb3";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::aecipher::AEBalance";
        readonly members: readonly [{
            readonly name: "ciphertext";
            readonly type: "core::integer::u512";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u256";
        }];
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
        readonly name: "tongo::structs::operations::fund::ProofOfFund";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
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
        readonly name: "tongo::structs::operations::audit::ProofOfAudit";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AL0";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AL1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AR1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }, {
            readonly name: "sb";
            readonly type: "core::felt252";
        }, {
            readonly name: "sr";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::audit::Audit";
        readonly members: readonly [{
            readonly name: "auditedBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::audit::ProofOfAudit";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::audit::Audit";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::fund::Fund";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::fund::ProofOfFund";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::fund::OutsideFund";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::array::Span::<tongo::structs::common::starkpoint::StarkPoint>";
        readonly members: readonly [{
            readonly name: "snapshot";
            readonly type: "@core::array::Array::<tongo::structs::common::starkpoint::StarkPoint>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::verifier::range::bitProof";
        readonly members: readonly [{
            readonly name: "A0";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "c0";
            readonly type: "core::felt252";
        }, {
            readonly name: "s0";
            readonly type: "core::felt252";
        }, {
            readonly name: "s1";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::array::Span::<tongo::verifier::range::bitProof>";
        readonly members: readonly [{
            readonly name: "snapshot";
            readonly type: "@core::array::Array::<tongo::verifier::range::bitProof>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::verifier::range::Range";
        readonly members: readonly [{
            readonly name: "commitments";
            readonly type: "core::array::Span::<tongo::structs::common::starkpoint::StarkPoint>";
        }, {
            readonly name: "proofs";
            readonly type: "core::array::Span::<tongo::verifier::range::bitProof>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::ProofOfWithdraw";
        readonly members: readonly [{
            readonly name: "A_x";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }, {
            readonly name: "sb";
            readonly type: "core::felt252";
        }, {
            readonly name: "sr";
            readonly type: "core::felt252";
        }, {
            readonly name: "range";
            readonly type: "tongo::verifier::range::Range";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::Withdraw";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "auxiliarCipher";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::withdraw::ProofOfWithdraw";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::common::relayer::RelayData";
        readonly members: readonly [{
            readonly name: "fee_to_sender";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::common::relayer::RelayData";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::WithdrawOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::withdraw::WithdrawOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::withdraw::WithdrawOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::ProofOfRagequit";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AR";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::Ragequit";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::ragequit::ProofOfRagequit";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::RagequitOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::ragequit::RagequitOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::ragequit::RagequitOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ProofOfTransfer";
        readonly members: readonly [{
            readonly name: "A_x";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_b";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_b2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_bar";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "s_x";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_r";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_b";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_b2";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_r2";
            readonly type: "core::felt252";
        }, {
            readonly name: "range";
            readonly type: "tongo::verifier::range::Range";
        }, {
            readonly name: "range2";
            readonly type: "tongo::verifier::range::Range";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::Transfer";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "transferBalanceSelf";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "hintLeftover";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "auxiliarCipher";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "auxiliarCipher2";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::transfer::ProofOfTransfer";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }, {
            readonly name: "auditPartTransfer";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ExternalData";
        readonly members: readonly [{
            readonly name: "toTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::transfer::ExternalData>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::transfer::ExternalData";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::TransferOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }, {
            readonly name: "externalData";
            readonly type: "core::option::Option::<tongo::structs::operations::transfer::ExternalData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::transfer::TransferOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::transfer::TransferOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::rollover::ProofOfRollOver";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::rollover::Rollover";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::rollover::ProofOfRollOver";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::common::state::State";
        readonly members: readonly [{
            readonly name: "balance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "pending";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
        }, {
            readonly name: "audit";
            readonly type: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
        }, {
            readonly name: "ae_balance";
            readonly type: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        }, {
            readonly name: "ae_audit_balance";
            readonly type: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ExternalTransfer";
        readonly members: readonly [{
            readonly name: "fromTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }];
    }, {
        readonly type: "interface";
        readonly name: "tongo::tongo::ITongo::ITongo";
        readonly items: readonly [{
            readonly type: "function";
            readonly name: "get_tongo_config";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::state::TongoConfig";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_vault";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_tag";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::felt252";
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
            readonly name: "get_owner";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "fund";
            readonly inputs: readonly [{
                readonly name: "fund";
                readonly type: "tongo::structs::operations::fund::Fund";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "outside_fund";
            readonly inputs: readonly [{
                readonly name: "outsideFund";
                readonly type: "tongo::structs::operations::fund::OutsideFund";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "withdraw";
            readonly inputs: readonly [{
                readonly name: "withdraw";
                readonly type: "tongo::structs::operations::withdraw::Withdraw";
            }, {
                readonly name: "withdraw_options";
                readonly type: "core::option::Option::<tongo::structs::operations::withdraw::WithdrawOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "ragequit";
            readonly inputs: readonly [{
                readonly name: "ragequit";
                readonly type: "tongo::structs::operations::ragequit::Ragequit";
            }, {
                readonly name: "ragequit_options";
                readonly type: "core::option::Option::<tongo::structs::operations::ragequit::RagequitOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "transfer";
            readonly inputs: readonly [{
                readonly name: "transfer";
                readonly type: "tongo::structs::operations::transfer::Transfer";
            }, {
                readonly name: "transfer_options";
                readonly type: "core::option::Option::<tongo::structs::operations::transfer::TransferOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "rollover";
            readonly inputs: readonly [{
                readonly name: "rollover";
                readonly type: "tongo::structs::operations::rollover::Rollover";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "get_balance";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_pending";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_audit";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_nonce";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "core::integer::u64";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_state";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::state::State";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "auditor_key";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "change_auditor_key";
            readonly inputs: readonly [{
                readonly name: "new_auditor_key";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "receive_external_transfer";
            readonly inputs: readonly [{
                readonly name: "external";
                readonly type: "tongo::structs::operations::transfer::ExternalTransfer";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "approveTongo";
            readonly inputs: readonly [{
                readonly name: "address";
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "revokeTongo";
            readonly inputs: readonly [{
                readonly name: "address";
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }];
    }, {
        readonly type: "constructor";
        readonly name: "constructor";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "tag";
            readonly type: "core::felt252";
        }, {
            readonly name: "ERC20";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "rate";
            readonly type: "core::integer::u256";
        }, {
            readonly name: "bit_size";
            readonly type: "core::integer::u32";
        }, {
            readonly name: "auditor_key";
            readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::TransferEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "toTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "transferBalanceSelf";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintLeftover";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::FundEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::OutsideFundEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::RolloverEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "rollovered";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::WithdrawEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::RagequitEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::BalanceDeclared";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "auditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }, {
            readonly name: "declaredCipherBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::TransferDeclared";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "auditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }, {
            readonly name: "declaredCipherBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::AuditorPubKeySet";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "keyNumber";
            readonly type: "core::integer::u128";
            readonly kind: "key";
        }, {
            readonly name: "AuditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::ReceivedExternalTransfer";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "fromTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "data";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::tongo::Tongo::Tongo::Event";
        readonly kind: "enum";
        readonly variants: readonly [{
            readonly name: "TransferEvent";
            readonly type: "tongo::structs::events::TransferEvent";
            readonly kind: "nested";
        }, {
            readonly name: "FundEvent";
            readonly type: "tongo::structs::events::FundEvent";
            readonly kind: "nested";
        }, {
            readonly name: "OutsideFundEvent";
            readonly type: "tongo::structs::events::OutsideFundEvent";
            readonly kind: "nested";
        }, {
            readonly name: "RolloverEvent";
            readonly type: "tongo::structs::events::RolloverEvent";
            readonly kind: "nested";
        }, {
            readonly name: "WithdrawEvent";
            readonly type: "tongo::structs::events::WithdrawEvent";
            readonly kind: "nested";
        }, {
            readonly name: "RagequitEvent";
            readonly type: "tongo::structs::events::RagequitEvent";
            readonly kind: "nested";
        }, {
            readonly name: "BalanceDeclared";
            readonly type: "tongo::structs::events::BalanceDeclared";
            readonly kind: "nested";
        }, {
            readonly name: "TransferDeclared";
            readonly type: "tongo::structs::events::TransferDeclared";
            readonly kind: "nested";
        }, {
            readonly name: "AuditorPubKeySet";
            readonly type: "tongo::structs::events::AuditorPubKeySet";
            readonly kind: "nested";
        }, {
            readonly name: "ReceivedExternalTransfer";
            readonly type: "tongo::structs::events::ReceivedExternalTransfer";
            readonly kind: "nested";
        }];
    }]>): string[];
    decodeConstructor(calldata: string[]): import("@fatsolutions/cairo-abi-codec").ConstructorArgs<readonly [{
        readonly type: "impl";
        readonly name: "TongoImpl";
        readonly interface_name: "tongo::tongo::ITongo::ITongo";
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
        readonly type: "struct";
        readonly name: "tongo::structs::common::state::TongoConfig";
        readonly members: readonly [{
            readonly name: "address";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "tag";
            readonly type: "core::felt252";
        }, {
            readonly name: "ERC20";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "owner";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "vault";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "rate";
            readonly type: "core::integer::u256";
        }, {
            readonly name: "bit_size";
            readonly type: "core::integer::u32";
        }, {
            readonly name: "auditor_key";
            readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::integer::u512";
        readonly members: readonly [{
            readonly name: "limb0";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb1";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb2";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb3";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::aecipher::AEBalance";
        readonly members: readonly [{
            readonly name: "ciphertext";
            readonly type: "core::integer::u512";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u256";
        }];
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
        readonly name: "tongo::structs::operations::fund::ProofOfFund";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
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
        readonly name: "tongo::structs::operations::audit::ProofOfAudit";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AL0";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AL1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AR1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }, {
            readonly name: "sb";
            readonly type: "core::felt252";
        }, {
            readonly name: "sr";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::audit::Audit";
        readonly members: readonly [{
            readonly name: "auditedBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::audit::ProofOfAudit";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::audit::Audit";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::fund::Fund";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::fund::ProofOfFund";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::fund::OutsideFund";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::array::Span::<tongo::structs::common::starkpoint::StarkPoint>";
        readonly members: readonly [{
            readonly name: "snapshot";
            readonly type: "@core::array::Array::<tongo::structs::common::starkpoint::StarkPoint>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::verifier::range::bitProof";
        readonly members: readonly [{
            readonly name: "A0";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "c0";
            readonly type: "core::felt252";
        }, {
            readonly name: "s0";
            readonly type: "core::felt252";
        }, {
            readonly name: "s1";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::array::Span::<tongo::verifier::range::bitProof>";
        readonly members: readonly [{
            readonly name: "snapshot";
            readonly type: "@core::array::Array::<tongo::verifier::range::bitProof>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::verifier::range::Range";
        readonly members: readonly [{
            readonly name: "commitments";
            readonly type: "core::array::Span::<tongo::structs::common::starkpoint::StarkPoint>";
        }, {
            readonly name: "proofs";
            readonly type: "core::array::Span::<tongo::verifier::range::bitProof>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::ProofOfWithdraw";
        readonly members: readonly [{
            readonly name: "A_x";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }, {
            readonly name: "sb";
            readonly type: "core::felt252";
        }, {
            readonly name: "sr";
            readonly type: "core::felt252";
        }, {
            readonly name: "range";
            readonly type: "tongo::verifier::range::Range";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::Withdraw";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "auxiliarCipher";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::withdraw::ProofOfWithdraw";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::common::relayer::RelayData";
        readonly members: readonly [{
            readonly name: "fee_to_sender";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::common::relayer::RelayData";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::WithdrawOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::withdraw::WithdrawOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::withdraw::WithdrawOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::ProofOfRagequit";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AR";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::Ragequit";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::ragequit::ProofOfRagequit";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::RagequitOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::ragequit::RagequitOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::ragequit::RagequitOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ProofOfTransfer";
        readonly members: readonly [{
            readonly name: "A_x";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_b";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_b2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_bar";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "s_x";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_r";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_b";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_b2";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_r2";
            readonly type: "core::felt252";
        }, {
            readonly name: "range";
            readonly type: "tongo::verifier::range::Range";
        }, {
            readonly name: "range2";
            readonly type: "tongo::verifier::range::Range";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::Transfer";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "transferBalanceSelf";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "hintLeftover";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "auxiliarCipher";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "auxiliarCipher2";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::transfer::ProofOfTransfer";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }, {
            readonly name: "auditPartTransfer";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ExternalData";
        readonly members: readonly [{
            readonly name: "toTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::transfer::ExternalData>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::transfer::ExternalData";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::TransferOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }, {
            readonly name: "externalData";
            readonly type: "core::option::Option::<tongo::structs::operations::transfer::ExternalData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::transfer::TransferOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::transfer::TransferOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::rollover::ProofOfRollOver";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::rollover::Rollover";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::rollover::ProofOfRollOver";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::common::state::State";
        readonly members: readonly [{
            readonly name: "balance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "pending";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
        }, {
            readonly name: "audit";
            readonly type: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
        }, {
            readonly name: "ae_balance";
            readonly type: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        }, {
            readonly name: "ae_audit_balance";
            readonly type: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ExternalTransfer";
        readonly members: readonly [{
            readonly name: "fromTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }];
    }, {
        readonly type: "interface";
        readonly name: "tongo::tongo::ITongo::ITongo";
        readonly items: readonly [{
            readonly type: "function";
            readonly name: "get_tongo_config";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::state::TongoConfig";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_vault";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_tag";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::felt252";
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
            readonly name: "get_owner";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "fund";
            readonly inputs: readonly [{
                readonly name: "fund";
                readonly type: "tongo::structs::operations::fund::Fund";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "outside_fund";
            readonly inputs: readonly [{
                readonly name: "outsideFund";
                readonly type: "tongo::structs::operations::fund::OutsideFund";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "withdraw";
            readonly inputs: readonly [{
                readonly name: "withdraw";
                readonly type: "tongo::structs::operations::withdraw::Withdraw";
            }, {
                readonly name: "withdraw_options";
                readonly type: "core::option::Option::<tongo::structs::operations::withdraw::WithdrawOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "ragequit";
            readonly inputs: readonly [{
                readonly name: "ragequit";
                readonly type: "tongo::structs::operations::ragequit::Ragequit";
            }, {
                readonly name: "ragequit_options";
                readonly type: "core::option::Option::<tongo::structs::operations::ragequit::RagequitOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "transfer";
            readonly inputs: readonly [{
                readonly name: "transfer";
                readonly type: "tongo::structs::operations::transfer::Transfer";
            }, {
                readonly name: "transfer_options";
                readonly type: "core::option::Option::<tongo::structs::operations::transfer::TransferOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "rollover";
            readonly inputs: readonly [{
                readonly name: "rollover";
                readonly type: "tongo::structs::operations::rollover::Rollover";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "get_balance";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_pending";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_audit";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_nonce";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "core::integer::u64";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_state";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::state::State";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "auditor_key";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "change_auditor_key";
            readonly inputs: readonly [{
                readonly name: "new_auditor_key";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "receive_external_transfer";
            readonly inputs: readonly [{
                readonly name: "external";
                readonly type: "tongo::structs::operations::transfer::ExternalTransfer";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "approveTongo";
            readonly inputs: readonly [{
                readonly name: "address";
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "revokeTongo";
            readonly inputs: readonly [{
                readonly name: "address";
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }];
    }, {
        readonly type: "constructor";
        readonly name: "constructor";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "tag";
            readonly type: "core::felt252";
        }, {
            readonly name: "ERC20";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "rate";
            readonly type: "core::integer::u256";
        }, {
            readonly name: "bit_size";
            readonly type: "core::integer::u32";
        }, {
            readonly name: "auditor_key";
            readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::TransferEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "toTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "transferBalanceSelf";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintLeftover";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::FundEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::OutsideFundEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::RolloverEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "rollovered";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::WithdrawEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::RagequitEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::BalanceDeclared";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "auditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }, {
            readonly name: "declaredCipherBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::TransferDeclared";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "auditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }, {
            readonly name: "declaredCipherBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::AuditorPubKeySet";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "keyNumber";
            readonly type: "core::integer::u128";
            readonly kind: "key";
        }, {
            readonly name: "AuditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::ReceivedExternalTransfer";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "fromTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "data";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::tongo::Tongo::Tongo::Event";
        readonly kind: "enum";
        readonly variants: readonly [{
            readonly name: "TransferEvent";
            readonly type: "tongo::structs::events::TransferEvent";
            readonly kind: "nested";
        }, {
            readonly name: "FundEvent";
            readonly type: "tongo::structs::events::FundEvent";
            readonly kind: "nested";
        }, {
            readonly name: "OutsideFundEvent";
            readonly type: "tongo::structs::events::OutsideFundEvent";
            readonly kind: "nested";
        }, {
            readonly name: "RolloverEvent";
            readonly type: "tongo::structs::events::RolloverEvent";
            readonly kind: "nested";
        }, {
            readonly name: "WithdrawEvent";
            readonly type: "tongo::structs::events::WithdrawEvent";
            readonly kind: "nested";
        }, {
            readonly name: "RagequitEvent";
            readonly type: "tongo::structs::events::RagequitEvent";
            readonly kind: "nested";
        }, {
            readonly name: "BalanceDeclared";
            readonly type: "tongo::structs::events::BalanceDeclared";
            readonly kind: "nested";
        }, {
            readonly name: "TransferDeclared";
            readonly type: "tongo::structs::events::TransferDeclared";
            readonly kind: "nested";
        }, {
            readonly name: "AuditorPubKeySet";
            readonly type: "tongo::structs::events::AuditorPubKeySet";
            readonly kind: "nested";
        }, {
            readonly name: "ReceivedExternalTransfer";
            readonly type: "tongo::structs::events::ReceivedExternalTransfer";
            readonly kind: "nested";
        }];
    }]>;
    encodeEvent<TName extends "tongo::structs::events::TransferEvent" | "tongo::structs::events::FundEvent" | "tongo::structs::events::OutsideFundEvent" | "tongo::structs::events::RolloverEvent" | "tongo::structs::events::WithdrawEvent" | "tongo::structs::events::RagequitEvent" | "tongo::structs::events::BalanceDeclared" | "tongo::structs::events::TransferDeclared" | "tongo::structs::events::AuditorPubKeySet" | "tongo::structs::events::ReceivedExternalTransfer" | "tongo::tongo::Tongo::Tongo::Event">(eventName: TName, data: import("abi-wan-kanabi/kanabi").EventToPrimitiveType<readonly [{
        readonly type: "impl";
        readonly name: "TongoImpl";
        readonly interface_name: "tongo::tongo::ITongo::ITongo";
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
        readonly type: "struct";
        readonly name: "tongo::structs::common::state::TongoConfig";
        readonly members: readonly [{
            readonly name: "address";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "tag";
            readonly type: "core::felt252";
        }, {
            readonly name: "ERC20";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "owner";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "vault";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "rate";
            readonly type: "core::integer::u256";
        }, {
            readonly name: "bit_size";
            readonly type: "core::integer::u32";
        }, {
            readonly name: "auditor_key";
            readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::integer::u512";
        readonly members: readonly [{
            readonly name: "limb0";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb1";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb2";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb3";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::aecipher::AEBalance";
        readonly members: readonly [{
            readonly name: "ciphertext";
            readonly type: "core::integer::u512";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u256";
        }];
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
        readonly name: "tongo::structs::operations::fund::ProofOfFund";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
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
        readonly name: "tongo::structs::operations::audit::ProofOfAudit";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AL0";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AL1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AR1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }, {
            readonly name: "sb";
            readonly type: "core::felt252";
        }, {
            readonly name: "sr";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::audit::Audit";
        readonly members: readonly [{
            readonly name: "auditedBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::audit::ProofOfAudit";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::audit::Audit";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::fund::Fund";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::fund::ProofOfFund";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::fund::OutsideFund";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::array::Span::<tongo::structs::common::starkpoint::StarkPoint>";
        readonly members: readonly [{
            readonly name: "snapshot";
            readonly type: "@core::array::Array::<tongo::structs::common::starkpoint::StarkPoint>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::verifier::range::bitProof";
        readonly members: readonly [{
            readonly name: "A0";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "c0";
            readonly type: "core::felt252";
        }, {
            readonly name: "s0";
            readonly type: "core::felt252";
        }, {
            readonly name: "s1";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::array::Span::<tongo::verifier::range::bitProof>";
        readonly members: readonly [{
            readonly name: "snapshot";
            readonly type: "@core::array::Array::<tongo::verifier::range::bitProof>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::verifier::range::Range";
        readonly members: readonly [{
            readonly name: "commitments";
            readonly type: "core::array::Span::<tongo::structs::common::starkpoint::StarkPoint>";
        }, {
            readonly name: "proofs";
            readonly type: "core::array::Span::<tongo::verifier::range::bitProof>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::ProofOfWithdraw";
        readonly members: readonly [{
            readonly name: "A_x";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }, {
            readonly name: "sb";
            readonly type: "core::felt252";
        }, {
            readonly name: "sr";
            readonly type: "core::felt252";
        }, {
            readonly name: "range";
            readonly type: "tongo::verifier::range::Range";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::Withdraw";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "auxiliarCipher";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::withdraw::ProofOfWithdraw";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::common::relayer::RelayData";
        readonly members: readonly [{
            readonly name: "fee_to_sender";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::common::relayer::RelayData";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::WithdrawOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::withdraw::WithdrawOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::withdraw::WithdrawOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::ProofOfRagequit";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AR";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::Ragequit";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::ragequit::ProofOfRagequit";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::RagequitOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::ragequit::RagequitOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::ragequit::RagequitOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ProofOfTransfer";
        readonly members: readonly [{
            readonly name: "A_x";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_b";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_b2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_bar";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "s_x";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_r";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_b";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_b2";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_r2";
            readonly type: "core::felt252";
        }, {
            readonly name: "range";
            readonly type: "tongo::verifier::range::Range";
        }, {
            readonly name: "range2";
            readonly type: "tongo::verifier::range::Range";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::Transfer";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "transferBalanceSelf";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "hintLeftover";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "auxiliarCipher";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "auxiliarCipher2";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::transfer::ProofOfTransfer";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }, {
            readonly name: "auditPartTransfer";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ExternalData";
        readonly members: readonly [{
            readonly name: "toTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::transfer::ExternalData>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::transfer::ExternalData";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::TransferOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }, {
            readonly name: "externalData";
            readonly type: "core::option::Option::<tongo::structs::operations::transfer::ExternalData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::transfer::TransferOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::transfer::TransferOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::rollover::ProofOfRollOver";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::rollover::Rollover";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::rollover::ProofOfRollOver";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::common::state::State";
        readonly members: readonly [{
            readonly name: "balance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "pending";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
        }, {
            readonly name: "audit";
            readonly type: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
        }, {
            readonly name: "ae_balance";
            readonly type: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        }, {
            readonly name: "ae_audit_balance";
            readonly type: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ExternalTransfer";
        readonly members: readonly [{
            readonly name: "fromTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }];
    }, {
        readonly type: "interface";
        readonly name: "tongo::tongo::ITongo::ITongo";
        readonly items: readonly [{
            readonly type: "function";
            readonly name: "get_tongo_config";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::state::TongoConfig";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_vault";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_tag";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::felt252";
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
            readonly name: "get_owner";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "fund";
            readonly inputs: readonly [{
                readonly name: "fund";
                readonly type: "tongo::structs::operations::fund::Fund";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "outside_fund";
            readonly inputs: readonly [{
                readonly name: "outsideFund";
                readonly type: "tongo::structs::operations::fund::OutsideFund";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "withdraw";
            readonly inputs: readonly [{
                readonly name: "withdraw";
                readonly type: "tongo::structs::operations::withdraw::Withdraw";
            }, {
                readonly name: "withdraw_options";
                readonly type: "core::option::Option::<tongo::structs::operations::withdraw::WithdrawOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "ragequit";
            readonly inputs: readonly [{
                readonly name: "ragequit";
                readonly type: "tongo::structs::operations::ragequit::Ragequit";
            }, {
                readonly name: "ragequit_options";
                readonly type: "core::option::Option::<tongo::structs::operations::ragequit::RagequitOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "transfer";
            readonly inputs: readonly [{
                readonly name: "transfer";
                readonly type: "tongo::structs::operations::transfer::Transfer";
            }, {
                readonly name: "transfer_options";
                readonly type: "core::option::Option::<tongo::structs::operations::transfer::TransferOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "rollover";
            readonly inputs: readonly [{
                readonly name: "rollover";
                readonly type: "tongo::structs::operations::rollover::Rollover";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "get_balance";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_pending";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_audit";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_nonce";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "core::integer::u64";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_state";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::state::State";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "auditor_key";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "change_auditor_key";
            readonly inputs: readonly [{
                readonly name: "new_auditor_key";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "receive_external_transfer";
            readonly inputs: readonly [{
                readonly name: "external";
                readonly type: "tongo::structs::operations::transfer::ExternalTransfer";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "approveTongo";
            readonly inputs: readonly [{
                readonly name: "address";
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "revokeTongo";
            readonly inputs: readonly [{
                readonly name: "address";
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }];
    }, {
        readonly type: "constructor";
        readonly name: "constructor";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "tag";
            readonly type: "core::felt252";
        }, {
            readonly name: "ERC20";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "rate";
            readonly type: "core::integer::u256";
        }, {
            readonly name: "bit_size";
            readonly type: "core::integer::u32";
        }, {
            readonly name: "auditor_key";
            readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::TransferEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "toTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "transferBalanceSelf";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintLeftover";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::FundEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::OutsideFundEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::RolloverEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "rollovered";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::WithdrawEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::RagequitEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::BalanceDeclared";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "auditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }, {
            readonly name: "declaredCipherBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::TransferDeclared";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "auditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }, {
            readonly name: "declaredCipherBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::AuditorPubKeySet";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "keyNumber";
            readonly type: "core::integer::u128";
            readonly kind: "key";
        }, {
            readonly name: "AuditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::ReceivedExternalTransfer";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "fromTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "data";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::tongo::Tongo::Tongo::Event";
        readonly kind: "enum";
        readonly variants: readonly [{
            readonly name: "TransferEvent";
            readonly type: "tongo::structs::events::TransferEvent";
            readonly kind: "nested";
        }, {
            readonly name: "FundEvent";
            readonly type: "tongo::structs::events::FundEvent";
            readonly kind: "nested";
        }, {
            readonly name: "OutsideFundEvent";
            readonly type: "tongo::structs::events::OutsideFundEvent";
            readonly kind: "nested";
        }, {
            readonly name: "RolloverEvent";
            readonly type: "tongo::structs::events::RolloverEvent";
            readonly kind: "nested";
        }, {
            readonly name: "WithdrawEvent";
            readonly type: "tongo::structs::events::WithdrawEvent";
            readonly kind: "nested";
        }, {
            readonly name: "RagequitEvent";
            readonly type: "tongo::structs::events::RagequitEvent";
            readonly kind: "nested";
        }, {
            readonly name: "BalanceDeclared";
            readonly type: "tongo::structs::events::BalanceDeclared";
            readonly kind: "nested";
        }, {
            readonly name: "TransferDeclared";
            readonly type: "tongo::structs::events::TransferDeclared";
            readonly kind: "nested";
        }, {
            readonly name: "AuditorPubKeySet";
            readonly type: "tongo::structs::events::AuditorPubKeySet";
            readonly kind: "nested";
        }, {
            readonly name: "ReceivedExternalTransfer";
            readonly type: "tongo::structs::events::ReceivedExternalTransfer";
            readonly kind: "nested";
        }];
    }], TName>): {
        keys: string[];
        data: string[];
    };
    decodeEvent<TName extends "tongo::structs::events::TransferEvent" | "tongo::structs::events::FundEvent" | "tongo::structs::events::OutsideFundEvent" | "tongo::structs::events::RolloverEvent" | "tongo::structs::events::WithdrawEvent" | "tongo::structs::events::RagequitEvent" | "tongo::structs::events::BalanceDeclared" | "tongo::structs::events::TransferDeclared" | "tongo::structs::events::AuditorPubKeySet" | "tongo::structs::events::ReceivedExternalTransfer" | "tongo::tongo::Tongo::Tongo::Event">(eventName: TName, event: {
        keys: string[];
        data: string[];
    }): import("abi-wan-kanabi/kanabi").EventToPrimitiveType<readonly [{
        readonly type: "impl";
        readonly name: "TongoImpl";
        readonly interface_name: "tongo::tongo::ITongo::ITongo";
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
        readonly type: "struct";
        readonly name: "tongo::structs::common::state::TongoConfig";
        readonly members: readonly [{
            readonly name: "address";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "tag";
            readonly type: "core::felt252";
        }, {
            readonly name: "ERC20";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "owner";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "vault";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "rate";
            readonly type: "core::integer::u256";
        }, {
            readonly name: "bit_size";
            readonly type: "core::integer::u32";
        }, {
            readonly name: "auditor_key";
            readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::integer::u512";
        readonly members: readonly [{
            readonly name: "limb0";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb1";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb2";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "limb3";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::aecipher::AEBalance";
        readonly members: readonly [{
            readonly name: "ciphertext";
            readonly type: "core::integer::u512";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u256";
        }];
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
        readonly name: "tongo::structs::operations::fund::ProofOfFund";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
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
        readonly name: "tongo::structs::operations::audit::ProofOfAudit";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AL0";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AL1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AR1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }, {
            readonly name: "sb";
            readonly type: "core::felt252";
        }, {
            readonly name: "sr";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::audit::Audit";
        readonly members: readonly [{
            readonly name: "auditedBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::audit::ProofOfAudit";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::audit::Audit";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::fund::Fund";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::fund::ProofOfFund";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::fund::OutsideFund";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::array::Span::<tongo::structs::common::starkpoint::StarkPoint>";
        readonly members: readonly [{
            readonly name: "snapshot";
            readonly type: "@core::array::Array::<tongo::structs::common::starkpoint::StarkPoint>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::verifier::range::bitProof";
        readonly members: readonly [{
            readonly name: "A0";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A1";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "c0";
            readonly type: "core::felt252";
        }, {
            readonly name: "s0";
            readonly type: "core::felt252";
        }, {
            readonly name: "s1";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "core::array::Span::<tongo::verifier::range::bitProof>";
        readonly members: readonly [{
            readonly name: "snapshot";
            readonly type: "@core::array::Array::<tongo::verifier::range::bitProof>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::verifier::range::Range";
        readonly members: readonly [{
            readonly name: "commitments";
            readonly type: "core::array::Span::<tongo::structs::common::starkpoint::StarkPoint>";
        }, {
            readonly name: "proofs";
            readonly type: "core::array::Span::<tongo::verifier::range::bitProof>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::ProofOfWithdraw";
        readonly members: readonly [{
            readonly name: "A_x";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }, {
            readonly name: "sb";
            readonly type: "core::felt252";
        }, {
            readonly name: "sr";
            readonly type: "core::felt252";
        }, {
            readonly name: "range";
            readonly type: "tongo::verifier::range::Range";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::Withdraw";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "auxiliarCipher";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::withdraw::ProofOfWithdraw";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::common::relayer::RelayData";
        readonly members: readonly [{
            readonly name: "fee_to_sender";
            readonly type: "core::integer::u128";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::common::relayer::RelayData";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::withdraw::WithdrawOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::withdraw::WithdrawOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::withdraw::WithdrawOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::ProofOfRagequit";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "AR";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::Ragequit";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::ragequit::ProofOfRagequit";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::ragequit::RagequitOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::ragequit::RagequitOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::ragequit::RagequitOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ProofOfTransfer";
        readonly members: readonly [{
            readonly name: "A_x";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_r2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_b";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_b2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_v2";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "A_bar";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "s_x";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_r";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_b";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_b2";
            readonly type: "core::felt252";
        }, {
            readonly name: "s_r2";
            readonly type: "core::felt252";
        }, {
            readonly name: "range";
            readonly type: "tongo::verifier::range::Range";
        }, {
            readonly name: "range2";
            readonly type: "tongo::verifier::range::Range";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::Transfer";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "transferBalanceSelf";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "hintLeftover";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "auxiliarCipher";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "auxiliarCipher2";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::transfer::ProofOfTransfer";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }, {
            readonly name: "auditPartTransfer";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ExternalData";
        readonly members: readonly [{
            readonly name: "toTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "auditPart";
            readonly type: "core::option::Option::<tongo::structs::operations::audit::Audit>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::transfer::ExternalData>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::transfer::ExternalData";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::TransferOptions";
        readonly members: readonly [{
            readonly name: "relayData";
            readonly type: "core::option::Option::<tongo::structs::common::relayer::RelayData>";
        }, {
            readonly name: "externalData";
            readonly type: "core::option::Option::<tongo::structs::operations::transfer::ExternalData>";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::operations::transfer::TransferOptions>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::operations::transfer::TransferOptions";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::rollover::ProofOfRollOver";
        readonly members: readonly [{
            readonly name: "Ax";
            readonly type: "tongo::structs::common::starkpoint::StarkPoint";
        }, {
            readonly name: "sx";
            readonly type: "core::felt252";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::rollover::Rollover";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "proof";
            readonly type: "tongo::structs::operations::rollover::ProofOfRollOver";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "enum";
        readonly name: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        readonly variants: readonly [{
            readonly name: "Some";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }, {
            readonly name: "None";
            readonly type: "()";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::common::state::State";
        readonly members: readonly [{
            readonly name: "balance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "pending";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
        }, {
            readonly name: "audit";
            readonly type: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
        }, {
            readonly name: "ae_balance";
            readonly type: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        }, {
            readonly name: "ae_audit_balance";
            readonly type: "core::option::Option::<tongo::structs::aecipher::AEBalance>";
        }];
    }, {
        readonly type: "struct";
        readonly name: "tongo::structs::operations::transfer::ExternalTransfer";
        readonly members: readonly [{
            readonly name: "fromTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
        }];
    }, {
        readonly type: "interface";
        readonly name: "tongo::tongo::ITongo::ITongo";
        readonly items: readonly [{
            readonly type: "function";
            readonly name: "get_tongo_config";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::state::TongoConfig";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_vault";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_tag";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::felt252";
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
            readonly name: "get_owner";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "fund";
            readonly inputs: readonly [{
                readonly name: "fund";
                readonly type: "tongo::structs::operations::fund::Fund";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "outside_fund";
            readonly inputs: readonly [{
                readonly name: "outsideFund";
                readonly type: "tongo::structs::operations::fund::OutsideFund";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "withdraw";
            readonly inputs: readonly [{
                readonly name: "withdraw";
                readonly type: "tongo::structs::operations::withdraw::Withdraw";
            }, {
                readonly name: "withdraw_options";
                readonly type: "core::option::Option::<tongo::structs::operations::withdraw::WithdrawOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "ragequit";
            readonly inputs: readonly [{
                readonly name: "ragequit";
                readonly type: "tongo::structs::operations::ragequit::Ragequit";
            }, {
                readonly name: "ragequit_options";
                readonly type: "core::option::Option::<tongo::structs::operations::ragequit::RagequitOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "transfer";
            readonly inputs: readonly [{
                readonly name: "transfer";
                readonly type: "tongo::structs::operations::transfer::Transfer";
            }, {
                readonly name: "transfer_options";
                readonly type: "core::option::Option::<tongo::structs::operations::transfer::TransferOptions>";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "rollover";
            readonly inputs: readonly [{
                readonly name: "rollover";
                readonly type: "tongo::structs::operations::rollover::Rollover";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "get_balance";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_pending";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_audit";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "core::option::Option::<tongo::structs::common::cipherbalance::CipherBalance>";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_nonce";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "core::integer::u64";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "get_state";
            readonly inputs: readonly [{
                readonly name: "y";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [{
                readonly type: "tongo::structs::common::state::State";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "auditor_key";
            readonly inputs: readonly [];
            readonly outputs: readonly [{
                readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
            }];
            readonly state_mutability: "view";
        }, {
            readonly type: "function";
            readonly name: "change_auditor_key";
            readonly inputs: readonly [{
                readonly name: "new_auditor_key";
                readonly type: "tongo::structs::common::pubkey::PubKey";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "receive_external_transfer";
            readonly inputs: readonly [{
                readonly name: "external";
                readonly type: "tongo::structs::operations::transfer::ExternalTransfer";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "approveTongo";
            readonly inputs: readonly [{
                readonly name: "address";
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }, {
            readonly type: "function";
            readonly name: "revokeTongo";
            readonly inputs: readonly [{
                readonly name: "address";
                readonly type: "core::starknet::contract_address::ContractAddress";
            }];
            readonly outputs: readonly [];
            readonly state_mutability: "external";
        }];
    }, {
        readonly type: "constructor";
        readonly name: "constructor";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "tag";
            readonly type: "core::felt252";
        }, {
            readonly name: "ERC20";
            readonly type: "core::starknet::contract_address::ContractAddress";
        }, {
            readonly name: "rate";
            readonly type: "core::integer::u256";
        }, {
            readonly name: "bit_size";
            readonly type: "core::integer::u32";
        }, {
            readonly name: "auditor_key";
            readonly type: "core::option::Option::<tongo::structs::common::pubkey::PubKey>";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::TransferEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "toTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "transferBalanceSelf";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintLeftover";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::FundEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::OutsideFundEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::RolloverEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "rollovered";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::WithdrawEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::RagequitEvent";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "amount";
            readonly type: "core::integer::u128";
            readonly kind: "data";
        }, {
            readonly name: "to";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::BalanceDeclared";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "auditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }, {
            readonly name: "declaredCipherBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::TransferDeclared";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "key";
        }, {
            readonly name: "auditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }, {
            readonly name: "declaredCipherBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hint";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::AuditorPubKeySet";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "keyNumber";
            readonly type: "core::integer::u128";
            readonly kind: "key";
        }, {
            readonly name: "AuditorPubKey";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::structs::events::ReceivedExternalTransfer";
        readonly kind: "struct";
        readonly members: readonly [{
            readonly name: "to";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "from";
            readonly type: "tongo::structs::common::pubkey::PubKey";
            readonly kind: "key";
        }, {
            readonly name: "fromTongo";
            readonly type: "core::starknet::contract_address::ContractAddress";
            readonly kind: "key";
        }, {
            readonly name: "nonce";
            readonly type: "core::integer::u64";
            readonly kind: "data";
        }, {
            readonly name: "transferBalance";
            readonly type: "tongo::structs::common::cipherbalance::CipherBalance";
            readonly kind: "data";
        }, {
            readonly name: "hintTransfer";
            readonly type: "tongo::structs::aecipher::AEBalance";
            readonly kind: "data";
        }];
    }, {
        readonly type: "event";
        readonly name: "tongo::tongo::Tongo::Tongo::Event";
        readonly kind: "enum";
        readonly variants: readonly [{
            readonly name: "TransferEvent";
            readonly type: "tongo::structs::events::TransferEvent";
            readonly kind: "nested";
        }, {
            readonly name: "FundEvent";
            readonly type: "tongo::structs::events::FundEvent";
            readonly kind: "nested";
        }, {
            readonly name: "OutsideFundEvent";
            readonly type: "tongo::structs::events::OutsideFundEvent";
            readonly kind: "nested";
        }, {
            readonly name: "RolloverEvent";
            readonly type: "tongo::structs::events::RolloverEvent";
            readonly kind: "nested";
        }, {
            readonly name: "WithdrawEvent";
            readonly type: "tongo::structs::events::WithdrawEvent";
            readonly kind: "nested";
        }, {
            readonly name: "RagequitEvent";
            readonly type: "tongo::structs::events::RagequitEvent";
            readonly kind: "nested";
        }, {
            readonly name: "BalanceDeclared";
            readonly type: "tongo::structs::events::BalanceDeclared";
            readonly kind: "nested";
        }, {
            readonly name: "TransferDeclared";
            readonly type: "tongo::structs::events::TransferDeclared";
            readonly kind: "nested";
        }, {
            readonly name: "AuditorPubKeySet";
            readonly type: "tongo::structs::events::AuditorPubKeySet";
            readonly kind: "nested";
        }, {
            readonly name: "ReceivedExternalTransfer";
            readonly type: "tongo::structs::events::ReceivedExternalTransfer";
            readonly kind: "nested";
        }];
    }], TName>;
};
export declare const vaultCodec: {
    encode<TName extends ExtractAbiTypeNames<readonly [{
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
    }]>>(typeName: TName, data: import("abi-wan-kanabi/kanabi").StringToPrimitiveType<readonly [{
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
    }], TName>): string[];
    decode<TName extends ExtractAbiTypeNames<readonly [{
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
    }]>>(typeName: TName, calldata: string[]): import("abi-wan-kanabi/kanabi").StringToPrimitiveType<readonly [{
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
    }], TName>;
    encodeConstructor(data: import("@fatsolutions/cairo-abi-codec").ConstructorArgs<readonly [{
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
    }]>): string[];
    decodeConstructor(calldata: string[]): import("@fatsolutions/cairo-abi-codec").ConstructorArgs<readonly [{
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
    }]>;
    encodeEvent<TName extends "tongo::structs::events::TongoDeployed" | "tongo::tongo::Vault::Vault::Event">(eventName: TName, data: import("abi-wan-kanabi/kanabi").EventToPrimitiveType<readonly [{
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
    }], TName>): {
        keys: string[];
        data: string[];
    };
    decodeEvent<TName extends "tongo::structs::events::TongoDeployed" | "tongo::tongo::Vault::Vault::Event">(eventName: TName, event: {
        keys: string[];
        data: string[];
    }): import("abi-wan-kanabi/kanabi").EventToPrimitiveType<readonly [{
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
    }], TName>;
};
export declare const auxCodec: {
    encode<TName extends ExtractAbiTypeNames<readonly [{
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
    }]>>(typeName: TName, data: import("abi-wan-kanabi/kanabi").StringToPrimitiveType<readonly [{
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
    }], TName>): string[];
    decode<TName extends ExtractAbiTypeNames<readonly [{
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
    }]>>(typeName: TName, calldata: string[]): import("abi-wan-kanabi/kanabi").StringToPrimitiveType<readonly [{
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
    }], TName>;
    encodeConstructor(data: import("@fatsolutions/cairo-abi-codec").ConstructorArgs<readonly [{
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
    }]>): string[];
    decodeConstructor(calldata: string[]): import("@fatsolutions/cairo-abi-codec").ConstructorArgs<readonly [{
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
    }]>;
    encodeEvent<TName extends "tongo::tongo::Aux::Aux::Event">(eventName: TName, data: import("abi-wan-kanabi/kanabi").EventToPrimitiveType<readonly [{
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
    }], TName>): {
        keys: string[];
        data: string[];
    };
    decodeEvent<TName extends "tongo::tongo::Aux::Aux::Event">(eventName: TName, event: {
        keys: string[];
        data: string[];
    }): import("abi-wan-kanabi/kanabi").EventToPrimitiveType<readonly [{
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
    }], TName>;
};
