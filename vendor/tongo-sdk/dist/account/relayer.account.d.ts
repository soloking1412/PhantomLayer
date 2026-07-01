import { PaymasterRpc, PreparedInvokeTransaction, ExecutionParameters, RpcProvider, Account, Signature } from "starknet";
import { RelayFeeEstimate } from "../types.js";
import { ITongoOperation } from "../operations/operation.js";
import { TongoContract } from "../contracts.js";
export interface PreparedRelayData {
    typedData: PreparedInvokeTransaction["typed_data"];
    parameters: ExecutionParameters;
}
export declare class RelayerAccount {
    Tongo: TongoContract;
    paymaster: PaymasterRpc;
    provider: RpcProvider;
    address: string;
    starkAccount: Account;
    private _erc20Address;
    private _rate;
    constructor(tongoAddress: string, relayerAddress: string, paymasterUrl: PaymasterRpc | string, provider: RpcProvider | string);
    estimateFee(operation: ITongoOperation): Promise<RelayFeeEstimate>;
    buildTransactionToSign(operation: ITongoOperation, snip9_nonce: string): Promise<PreparedRelayData>;
    execute(prepared: PreparedRelayData, signature: Signature): Promise<string>;
    private getFeesDetails;
    private getErc20FeeBudget;
    private get_tongo_rate;
}
