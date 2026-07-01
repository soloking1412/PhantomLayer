import { CairoOption, Call, Contract } from "starknet";
import { CipherAccountState, GeneralPrefixData } from "../types.js";
import { ProofOfTransfer } from "../provers/transfer.js";
import { StarkCipherBalance, StarkPoint } from "../types.js";
import { AEBalance } from "../ae_balance.js";
import { Audit } from "./audit.js";
import { TongoAbiType } from "../abi/abi.types.js";
import { IBasicOperation, OperationType } from "./operation.js";
export type ExternalData = TongoAbiType<"tongo::structs::operations::transfer::ExternalData">;
export type TransferOptions = TongoAbiType<"tongo::structs::operations::transfer::TransferOptions">;
/**
 * Represents the calldata of a transfer operation.
 * @interface TransferOpParams
 * @property {StarkPoint} from - The Tongo account to take tongos from
 * @property {StarkPoint} to - The Tongo account to send tongos to
 * @property {StarkCipherBalance} transferBalance - The amount to transfer encrypted for the pubkey of `to`
 * @property {StarkCipherBalance} transferBalanceSelf - The amount to transfer encrypted for the pubkey of `from`
 * @property {AEBalance} hintTransfer - AE encryption of the amount to transfer to `to`
 * @property {AEBalance} hintLeftover - AE encryption of the leftover balance of `from`
 * @property {ProofOfTransfer} proof - ZK proof for the transfer operation
 * @property {CairoOption<Audit>} auditPart - Optional Audit to declare the balance of the account after the tx
 * @property {CairoOption<Audit>} auditPartTransfer - Optional Audit to declare the transfer amount
 * @property {CairoOption<TransferOptions>} transferOptions - Options including relay and external data
 * @property {Contract} Tongo - The tongo instance to interact with
 */
interface TransferOpParams {
    from: StarkPoint;
    to: StarkPoint;
    transferBalance: StarkCipherBalance;
    transferBalanceSelf: StarkCipherBalance;
    auxiliarCipher: StarkCipherBalance;
    auxiliarCipher2: StarkCipherBalance;
    feeToSender: bigint;
    proof: ProofOfTransfer;
    hintTransfer: AEBalance;
    hintLeftover: AEBalance;
    auditPart: CairoOption<Audit>;
    auditPartTransfer: CairoOption<Audit>;
    transferOptions: CairoOption<TransferOptions>;
    Tongo: Contract;
    nextState: CipherAccountState;
    prefix_data: GeneralPrefixData;
}
declare const OptionalTransferOption: "core::option::Option::<tongo::structs::operations::transfer::TransferOptions>";
export type CairoTransferOptions = TongoAbiType<typeof OptionalTransferOption>;
export declare function serializeTransferOptions(transferOptions: CairoTransferOptions): bigint[];
export declare class TransferOperation implements IBasicOperation {
    readonly type = OperationType.Transfer;
    feeToSender: bigint;
    Tongo: Contract;
    from: StarkPoint;
    to: StarkPoint;
    transferBalance: StarkCipherBalance;
    transferBalanceSelf: StarkCipherBalance;
    auxiliarCipher: StarkCipherBalance;
    auxiliarCipher2: StarkCipherBalance;
    hintTransfer: AEBalance;
    hintLeftover: AEBalance;
    proof: ProofOfTransfer;
    auditPart: CairoOption<Audit>;
    auditPartTransfer: CairoOption<Audit>;
    transferOptions: CairoOption<TransferOptions>;
    nextState: CipherAccountState;
    prefix_data: GeneralPrefixData;
    constructor({ from, to, feeToSender, transferBalance, transferBalanceSelf, proof, auditPart, auditPartTransfer, auxiliarCipher, auxiliarCipher2, Tongo, hintTransfer, hintLeftover, transferOptions, nextState, prefix_data, }: TransferOpParams);
    toCalldata(): Call[];
}
export {};
