import { CairoOption, Call, Contract } from "starknet";
import { ProofOfFund } from "../provers/fund.js";
import { CipherAccountState, GeneralPrefixData } from "../types.js";
import { AEBalance } from "../ae_balance.js";
import { StarkPoint } from "../types.js";
import { Audit } from "./audit.js";
import { IBasicOperation, OperationType } from "./operation.js";
/**
 * Represents the calldata of a fund operation.
 * @interface FundOpParams
 * @property {ProjectivePoint} to - The Tongo account to fund
 * @property {bigint} amount - The amount of tongo to fund
 * @property {AEBalance} hint - AE encryption of the final balance of the account
 * @property {ProofOfFund} proof - ZK proof for the fund operation
 * @property {CairoOption<Audit>} auditPart - Optional Audit to declare the balance of the account after the tx
 * @property {Contract} Tongo - The Tongo instance to interact with
 */
interface FundOpParams {
    to: StarkPoint;
    amount: bigint;
    hint: AEBalance;
    proof: ProofOfFund;
    auditPart: CairoOption<Audit>;
    Tongo: Contract;
    nextState: CipherAccountState;
    prefix_data: GeneralPrefixData;
}
export declare class FundOperation implements IBasicOperation {
    readonly type = OperationType.Fund;
    feeToSender: bigint;
    Tongo: Contract;
    to: StarkPoint;
    amount: bigint;
    hint: AEBalance;
    proof: ProofOfFund;
    auditPart: CairoOption<Audit>;
    approve?: Call;
    nextState: CipherAccountState;
    prefix_data: GeneralPrefixData;
    constructor({ to, amount, proof, auditPart, Tongo, hint, nextState, prefix_data, }: FundOpParams);
    toCalldata(): Call[];
    populateApprove(): Promise<void>;
}
export {};
