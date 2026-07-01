import { Call } from "starknet";
import { CipherAccountState, GeneralPrefixData } from "../types.js";
import { ITongoOperation, OperationType } from "./operation.js";
import { WithdrawOperation } from "./withdraw.js";
import { TransferOperation } from "./transfer.js";
import { RollOverOperation } from "./rollover.js";
import { FundOperation } from "./fund.js";
import { RagequitOperation } from "./ragequit.js";
export type BasicOperation = FundOperation | RollOverOperation | WithdrawOperation | TransferOperation | RagequitOperation;
export type TongoOperation = BasicOperation | MultiOperation;
export declare class MultiOperation implements ITongoOperation {
    readonly type = OperationType.Multi;
    private ops;
    finalState: CipherAccountState;
    feeToSender: bigint;
    readonly prefix_data: GeneralPrefixData;
    readonly bit_size: number;
    constructor(initialState: CipherAccountState, prefix_data: GeneralPrefixData, bit_size: number);
    get nextState(): CipherAccountState;
    push(op: BasicOperation): void;
    toCalldata(): Call[];
}
