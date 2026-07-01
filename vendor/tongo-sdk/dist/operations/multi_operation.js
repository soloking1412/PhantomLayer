import { OperationType } from "./operation.js";
export class MultiOperation {
    type = OperationType.Multi;
    ops = [];
    finalState;
    feeToSender = 0n;
    prefix_data;
    bit_size;
    constructor(initialState, prefix_data, bit_size) {
        this.finalState = { ...initialState };
        this.prefix_data = prefix_data;
        this.bit_size = bit_size;
    }
    get nextState() {
        return this.finalState;
    }
    push(op) {
        if (op.prefix_data.chain_id !== this.prefix_data.chain_id ||
            op.prefix_data.tongo_address !== this.prefix_data.tongo_address ||
            op.prefix_data.sender_address !== this.prefix_data.sender_address) {
            throw new Error("Operation prefix_data does not match MultiOperation context");
        }
        this.ops.push(op);
        this.feeToSender += op.feeToSender;
        this.finalState = op.nextState;
    }
    toCalldata() {
        return this.ops.flatMap((op) => op.toCalldata());
    }
}
//# sourceMappingURL=multi_operation.js.map