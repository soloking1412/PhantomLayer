import { num } from "starknet";
import { OperationType } from "./operation.js";
import { tongoCodec } from "../abi/abi.types.js";
const OptionalRagequitOption = "core::option::Option::<tongo::structs::operations::ragequit::RagequitOptions>";
export function serializeRagequitOptions(ragequitOptions) {
    return tongoCodec.encode(OptionalRagequitOption, ragequitOptions).map(BigInt);
}
export class RagequitOperation {
    type = OperationType.Ragequit;
    feeToSender;
    Tongo;
    from;
    to;
    amount;
    hint;
    auditPart;
    proof;
    ragequitOptions;
    nextState;
    prefix_data;
    constructor({ from, to, amount, feeToSender, proof, Tongo, hint, auditPart, ragequitOptions, nextState, prefix_data, }) {
        this.Tongo = Tongo;
        this.from = from;
        this.to = to;
        this.amount = amount;
        this.feeToSender = feeToSender;
        this.hint = hint;
        this.proof = proof;
        this.auditPart = auditPart;
        this.ragequitOptions = ragequitOptions;
        this.nextState = nextState;
        this.prefix_data = prefix_data;
    }
    toCalldata() {
        return [
            this.Tongo.populate("ragequit", [
                {
                    from: this.from,
                    amount: this.amount,
                    to: num.toHex(this.to),
                    proof: this.proof,
                    hint: this.hint,
                    auditPart: this.auditPart,
                },
                this.ragequitOptions,
            ]),
        ];
    }
}
//# sourceMappingURL=ragequit.js.map