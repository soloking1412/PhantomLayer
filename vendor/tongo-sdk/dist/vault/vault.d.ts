import { RpcProvider, TypedContractV2 } from "starknet";
import { DeployOperation } from "../operations/deploy.js";
import { IVault, VaultConfig, DeployDetails } from "./vault.interface.js";
import { vaultAbi } from "../abi/vault.abi.js";
export type VaultContract = TypedContractV2<typeof vaultAbi>;
export declare class Vault implements IVault {
    address: string;
    contract: VaultContract;
    provider: RpcProvider;
    constructor(contractAddress: string, provider: RpcProvider | string);
    deployTongo(params: DeployDetails): Promise<DeployOperation>;
    tongoClassHash(): Promise<string>;
    ERC20(): Promise<string>;
    bitSize(): Promise<number>;
    rate(): Promise<bigint>;
    vaultConfig(): Promise<VaultConfig>;
}
