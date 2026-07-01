import { num, hash } from "starknet";
import { vaultAbi } from "../abi/vault.abi.js";
import { ContractEventReader } from "../data.service.js";
const TONGO_DEPLOYED_EVENT = num.toHex(hash.starknetKeccak("TongoDeployed"));
const TONGO_DEPLOYED_EVENT_PATH = "tongo::structs::events::TongoDeployed";
export const VaultReaderEventType = {
    TongoDeployed: "tongoDeployed",
};
function parseTongoDeployedEvent(event) {
    const data = event[TONGO_DEPLOYED_EVENT_PATH];
    return {
        type: VaultReaderEventType.TongoDeployed,
        tx_hash: event.transaction_hash,
        block_number: event.block_number,
        event_index: event.event_index,
        transaction_index: event.transaction_index,
        ...data,
    };
}
export class VaultEventReader {
    vaultAddress;
    eventReader;
    constructor(provider, vaultAddress) {
        this.vaultAddress = vaultAddress;
        this.eventReader = new ContractEventReader(provider, vaultAddress, vaultAbi);
    }
    async getEventsFund(fromBlock, tag, toBlock = "latest", numEvents = "all") {
        return this.eventReader.fetchEvents([[TONGO_DEPLOYED_EVENT], [num.toHex(tag)]], fromBlock, TONGO_DEPLOYED_EVENT_PATH, parseTongoDeployedEvent, toBlock, numEvents);
    }
}
//# sourceMappingURL=vault.data.service.js.map