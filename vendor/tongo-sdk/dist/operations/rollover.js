import { OperationType } from "./operation.js";
export class RollOverOperation {
    type = OperationType.Rollover;
    to;
    feeToSender = 0n;
    proof;
    Tongo;
    hint;
    nextState;
    prefix_data;
    constructor({ to, proof, Tongo, hint, nextState, prefix_data }) {
        this.to = to;
        this.proof = proof;
        this.Tongo = Tongo;
        this.hint = hint;
        this.nextState = nextState;
        this.prefix_data = prefix_data;
    }
    toCalldata() {
        return [
            this.Tongo.populate("rollover", [{ to: this.to, proof: this.proof, hint: this.hint }]),
        ];
    }
}
//# sourceMappingURL=rollover.js.map