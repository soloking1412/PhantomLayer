import { num } from "starknet";
import { tongoCodec } from "../abi/abi.types.js";
import { OperationType } from "./operation.js";
const OptionalWithdrawOption = "core::option::Option::<tongo::structs::operations::withdraw::WithdrawOptions>";
export function serializeWithdrawOptions(withdrawOptions) {
    return tongoCodec.encode(OptionalWithdrawOption, withdrawOptions).map(BigInt);
}
export class WithdrawOperation {
    type = OperationType.Withdraw;
    feeToSender;
    Tongo;
    from;
    to;
    amount;
    hint;
    auxiliarCipher;
    proof;
    auditPart;
    withdrawOptions;
    nextState;
    prefix_data;
    constructor({ from, to, amount, feeToSender, proof, auditPart, Tongo, hint, auxiliarCipher, withdrawOptions, nextState, prefix_data, }) {
        this.Tongo = Tongo;
        this.from = from;
        this.to = to;
        this.amount = amount;
        this.feeToSender = feeToSender;
        this.auxiliarCipher = auxiliarCipher;
        this.hint = hint;
        this.proof = proof;
        this.auditPart = auditPart;
        this.withdrawOptions = withdrawOptions;
        this.nextState = nextState;
        this.prefix_data = prefix_data;
    }
    toCalldata() {
        return [
            this.Tongo.populate("withdraw", [
                {
                    from: this.from,
                    amount: this.amount,
                    hint: this.hint,
                    to: num.toHex(this.to),
                    auxiliarCipher: this.auxiliarCipher,
                    auditPart: this.auditPart,
                    proof: this.proof,
                },
                this.withdrawOptions,
            ]),
        ];
    }
}
//# sourceMappingURL=withdraw.js.map