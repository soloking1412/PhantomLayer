import { tongoCodec } from "../abi/abi.types.js";
import { OperationType } from "./operation.js";
const OptionalTransferOption = "core::option::Option::<tongo::structs::operations::transfer::TransferOptions>";
export function serializeTransferOptions(transferOptions) {
    return tongoCodec.encode(OptionalTransferOption, transferOptions).map(BigInt);
}
export class TransferOperation {
    type = OperationType.Transfer;
    feeToSender;
    Tongo;
    from;
    to;
    transferBalance;
    transferBalanceSelf;
    auxiliarCipher;
    auxiliarCipher2;
    hintTransfer;
    hintLeftover;
    proof;
    auditPart;
    auditPartTransfer;
    transferOptions;
    nextState;
    prefix_data;
    constructor({ from, to, feeToSender, transferBalance, transferBalanceSelf, proof, auditPart, auditPartTransfer, auxiliarCipher, auxiliarCipher2, Tongo, hintTransfer, hintLeftover, transferOptions, nextState, prefix_data, }) {
        this.from = from;
        this.to = to;
        this.feeToSender = feeToSender;
        this.transferBalance = transferBalance;
        this.transferBalanceSelf = transferBalanceSelf;
        this.auxiliarCipher = auxiliarCipher;
        this.auxiliarCipher2 = auxiliarCipher2;
        this.hintTransfer = hintTransfer;
        this.hintLeftover = hintLeftover;
        this.proof = proof;
        this.auditPart = auditPart;
        this.auditPartTransfer = auditPartTransfer;
        this.transferOptions = transferOptions;
        this.Tongo = Tongo;
        this.nextState = nextState;
        this.prefix_data = prefix_data;
    }
    toCalldata() {
        return [
            this.Tongo.populate("transfer", [
                {
                    from: this.from,
                    to: this.to,
                    transferBalance: this.transferBalance,
                    transferBalanceSelf: this.transferBalanceSelf,
                    auxiliarCipher: this.auxiliarCipher,
                    auxiliarCipher2: this.auxiliarCipher2,
                    hintTransfer: this.hintTransfer,
                    hintLeftover: this.hintLeftover,
                    proof: this.proof,
                    auditPart: this.auditPart,
                    auditPartTransfer: this.auditPartTransfer,
                },
                this.transferOptions,
            ]),
        ];
    }
}
//# sourceMappingURL=transfer.js.map