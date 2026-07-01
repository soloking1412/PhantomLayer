import { Account as StarknetAccount, num, paymaster, PaymasterRpc, Contract, RpcProvider, stark, } from "starknet";
import { tongoAbi } from "../abi/tongo.abi.js";
import { RPC_SPEC_VERSION } from "../constants.js";
import { RollOverOperation } from "../operations/rollover.js";
import { castBigInt, erc20ToTongo, tongoToErc20 } from "../utils.js";
function computeRelayFeeEstimate(avnuEstimatedErc20, avnuSuggestedErc20, rate) {
    const avnuEstimatedTongo = erc20ToTongo(avnuEstimatedErc20, rate);
    const avnuSuggestedTongo = erc20ToTongo(avnuSuggestedErc20, rate);
    const relayerSuggestedTongo = 2n * avnuEstimatedTongo;
    return {
        avnuEstimatedErc20,
        avnuEstimatedTongo,
        avnuSuggestedErc20,
        avnuSuggestedTongo,
        relayerSuggestedTongo,
    };
}
export class RelayerAccount {
    Tongo;
    paymaster;
    provider;
    address;
    starkAccount;
    _erc20Address;
    _rate;
    constructor(tongoAddress, relayerAddress, paymasterUrl, provider) {
        const rpc = provider instanceof RpcProvider
            ? provider
            : new RpcProvider({
                nodeUrl: provider,
                specVersion: RPC_SPEC_VERSION,
            });
        const paymaster = typeof paymasterUrl === "string"
            ? new PaymasterRpc({ nodeUrl: paymasterUrl })
            : paymasterUrl;
        this.provider = rpc;
        this.paymaster = paymaster;
        this.Tongo = new Contract({
            abi: tongoAbi,
            address: tongoAddress,
            providerOrAccount: rpc,
        }).typedv2(tongoAbi);
        this.address = relayerAddress;
        this.starkAccount = new StarknetAccount({
            provider: this.provider,
            address: relayerAddress,
            signer: "0x1",
            paymaster: paymaster,
            cairoVersion: "1",
            transactionVersion: "0x3",
        });
    }
    async estimateFee(operation) {
        const feesDetails = await this.getFeesDetails();
        const { estimated_fee_in_gas_token, suggested_max_fee_in_gas_token } = await this.starkAccount.estimatePaymasterTransactionFee(operation.toCalldata(), feesDetails);
        const avnuEstimatedErc20 = BigInt(estimated_fee_in_gas_token);
        const avnuSuggestedErc20 = BigInt(suggested_max_fee_in_gas_token);
        const rate = await this.get_tongo_rate();
        return computeRelayFeeEstimate(avnuEstimatedErc20, avnuSuggestedErc20, rate);
    }
    async buildTransactionToSign(operation, snip9_nonce) {
        const feesDetails = await this.getFeesDetails();
        const prepared = (await this.starkAccount.buildPaymasterTransaction(operation.toCalldata(), feesDetails));
        if (prepared.type != "invoke") {
            throw new Error("Only `invoke` type transaction can be relayed");
        }
        if (!("Calls" in prepared.typed_data.message)) {
            throw new Error("Only `invoke` type transaction V2 can be relayed");
        }
        paymaster.assertPaymasterTransactionSafety(prepared, operation.toCalldata(), feesDetails);
        const feeAmount = await this.getErc20FeeBudget(operation);
        let avnuFeeCallFound = false;
        for (const call of prepared.typed_data.message.Calls) {
            if (num.toHex(call.To) === this._erc20Address) {
                call.Calldata[1] = num.toHex(feeAmount);
                call.Calldata[2] = "0x0";
                avnuFeeCallFound = true;
                break;
            }
        }
        if (!avnuFeeCallFound) {
            throw new Error(`AVNU fee call targets an unexpected token — expected ${this._erc20Address}`);
        }
        const typedData = {
            ...prepared.typed_data,
            message: { ...prepared.typed_data.message, Nonce: snip9_nonce },
        };
        return { typedData, parameters: prepared.parameters };
    }
    async execute(prepared, signature) {
        const res = await (this.paymaster).executeTransaction({
            type: "invoke",
            invoke: {
                userAddress: this.starkAccount.address,
                typedData: prepared.typedData,
                signature: stark.formatSignature(signature),
            },
        }, prepared.parameters);
        return res.transaction_hash;
    }
    async getFeesDetails() {
        if (!this._erc20Address) {
            this._erc20Address = num.toHex(await this.Tongo.ERC20());
        }
        return { feeMode: { mode: "default", gasToken: this._erc20Address } };
    }
    async getErc20FeeBudget(operation) {
        if (operation instanceof RollOverOperation) {
            throw new Error("Standalone rollover relay not supported — use a MultiOperation bundle");
        }
        if (operation.feeToSender === 0n) {
            throw new Error("Operation has no fee_to_sender — cannot relay without a fee commitment");
        }
        return tongoToErc20(operation.feeToSender, await this.get_tongo_rate());
    }
    async get_tongo_rate() {
        if (!this._rate) {
            this._rate = castBigInt(await this.Tongo.get_rate());
        }
        return this._rate;
    }
}
//# sourceMappingURL=relayer.account.js.map