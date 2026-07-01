import { BigNumberish, CairoOption, Call, Contract } from "starknet";
import { TongoAbiType } from "../abi/abi.types.js";
import { AEBalance } from "../ae_balance.js";
import { ProofOfWithdraw } from "../provers/withdraw.js";
import { CipherAccountState, GeneralPrefixData, StarkCipherBalance, StarkPoint } from "../types.js";
import { Audit } from "./audit.js";
import { IBasicOperation, OperationType } from "./operation.js";
export type WithdrawOptions = TongoAbiType<"tongo::structs::operations::withdraw::WithdrawOptions">;
/**
 * Represents the calldata of a withdraw operation.
 * @interface WithdrawOpParams
 * @property {StarkPoint} from - The Tongo account to withdraw from
 * @property {bigint} amount - The amount of tongo to withdraw
 * @property {BigNumberish} to - The starknet contract address to send the funds to
 * @property {AEBalance} hint - AE encryption of the final balance of the account
 * @property {ProofOfWithdraw} proof - ZK proof for the withdraw operation
 * @property {CairoOption<Audit>} auditPart - Optional Audit to declare the balance of the account after the tx
 * @property {CairoOption<WithdrawOptions>} withdrawOptions - Options including relay data
 * @property {Contract} Tongo - The Tongo instance to interact with
 */
interface WithdrawOpParams {
    from: StarkPoint;
    to: BigNumberish;
    amount: BigNumberish;
    auxiliarCipher: StarkCipherBalance;
    feeToSender: bigint;
    hint: AEBalance;
    proof: ProofOfWithdraw;
    auditPart: CairoOption<Audit>;
    withdrawOptions: CairoOption<WithdrawOptions>;
    Tongo: Contract;
    nextState: CipherAccountState;
    prefix_data: GeneralPrefixData;
}
declare const OptionalWithdrawOption: "core::option::Option::<tongo::structs::operations::withdraw::WithdrawOptions>";
export type CairoWithdrawOptions = TongoAbiType<typeof OptionalWithdrawOption>;
export declare function serializeWithdrawOptions(withdrawOptions: CairoWithdrawOptions): bigint[];
export declare class WithdrawOperation implements IBasicOperation {
    readonly type = OperationType.Withdraw;
    feeToSender: bigint;
    Tongo: Contract;
    from: StarkPoint;
    to: BigNumberish;
    amount: BigNumberish;
    hint: AEBalance;
    auxiliarCipher: StarkCipherBalance;
    proof: ProofOfWithdraw;
    auditPart: CairoOption<Audit>;
    withdrawOptions: CairoOption<WithdrawOptions>;
    nextState: CipherAccountState;
    prefix_data: GeneralPrefixData;
    constructor({ from, to, amount, feeToSender, proof, auditPart, Tongo, hint, auxiliarCipher, withdrawOptions, nextState, prefix_data, }: WithdrawOpParams);
    toCalldata(): Call[];
}
export {};
