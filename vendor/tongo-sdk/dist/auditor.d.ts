import { BigNumberish, RpcProvider, TypedContractV2 } from "starknet";
import { AccountEventReader } from "./account/account.data.service.js";
import { CipherBalance } from "./types.js";
import { PubKey, TongoAddress } from "./types.js";
import { AEBalance } from "./ae_balance.js";
import { EventType } from "./events.js";
import { tongoAbi } from "./abi/tongo.abi.js";
interface AuditorBaseEvent {
    type: EventType;
    tx_hash: string;
    block_number: number;
    transaction_index: number;
    event_index: number;
}
interface AuditorBalanceDeclared extends AuditorBaseEvent {
    type: typeof EventType.BalanceDeclared;
    nonce: bigint;
    user: TongoAddress;
    amount: bigint;
}
interface AuditorTransferOutDeclared extends AuditorBaseEvent {
    type: typeof EventType.TransferOut;
    sender_nonce: bigint;
    user: TongoAddress;
    amount: bigint;
    to: TongoAddress;
}
interface AuditorTransferInDeclared extends AuditorBaseEvent {
    type: typeof EventType.TransferIn;
    sender_nonce: bigint;
    user: TongoAddress;
    amount: bigint;
    from: TongoAddress;
}
type AuditorEvents = AuditorBalanceDeclared | AuditorTransferOutDeclared | AuditorTransferInDeclared;
export declare class Auditor {
    private pks;
    private publicKeys;
    provider: RpcProvider;
    Tongo: TypedContractV2<typeof tongoAbi>;
    reader: AccountEventReader;
    constructor(pk: BigNumberish | Uint8Array | (BigNumberish | Uint8Array)[], contractAddress: string, provider: RpcProvider | string);
    get pk(): bigint;
    get publicKey(): PubKey;
    addPrivateKey(pk: BigNumberish | Uint8Array): void;
    getAllPublicKeys(): PubKey[];
    findKeyIndex(auditorPubKey: PubKey): number;
    getPKByIndex(index: number): bigint;
    decryptCipherBalance({ L, R }: CipherBalance, hint?: bigint, keyIndex?: number): bigint;
    decryptAEHintForPubKey(aeHint: AEBalance, accountNonce: bigint, other: PubKey, auditorPubKey: PubKey): Promise<{
        balance: bigint;
        keyIndex: number;
    }>;
    getUserBalances(fromBlock: number, otherPubKey: PubKey, toBlock?: number | "latest", numEvents?: number | "all"): Promise<AuditorBalanceDeclared[]>;
    getUserBalance(fromBlock: number, otherPubKey: PubKey, toBlock?: number | "latest", numEvents?: number | "all"): Promise<AuditorBalanceDeclared | null>;
    getUserTransferOut(fromBlock: number, otherPubKey: PubKey, toBlock?: number | "latest", numEvents?: number | "all"): Promise<AuditorTransferOutDeclared[]>;
    getUserTransferIn(fromBlock: number, otherPubKey: PubKey, toBlock?: number | "latest", numEvents?: number | "all"): Promise<AuditorTransferInDeclared[]>;
    getUserHistory(fromBlock: number, user: PubKey, toBlock?: number | "latest", numEvents?: number | "all"): Promise<AuditorEvents[]>;
    getLastUserEvent(fromBlock: number, user: PubKey, toBlock?: number | "latest", numEvents?: number | "all"): Promise<AuditorEvents | null>;
    getRealuserBalance(fromBlock: number, user: PubKey, toBlock?: number | "latest", numEvents?: number | "all"): Promise<bigint | null>;
    getOperationsByTxHash(fromBlock: number, user: PubKey, txHash: string, toBlock?: number | "latest", numEvents?: number | "all"): Promise<AuditorEvents[]>;
}
export {};
