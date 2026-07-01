import { AbiParser2, CallData, events } from "starknet";
const CHUNK_SIZE = 100;
export class ContractEventReader {
    provider;
    static abiParser;
    abiParser = ContractEventReader.abiParser;
    contractAddress;
    contractAbi;
    constructor(provider, contractAddress, contractAbi) {
        this.provider = provider;
        this.abiParser = new AbiParser2(contractAbi);
        this.contractAddress = contractAddress;
        this.contractAbi = contractAbi;
    }
    async fetchEvents(keys, fromBlock, eventPath, parser, toBlock = "latest", numEvents = "all") {
        const abiEvents = events.getAbiEvents(this.contractAbi);
        const abiStructs = CallData.getAbiStruct(this.contractAbi);
        const abiEnums = CallData.getAbiEnum(this.contractAbi);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const allRawEvents = []; // TODO: figure out a way of handling v10 | v09 events
        let continuationToken;
        do {
            const result = await this.provider.getEvents({
                address: this.contractAddress,
                from_block: { block_number: fromBlock },
                to_block: toBlock === "latest" ? "latest" : { block_number: toBlock },
                keys,
                chunk_size: CHUNK_SIZE,
                ...(continuationToken && { continuation_token: continuationToken }),
            });
            allRawEvents.push(...result.events);
            if (numEvents !== "all" && allRawEvents.length >= numEvents) {
                break;
            }
            continuationToken = result.continuation_token;
        } while (continuationToken);
        const trimmedEvents = numEvents === "all" ? allRawEvents : allRawEvents.slice(0, numEvents);
        const parsedEvents = events.parseEvents(trimmedEvents, abiEvents, abiStructs, abiEnums, this.abiParser);
        return parsedEvents
            .filter((event) => event[eventPath] !== undefined)
            .map((event) => parser(event));
    }
}
//# sourceMappingURL=data.service.js.map