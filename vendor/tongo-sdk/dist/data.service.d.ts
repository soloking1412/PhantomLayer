import { ParsedEvent, RpcProvider } from "starknet";
import { TongoAbi, VaultAbi } from "./abi/abi.types.js";
export declare class ContractEventReader {
    private readonly provider;
    private static readonly abiParser;
    private readonly abiParser;
    contractAddress: string;
    contractAbi: TongoAbi | VaultAbi;
    constructor(provider: RpcProvider, contractAddress: string, contractAbi: TongoAbi | VaultAbi);
    fetchEvents<T>(keys: string[][], fromBlock: number, eventPath: string, parser: (event: ParsedEvent) => T, toBlock?: number | "latest", numEvents?: number | "all"): Promise<T[]>;
}
