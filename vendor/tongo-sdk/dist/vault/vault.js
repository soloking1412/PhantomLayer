import { Contract, RpcProvider, num } from "starknet";
import { DeployOperation } from "../operations/deploy.js";
import { vaultAbi } from "../abi/vault.abi.js";
import { castBigInt, toNumber } from "../utils.js";
import { RPC_SPEC_VERSION } from "../constants.js";
export class Vault {
    address;
    contract;
    provider;
    constructor(contractAddress, provider) {
        this.address = contractAddress;
        const rpc = provider instanceof RpcProvider
            ? provider
            : new RpcProvider({
                nodeUrl: provider,
                specVersion: RPC_SPEC_VERSION,
            });
        this.provider = rpc;
        this.contract = new Contract({
            abi: vaultAbi,
            address: contractAddress,
            providerOrAccount: rpc,
        }).typedv2(vaultAbi);
    }
    async deployTongo(params) {
        const { owner, tag, auditor } = params;
        const vaultSetup = await this.vaultConfig();
        return new DeployOperation({
            owner: BigInt(owner),
            tag: BigInt(tag),
            auditorKey: auditor,
            Vault: this.contract,
            vaultSetup,
        });
    }
    async tongoClassHash() {
        const classHash = await this.contract.get_tongo_class_hash();
        return num.toHex(classHash);
    }
    async ERC20() {
        const erc20 = await this.contract.ERC20();
        return num.toHex(erc20);
    }
    async bitSize() {
        return toNumber(await this.contract.get_bit_size());
    }
    async rate() {
        const rate = await this.contract.get_rate();
        return castBigInt(rate);
    }
    async vaultConfig() {
        const { vault_address, tongo_class_hash, ERC20, rate, bit_size } = await this.contract.get_vault_setup();
        return {
            vault_address: num.toHex(vault_address),
            tongo_class_hash: num.toHex(tongo_class_hash),
            ERC20: num.toHex(ERC20),
            bit_size: toNumber(bit_size),
            rate: castBigInt(rate),
        };
    }
}
//# sourceMappingURL=vault.js.map