import { num, hash, CallData } from "starknet";
import { tongoAbi } from "../abi/tongo.abi.js";
import { OperationType } from "./operation.js";
import { None, Some } from "../utils.js";
export class DeployOperation {
    type = OperationType.Deploy;
    owner;
    feeToSender = 0n;
    tag;
    targetAddress;
    auditorKey;
    Vault;
    constructor({ owner, tag, auditorKey: auditor, Vault, vaultSetup }) {
        const { vault_address, tongo_class_hash, ERC20, rate, bit_size } = vaultSetup;
        let auditorKey = None();
        if (auditor) {
            auditorKey = Some(auditor);
        }
        this.owner = owner;
        this.tag = tag;
        this.auditorKey = auditorKey;
        this.Vault = Vault;
        const constructor_calldata = new CallData(tongoAbi).compile("constructor", [
            owner,
            tag,
            ERC20,
            rate,
            bit_size,
            auditorKey,
        ]);
        const address = hash.calculateContractAddressFromHash(tag, tongo_class_hash, constructor_calldata, vault_address);
        this.targetAddress = address;
    }
    toCalldata() {
        return [
            this.Vault.populate("deploy_tongo", [
                num.toHex(this.owner),
                num.toHex(this.tag),
                this.auditorKey,
            ]),
        ];
    }
}
//# sourceMappingURL=deploy.js.map