import { RpcProvider } from "starknet";
import { StarkPoint } from "../types.js";
import { ContractEventReader } from "../data.service.js";
export declare const VaultReaderEventType: {
    readonly TongoDeployed: "tongoDeployed";
};
type VaultReaderEventType = (typeof VaultReaderEventType)[keyof typeof VaultReaderEventType];
interface BaseEvent {
    type: VaultReaderEventType;
    tx_hash: string;
    block_number: number;
    event_index: number;
    transaction_index: number;
}
interface TongoDeployedEventData {
    tag: bigint;
    address: bigint;
    ERC20: bigint;
    rate: bigint;
    bit_size: bigint;
    auditor_key: StarkPoint | undefined;
}
type VaultReaderTongoDeployedEvent = TongoDeployedEventData & BaseEvent & {
    type: typeof VaultReaderEventType.TongoDeployed;
};
export declare class VaultEventReader {
    vaultAddress: string;
    eventReader: ContractEventReader;
    constructor(provider: RpcProvider, vaultAddress: string);
    getEventsFund(fromBlock: number, tag: bigint, toBlock?: number | "latest", numEvents?: number | "all"): Promise<VaultReaderTongoDeployedEvent[]>;
}
export {};
