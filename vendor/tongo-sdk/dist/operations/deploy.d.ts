import { StarkPoint } from "../types.js";
import { Call, CairoOption } from "starknet";
import { IOperation, OperationType } from "./operation.js";
import { VaultConfig } from "../vault/vault.interface.js";
import { VaultContract } from "../contracts.js";
export interface IDeployOperation extends IOperation {
    type: typeof OperationType.Deploy;
}
interface DeployOpParams {
    owner: bigint;
    tag: bigint;
    auditorKey: StarkPoint | undefined;
    vaultSetup: VaultConfig;
    Vault: VaultContract;
}
export declare class DeployOperation implements IDeployOperation {
    type: typeof OperationType.Deploy;
    owner: bigint;
    feeToSender: bigint;
    tag: bigint;
    targetAddress: string;
    auditorKey: CairoOption<StarkPoint>;
    Vault: VaultContract;
    constructor({ owner, tag, auditorKey: auditor, Vault, vaultSetup }: DeployOpParams);
    toCalldata(): Call[];
}
export {};
