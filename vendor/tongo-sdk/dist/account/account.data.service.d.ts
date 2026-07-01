import { RpcProvider } from "starknet";
import { PubKey, StarkPoint } from "../types.js";
import { AEBalance } from "../ae_balance.js";
import { ContractEventReader } from "../data.service.js";
import { EventType } from "../events.js";
interface BaseEvent {
    type: EventType;
    tx_hash: string;
    block_number: number;
    event_index: number;
    transaction_index: number;
}
interface FundEventData {
    to: StarkPoint;
    nonce: bigint;
    from: bigint;
    amount: bigint;
}
interface OutsideFundEventData {
    to: StarkPoint;
    from: bigint;
    amount: bigint;
}
interface WithdrawEventData {
    from: StarkPoint;
    nonce: bigint;
    amount: bigint;
    to: bigint;
}
interface RagequitEventData {
    from: StarkPoint;
    nonce: bigint;
    amount: bigint;
    to: bigint;
}
interface RolloverEventData {
    to: StarkPoint;
    nonce: bigint;
    rollovered: {
        L: StarkPoint;
        R: StarkPoint;
    };
}
interface TransferEventData {
    to: StarkPoint;
    from: StarkPoint;
    nonce: bigint;
    toTongo: bigint;
    transferBalance: {
        L: StarkPoint;
        R: StarkPoint;
    };
    transferBalanceSelf: {
        L: StarkPoint;
        R: StarkPoint;
    };
    hintTransfer: AEBalance;
    hintLeftover: AEBalance;
}
interface ExternalTransferEventData {
    to: StarkPoint;
    from: StarkPoint;
    nonce: bigint;
    fromTongo: bigint;
    transferBalance: {
        L: StarkPoint;
        R: StarkPoint;
    };
    hintTransfer: AEBalance;
}
interface BalanceDeclaredEventData {
    from: StarkPoint;
    nonce: bigint;
    auditorPubKey: StarkPoint;
    declaredCipherBalance: {
        L: StarkPoint;
        R: StarkPoint;
    };
    hint: AEBalance;
}
interface TransferDeclaredEventData {
    from: StarkPoint;
    to: StarkPoint;
    nonce: bigint;
    auditorPubKey: StarkPoint;
    declaredCipherBalance: {
        L: StarkPoint;
        R: StarkPoint;
    };
    hint: AEBalance;
}
type TongoReaderFundEvent = BaseEvent & FundEventData & {
    type: typeof EventType.Fund;
};
type TongoReaderOutsideFundEvent = BaseEvent & OutsideFundEventData & {
    type: typeof EventType.OutsideFund;
};
type TongoReaderWithdrawEvent = BaseEvent & WithdrawEventData & {
    type: typeof EventType.Withdraw;
};
type TongoReaderRagequitEvent = BaseEvent & RagequitEventData & {
    type: typeof EventType.Ragequit;
};
type TongoReaderRolloverEvent = BaseEvent & RolloverEventData & {
    type: typeof EventType.Rollover;
};
type TongoReaderTransferInEvent = BaseEvent & TransferEventData & {
    type: typeof EventType.TransferIn;
};
type TongoReaderTransferOutEvent = BaseEvent & TransferEventData & {
    type: typeof EventType.TransferOut;
};
type TongoReaderBalanceDeclaredEvent = BaseEvent & BalanceDeclaredEventData & {
    type: typeof EventType.BalanceDeclared;
};
type TongoReaderTransferDeclaredEvent = BaseEvent & TransferDeclaredEventData & {
    type: typeof EventType.TransferDeclared;
};
type TongoReaderExternalTransferEvent = BaseEvent & ExternalTransferEventData & {
    type: typeof EventType.ExternalTransferIn;
};
type TongoReaderEvent = TongoReaderFundEvent | TongoReaderOutsideFundEvent | TongoReaderWithdrawEvent | TongoReaderRagequitEvent | TongoReaderRolloverEvent | TongoReaderTransferInEvent | TongoReaderTransferOutEvent | TongoReaderBalanceDeclaredEvent | TongoReaderTransferDeclaredEvent | TongoReaderExternalTransferEvent;
export declare class AccountEventReader {
    tongoAddress: string;
    eventReader: ContractEventReader;
    constructor(provider: RpcProvider, tongoAddress: string);
    getEventsFund(fromBlock: number, otherPubKey: PubKey, toBlock?: number | "latest", numEvents?: number | "all"): Promise<TongoReaderFundEvent[]>;
    getEventsOutsideFund(fromBlock: number, otherPubKey: PubKey, toBlock?: number | "latest", numEvents?: number | "all"): Promise<TongoReaderOutsideFundEvent[]>;
    getEventsWithdraw(fromBlock: number, otherPubKey: PubKey, toBlock?: number | "latest", numEvents?: number | "all"): Promise<TongoReaderWithdrawEvent[]>;
    getEventsRagequit(fromBlock: number, otherPubKey: PubKey, toBlock?: number | "latest", numEvents?: number | "all"): Promise<TongoReaderRagequitEvent[]>;
    getEventsRollover(fromBlock: number, otherPubKey: PubKey, toBlock?: number | "latest", numEvents?: number | "all"): Promise<TongoReaderRolloverEvent[]>;
    getEventsTransferOut(fromBlock: number, otherPubKey: PubKey, toBlock?: number | "latest", numEvents?: number | "all"): Promise<TongoReaderTransferOutEvent[]>;
    getEventsTransferIn(fromBlock: number, otherPubKey: PubKey, toBlock?: number | "latest", numEvents?: number | "all"): Promise<TongoReaderTransferInEvent[]>;
    getAllEvents(fromBlock: number, otherPubKey: PubKey, toBlock?: number | "latest", numEvents?: number | "all"): Promise<TongoReaderEvent[]>;
    getEventsBalanceDeclared(fromBlock: number, otherPubKey: PubKey, toBlock?: number | "latest", numEvents?: number | "all"): Promise<TongoReaderBalanceDeclaredEvent[]>;
    getEventsTransferFrom(fromBlock: number, otherPubKey: PubKey, toBlock?: number | "latest", numEvents?: number | "all"): Promise<TongoReaderTransferDeclaredEvent[]>;
    getEventsTransferTo(fromBlock: number, otherPubKey: PubKey, toBlock?: number | "latest", numEvents?: number | "all"): Promise<TongoReaderTransferDeclaredEvent[]>;
    getReceivedExternalTransferTo(fromBlock: number, otherPubKey: PubKey, toBlock?: number | "latest", numEvents?: number | "all"): Promise<TongoReaderExternalTransferEvent[]>;
}
export {};
