import { cairo, CallData, num } from "starknet";
import { castBigInt } from "../utils.js";
import { OperationType } from "./operation.js";
export class OutsideFundOperation {
    type = OperationType.OutsideFund;
    Tongo;
    to;
    amount;
    feeToSender = 0n;
    approve;
    constructor({ to, amount, Tongo }) {
        this.to = to;
        this.amount = amount;
        this.Tongo = Tongo;
    }
    toCalldata() {
        return [
            this.Tongo.populate("outside_fund", [
                {
                    to: this.to,
                    amount: this.amount,
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
        const amount = cairo.uint256(this.amount * castBigInt(rate));
        const calldata = CallData.compile({ spender: tongoAddress, amount: amount });
        this.approve = { contractAddress: erc20Address, entrypoint: "approve", calldata };
    }
}
//# sourceMappingURL=outside_fund.js.map