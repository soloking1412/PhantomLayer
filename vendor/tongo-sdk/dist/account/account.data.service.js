import { num, hash } from "starknet";
import { tongoAbi } from "../abi/tongo.abi.js";
import { ContractEventReader } from "../data.service.js";
import { EventType } from "../events.js";
const FUND_EVENT = num.toHex(hash.starknetKeccak("FundEvent"));
const OUTSIDE_FUND_EVENT = num.toHex(hash.starknetKeccak("OutsideFundEvent"));
const ROLLOVER_EVENT = num.toHex(hash.starknetKeccak("RolloverEvent"));
const TRANSFER_EVENT = num.toHex(hash.starknetKeccak("TransferEvent"));
const WITHDRAW_EVENT = num.toHex(hash.starknetKeccak("WithdrawEvent"));
const RAGEQUIT_EVENT = num.toHex(hash.starknetKeccak("RagequitEvent"));
const BALANCE_DECLARED_EVENT = num.toHex(hash.starknetKeccak("BalanceDeclared"));
const TRANSFER_DECLARED_EVENT = num.toHex(hash.starknetKeccak("TransferDeclared"));
const EXTERNAL_TRANSFER_EVENT = num.toHex(hash.starknetKeccak("ReceivedExternalTransfer"));
const FUND_EVENT_PATH = "tongo::structs::events::FundEvent";
const OUTSIDE_FUND_EVENT_PATH = "tongo::structs::events::OutsideFundEvent";
const ROLLOVER_EVENT_PATH = "tongo::structs::events::RolloverEvent";
const TRANSFER_EVENT_PATH = "tongo::structs::events::TransferEvent";
const WITHDRAW_EVENT_PATH = "tongo::structs::events::WithdrawEvent";
const RAGEQUIT_EVENT_PATH = "tongo::structs::events::RagequitEvent";
const BALANCE_DECLARED_EVENT_PATH = "tongo::structs::events::BalanceDeclared";
const TRANSFER_DECLARED_EVENT_PATH = "tongo::structs::events::TransferDeclared";
const EXTERNAL_TRANSFER_EVENT_PATH = "tongo::structs::events::ReceivedExternalTransfer";
function makeEventParser(type, path) {
    return (event) => {
        if (event.transaction_hash &&
            event.block_number &&
            event.event_index &&
            event.transaction_index) {
            return {
                type,
                tx_hash: event.transaction_hash,
                block_number: event.block_number,
                event_index: event.event_index,
                transaction_index: event.transaction_index,
                ...event[path],
            };
        }
        else {
            throw new Error(`Malformed event: ${JSON.stringify(event)}`);
        }
    };
}
const parseFundEvent = makeEventParser(EventType.Fund, FUND_EVENT_PATH);
const parseOutsideFundEvent = makeEventParser(EventType.OutsideFund, OUTSIDE_FUND_EVENT_PATH);
const parseWithdrawEvent = makeEventParser(EventType.Withdraw, WITHDRAW_EVENT_PATH);
const parseRagequitEvent = makeEventParser(EventType.Ragequit, RAGEQUIT_EVENT_PATH);
const parseRolloverEvent = makeEventParser(EventType.Rollover, ROLLOVER_EVENT_PATH);
const parseTransferEventIn = makeEventParser(EventType.TransferIn, TRANSFER_EVENT_PATH);
const parseTransferEventOut = makeEventParser(EventType.TransferOut, TRANSFER_EVENT_PATH);
const parseBalanceDeclaredEvent = makeEventParser(EventType.BalanceDeclared, BALANCE_DECLARED_EVENT_PATH);
const parseTransferDeclaredEvent = makeEventParser(EventType.TransferDeclared, TRANSFER_DECLARED_EVENT_PATH);
const parseReceivedExternalTransfer = makeEventParser(EventType.ExternalTransferIn, EXTERNAL_TRANSFER_EVENT_PATH);
export class AccountEventReader {
    tongoAddress;
    eventReader;
    constructor(provider, tongoAddress) {
        this.tongoAddress = tongoAddress;
        this.eventReader = new ContractEventReader(provider, tongoAddress, tongoAbi);
    }
    async getEventsFund(fromBlock, otherPubKey, toBlock = "latest", numEvents = "all") {
        return this.eventReader.fetchEvents([[FUND_EVENT], [num.toHex(otherPubKey.x)], [num.toHex(otherPubKey.y)]], fromBlock, FUND_EVENT_PATH, parseFundEvent, toBlock, numEvents);
    }
    async getEventsOutsideFund(fromBlock, otherPubKey, toBlock = "latest", numEvents = "all") {
        return this.eventReader.fetchEvents([[OUTSIDE_FUND_EVENT], [num.toHex(otherPubKey.x)], [num.toHex(otherPubKey.y)]], fromBlock, OUTSIDE_FUND_EVENT_PATH, parseOutsideFundEvent, toBlock, numEvents);
    }
    async getEventsWithdraw(fromBlock, otherPubKey, toBlock = "latest", numEvents = "all") {
        return this.eventReader.fetchEvents([[WITHDRAW_EVENT], [num.toHex(otherPubKey.x)], [num.toHex(otherPubKey.y)]], fromBlock, WITHDRAW_EVENT_PATH, parseWithdrawEvent, toBlock, numEvents);
    }
    async getEventsRagequit(fromBlock, otherPubKey, toBlock = "latest", numEvents = "all") {
        return this.eventReader.fetchEvents([[RAGEQUIT_EVENT], [num.toHex(otherPubKey.x)], [num.toHex(otherPubKey.y)]], fromBlock, RAGEQUIT_EVENT_PATH, parseRagequitEvent, toBlock, numEvents);
    }
    async getEventsRollover(fromBlock, otherPubKey, toBlock = "latest", numEvents = "all") {
        return this.eventReader.fetchEvents([[ROLLOVER_EVENT], [num.toHex(otherPubKey.x)], [num.toHex(otherPubKey.y)]], fromBlock, ROLLOVER_EVENT_PATH, parseRolloverEvent, toBlock, numEvents);
    }
    async getEventsTransferOut(fromBlock, otherPubKey, toBlock = "latest", numEvents = "all") {
        return this.eventReader.fetchEvents([[TRANSFER_EVENT], [], [], [num.toHex(otherPubKey.x)], [num.toHex(otherPubKey.y)], []], fromBlock, TRANSFER_EVENT_PATH, parseTransferEventOut, toBlock, numEvents);
    }
    async getEventsTransferIn(fromBlock, otherPubKey, toBlock = "latest", numEvents = "all") {
        return this.eventReader.fetchEvents([[TRANSFER_EVENT], [num.toHex(otherPubKey.x)], [num.toHex(otherPubKey.y)], [], [], []], fromBlock, TRANSFER_EVENT_PATH, parseTransferEventIn, toBlock, numEvents);
    }
    async getAllEvents(fromBlock, otherPubKey, toBlock = "latest", numEvents = "all") {
        const results = await Promise.all([
            this.getEventsFund(fromBlock, otherPubKey, toBlock, numEvents),
            this.getEventsOutsideFund(fromBlock, otherPubKey, toBlock, numEvents),
            this.getEventsRollover(fromBlock, otherPubKey, toBlock, numEvents),
            this.getEventsWithdraw(fromBlock, otherPubKey, toBlock, numEvents),
            this.getEventsRagequit(fromBlock, otherPubKey, toBlock, numEvents),
            this.getEventsTransferOut(fromBlock, otherPubKey, toBlock, numEvents),
            this.getEventsTransferIn(fromBlock, otherPubKey, toBlock, numEvents),
            this.getReceivedExternalTransferTo(fromBlock, otherPubKey, toBlock, numEvents),
        ]);
        return results.flat().sort((a, b) => b.block_number - a.block_number);
    }
    async getEventsBalanceDeclared(fromBlock, otherPubKey, toBlock = "latest", numEvents = "all") {
        return this.eventReader.fetchEvents([
            [BALANCE_DECLARED_EVENT],
            [num.toHex(otherPubKey.x)],
            [num.toHex(otherPubKey.y)],
            [],
            [],
            [],
        ], fromBlock, BALANCE_DECLARED_EVENT_PATH, parseBalanceDeclaredEvent, toBlock, numEvents);
    }
    async getEventsTransferFrom(fromBlock, otherPubKey, toBlock = "latest", numEvents = "all") {
        return this.eventReader.fetchEvents([
            [TRANSFER_DECLARED_EVENT],
            [num.toHex(otherPubKey.x)],
            [num.toHex(otherPubKey.y)],
            [],
            [],
            [],
        ], fromBlock, TRANSFER_DECLARED_EVENT_PATH, parseTransferDeclaredEvent, toBlock, numEvents);
    }
    async getEventsTransferTo(fromBlock, otherPubKey, toBlock = "latest", numEvents = "all") {
        return this.eventReader.fetchEvents([
            [TRANSFER_DECLARED_EVENT],
            [],
            [],
            [num.toHex(otherPubKey.x)],
            [num.toHex(otherPubKey.y)],
            [],
        ], fromBlock, TRANSFER_DECLARED_EVENT_PATH, parseTransferDeclaredEvent, toBlock, numEvents);
    }
    async getReceivedExternalTransferTo(fromBlock, otherPubKey, toBlock = "latest", numEvents = "all") {
        return this.eventReader.fetchEvents([
            [EXTERNAL_TRANSFER_EVENT],
            [num.toHex(otherPubKey.x)],
            [num.toHex(otherPubKey.y)],
            [],
            [],
            [],
        ], fromBlock, TRANSFER_DECLARED_EVENT_PATH, parseReceivedExternalTransfer, toBlock, numEvents);
    }
}
//# sourceMappingURL=account.data.service.js.map