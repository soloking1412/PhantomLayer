import { Contract, RpcProvider } from "starknet";
import { AccountEventReader } from "./account/account.data.service.js";
import { assertBalance, decipherBalance } from "./utils.js";
import { derivePublicKey, parseCipherBalance, pubKeyAffineToBase58, } from "./types.js";
import { decryptAEHint } from "./ae_balance.js";
import { EventType } from "./events.js";
import { tongoAbi } from "./abi/tongo.abi.js";
import { bytesOrNumToBigInt } from "./utils.js";
import { RPC_SPEC_VERSION } from "./constants.js";
export class Auditor {
    pks;
    publicKeys;
    provider;
    Tongo;
    reader;
    constructor(pk, contractAddress, provider) {
        const keys = Array.isArray(pk) ? pk : [pk];
        this.pks = keys.map((k) => bytesOrNumToBigInt(k));
        this.publicKeys = this.pks.map((k) => derivePublicKey(k));
        const rpc = provider instanceof RpcProvider
            ? provider
            : new RpcProvider({
                nodeUrl: provider,
                specVersion: RPC_SPEC_VERSION,
            });
        this.Tongo = new Contract({
            abi: tongoAbi,
            address: contractAddress,
            providerOrAccount: rpc,
        }).typedv2(tongoAbi);
        this.provider = rpc;
        this.reader = new AccountEventReader(rpc, contractAddress);
    }
    get pk() {
        const lastPk = this.pks[this.pks.length - 1];
        if (lastPk) {
            return lastPk;
        }
        else {
            throw new Error("Pk not found");
        }
    }
    get publicKey() {
        const lastPublicKey = this.publicKeys[this.publicKeys.length - 1];
        if (lastPublicKey) {
            return lastPublicKey;
        }
        else {
            throw new Error("PublicKey not found");
        }
    }
    addPrivateKey(pk) {
        const key = bytesOrNumToBigInt(pk);
        this.pks.push(key);
        this.publicKeys.push(derivePublicKey(key));
    }
    getAllPublicKeys() {
        return [...this.publicKeys];
    }
    findKeyIndex(auditorPubKey) {
        const index = this.publicKeys.findIndex((pk) => pk.x === auditorPubKey.x && pk.y === auditorPubKey.y);
        if (index === -1) {
            throw new Error("Unknown auditor key");
        }
        return index;
    }
    getPKByIndex(index) {
        const pk = this.pks[index];
        if (!pk)
            throw new Error(`Pk not found for index ${index}`);
        return pk;
    }
    decryptCipherBalance({ L, R }, hint, keyIndex) {
        const pk = keyIndex !== undefined ? this.getPKByIndex(keyIndex) : this.pk;
        if (hint) {
            if (assertBalance(pk, hint, L, R)) {
                return hint;
            }
        }
        return decipherBalance(pk, L, R);
    }
    async decryptAEHintForPubKey(aeHint, accountNonce, other, auditorPubKey) {
        const keyIndex = this.findKeyIndex(auditorPubKey);
        const balance = await decryptAEHint(this.getPKByIndex(keyIndex), aeHint, accountNonce, other, this.Tongo.address);
        return { balance, keyIndex };
    }
    async getUserBalances(fromBlock, otherPubKey, toBlock = "latest", numEvents = "all") {
        const events = await this.reader.getEventsBalanceDeclared(fromBlock, otherPubKey, toBlock, numEvents);
        return Promise.all(events.map(async (event) => {
            const { balance: hint, keyIndex } = await this.decryptAEHintForPubKey(event.hint, event.nonce, otherPubKey, event.auditorPubKey);
            return {
                type: EventType.BalanceDeclared,
                tx_hash: event.tx_hash,
                block_number: event.block_number,
                transaction_index: event.transaction_index,
                event_index: event.event_index,
                nonce: event.nonce,
                user: pubKeyAffineToBase58(otherPubKey),
                amount: this.decryptCipherBalance(parseCipherBalance(event.declaredCipherBalance), hint, keyIndex),
            };
        }));
    }
    async getUserBalance(fromBlock, otherPubKey, toBlock = "latest", numEvents = "all") {
        const balances = await this.getUserBalances(fromBlock, otherPubKey, toBlock, numEvents);
        if (balances.length === 0)
            return null;
        return balances.sort((a, b) => {
            if (a.block_number !== b.block_number) {
                return b.block_number - a.block_number;
            }
            if (a.transaction_index !== b.transaction_index) {
                return b.transaction_index - a.transaction_index;
            }
            return b.event_index - a.event_index;
        })[0];
    }
    async getUserTransferOut(fromBlock, otherPubKey, toBlock = "latest", numEvents = "all") {
        const events = await this.reader.getEventsTransferFrom(fromBlock, otherPubKey, toBlock, numEvents);
        return Promise.all(events.map(async (event) => {
            const { balance: hint, keyIndex } = await this.decryptAEHintForPubKey(event.hint, event.nonce, otherPubKey, event.auditorPubKey);
            return {
                type: EventType.TransferOut,
                tx_hash: event.tx_hash,
                block_number: event.block_number,
                sender_nonce: event.nonce,
                user: pubKeyAffineToBase58(otherPubKey),
                amount: this.decryptCipherBalance(parseCipherBalance(event.declaredCipherBalance), hint, keyIndex),
                to: pubKeyAffineToBase58(event.to),
            };
        }));
    }
    async getUserTransferIn(fromBlock, otherPubKey, toBlock = "latest", numEvents = "all") {
        const events = await this.reader.getEventsTransferTo(fromBlock, otherPubKey, toBlock, numEvents);
        return Promise.all(events.map(async (event) => {
            const { balance: hint, keyIndex } = await this.decryptAEHintForPubKey(event.hint, event.nonce, event.from, event.auditorPubKey);
            return {
                type: EventType.TransferIn,
                tx_hash: event.tx_hash,
                block_number: event.block_number,
                sender_nonce: event.nonce,
                user: pubKeyAffineToBase58(otherPubKey),
                amount: this.decryptCipherBalance(parseCipherBalance(event.declaredCipherBalance), hint, keyIndex),
                from: pubKeyAffineToBase58(event.from),
            };
        }));
    }
    async getUserHistory(fromBlock, user, toBlock = "latest", numEvents = "all") {
        const promises = Promise.all([
            this.getUserBalance(fromBlock, user, toBlock, numEvents),
            this.getUserTransferOut(fromBlock, user, toBlock, numEvents),
            this.getUserTransferIn(fromBlock, user, toBlock, numEvents),
        ]);
        const events = (await promises).flat().filter((e) => e !== null);
        return events.sort((a, b) => b.block_number - a.block_number);
    }
    async getLastUserEvent(fromBlock, user, toBlock = "latest", numEvents = "all") {
        const events = await this.getUserHistory(fromBlock, user, toBlock, numEvents);
        if (events.length === 0)
            return null;
        return events[0];
    }
    async getRealuserBalance(fromBlock, user, toBlock = "latest", numEvents = "all") {
        const lastDeclaredBalance = await this.getUserBalance(fromBlock, user, toBlock, numEvents);
        if (lastDeclaredBalance === null)
            return null;
        const incomingTransfers = await this.getUserTransferIn(fromBlock, user, toBlock, numEvents);
        const pendingIncoming = incomingTransfers.filter((transfer) => transfer.block_number > lastDeclaredBalance.block_number ||
            (transfer.block_number === lastDeclaredBalance.block_number &&
                transfer.transaction_index > lastDeclaredBalance.transaction_index) ||
            (transfer.block_number === lastDeclaredBalance.block_number &&
                transfer.transaction_index === lastDeclaredBalance.transaction_index &&
                transfer.event_index > lastDeclaredBalance.event_index));
        const pendingAmount = pendingIncoming.reduce((sum, transfer) => sum + transfer.amount, 0n);
        return lastDeclaredBalance.amount + pendingAmount;
    }
    async getOperationsByTxHash(fromBlock, user, txHash, toBlock = "latest", numEvents = "all") {
        const events = await this.getUserHistory(fromBlock, user, toBlock, numEvents);
        return events.filter((event) => event.tx_hash === txHash);
    }
}
//# sourceMappingURL=auditor.js.map