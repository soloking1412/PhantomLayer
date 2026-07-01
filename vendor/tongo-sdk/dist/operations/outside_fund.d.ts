import { Call, Contract } from "starknet";
import { StarkPoint } from "../types.js";
import { IOperation, OperationType } from "./operation.js";
/**
 * Represents the calldata of a outsideFund operation.
 * @interface FundOpParams
 * @property {ProjectivePoint} to - The Tongo account to fund
 * @property {bigint} amount - The amount of tongo to fund
 * @property {Contract} Tongo - The Tongo instance to interact with
 */
interface OutsideFundOpParams {
    to: StarkPoint;
    amount: bigint;
    Tongo: Contract;
}
export declare class OutsideFundOperation implements IOperation {
    readonly type = OperationType.OutsideFund;
    Tongo: Contract;
    to: StarkPoint;
    amount: bigint;
    feeToSender: bigint;
    approve?: Call;
    constructor({ to, amount, Tongo }: OutsideFundOpParams);
    toCalldata(): Call[];
    populateApprove(): Promise<void>;
}
export {};
