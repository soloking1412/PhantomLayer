import { cairo, CallData, num } from "starknet";
import { castBigInt } from "../utils.js";
import { OperationType } from "./operation.js";
export class FundOperation {
    type = OperationType.Fund;
    feeToSender = 0n;
    Tongo;
    to;
    amount;
    hint;
    proof;
    auditPart;
    approve;
    nextState;
    prefix_data;
    constructor({ to, amount, proof, auditPart, Tongo, hint, nextState, prefix_data, }) {
        this.to = to;
        this.amount = amount;
        this.hint = hint;
        this.auditPart = auditPart;
        this.proof = proof;
        this.Tongo = Tongo;
        this.nextState = nextState;
        this.prefix_data = prefix_data;
    }
    toCalldata() {
        return [
            this.Tongo.populate("fund", [
                {
                    to: this.to,
                    amount: this.amount,
                    hint: this.hint,
                    proof: this.proof,
                    auditPart: this.auditPart,
                },
            ]),
        ];
    }
    // TODO: better ux for this. Maybe return the call?
    async populateApprove() {
        const erc20 = await this.Tongo.ERC20();
        const erc20Address = num.toHex(erc20);
        const tongoAddress = this.Tongo.address;
        const rate = await this.Tongo.get_rate();
        const totalTongoAmount = this.amount;
        const amount = cairo.uint256(totalTongoAmount * castBigInt(rate));
        const calldata = CallData.compile({ spender: tongoAddress, amount: amount });
        this.approve = { contractAddress: erc20Address, entrypoint: "approve", calldata };
    }
}
//# sourceMappingURL=fund.js.map