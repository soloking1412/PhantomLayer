import { Contract, num, RpcProvider, Signer, } from "starknet";
import { proveAudit, verifyAudit } from "../provers/audit.js";
import { proveFund } from "../provers/fund.js";
import { proveRagequit } from "../provers/ragequit.js";
import { proveRollover } from "../provers/rollover.js";
import { proveTransfer } from "../provers/transfer.js";
import { proveWithdraw } from "../provers/withdraw.js";
import { AEChaCha, bytesToAEHint, decryptAEHint, parseAEBalance, } from "../ae_balance.js";
import { FEE_CAIRO_STRING } from "../constants.js";
import { deriveSymmetricEncryptionKey, ECDiffieHellman } from "../key.js";
import { FundOperation } from "../operations/fund.js";
import { OutsideFundOperation } from "../operations/outside_fund.js";
import { RollOverOperation } from "../operations/rollover.js";
import { TransferOperation, serializeTransferOptions, } from "../operations/transfer.js";
import { WithdrawOperation, serializeWithdrawOptions, } from "../operations/withdraw.js";
import { RagequitOperation, serializeRagequitOptions, } from "../operations/ragequit.js";
import { MultiOperation } from "../operations/multi_operation.js";
import { OperationType } from "../operations/operation.js";
import { tongoAbi } from "../abi/tongo.abi.js";
import { RPC_SPEC_VERSION } from "../constants.js";
import { parseCipherBalance, pubKeyAffineToBase58, pubKeyAffineToHex, pubKeyBase58ToHex, starkPointToProjectivePoint, } from "../types.js";
import { None, Some, toNumber } from "../utils.js";
import { AccountEventReader } from "./account.data.service.js";
import { assertBalance, bytesOrNumToBigInt, castBigInt, decipherBalance, pubKeyFromSecret, createCipherBalance, erc20ToTongo, tongoToErc20, } from "../utils.js";
import { poseidonHashMany } from "@scure/starknet";
export class Account {
    // -------------------------------------------------------------------------
    // Fields
    // -------------------------------------------------------------------------
    publicKey;
    pk;
    provider;
    Tongo;
    reader;
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    constructor(pk, contractAddress, provider) {
        this.pk = bytesOrNumToBigInt(pk);
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
        this.publicKey = pubKeyFromSecret(this.pk);
        this.provider = rpc;
        this.reader = new AccountEventReader(rpc, contractAddress);
    }
    // -------------------------------------------------------------------------
    // Static
    // -------------------------------------------------------------------------
    tongoAddress() {
        return pubKeyAffineToBase58(this.publicKey);
    }
    static tongoAddress(pk) {
        return pubKeyAffineToBase58(pubKeyFromSecret(bytesOrNumToBigInt(pk)));
    }
    // -------------------------------------------------------------------------
    // State queries
    // -------------------------------------------------------------------------
    /// Returns the State of the account. This functions decrypts the balance and pending
    /// CipherBalances.
    async state() {
        const { balance, pending, nonce } = await this._fetchCipherAccountState();
        return { balance, pending, nonce };
    }
    /// Returns the `almost` raw account state. The only handling that happens here is type
    // conversion from CairoOption::None to undefined and from StarkPoints to ProjectivePoints
    async rawState() {
        const state = await this.Tongo.get_state(this.publicKey);
        return Account.parseAccountState(state);
    }
    async nonce() {
        const { nonce } = await this.rawState();
        return nonce;
    }
    /// Returns the rate of convertion of Tongo
    async rate() {
        const rate = await this.Tongo.get_rate();
        return castBigInt(rate);
    }
    /// Returns the bit_size of this Tongo contract
    async bitSize() {
        return toNumber(await this.Tongo.get_bit_size());
    }
    async erc20ToTongo(erc20Amount) {
        return erc20ToTongo(erc20Amount, await this.rate());
    }
    async tongoToErc20(tongoAmount) {
        return tongoToErc20(tongoAmount, await this.rate());
    }
    // -------------------------------------------------------------------------
    // Operations
    // -------------------------------------------------------------------------
    async fund(fundDetails) {
        const { amount, sender } = fundDetails;
        const [state, prefix_data] = await Promise.all([
            this._fetchCipherAccountState(),
            this.prefixData(sender),
        ]);
        const operation = await this._createFundOperation(state, { amount, prefix_data });
        await operation.populateApprove();
        return operation;
    }
    async outsideFund(outsideFundDetails) {
        const { amount, to } = outsideFundDetails;
        const operation = new OutsideFundOperation({
            to,
            amount,
            Tongo: this.Tongo,
        });
        await operation.populateApprove();
        return operation;
    }
    async transfer(transferDetails) {
        const { amount, sender } = transferDetails;
        const feeToSender = transferDetails.feeToSender || 0n;
        const [state, bitSize, prefix_data] = await Promise.all([
            this._fetchCipherAccountState(),
            this.bitSize(),
            this.prefixData(sender),
        ]);
        if (state.balance < amount + feeToSender) {
            throw new Error(`Insufficient balance for transfer: have ${state.balance}, need ${amount + feeToSender} (amount=${amount}, fee=${feeToSender})`);
        }
        return this._createTransferOperation(state, { prefix_data, bitSize, transferDetails });
    }
    async ragequit(ragequitDetails) {
        const { sender } = ragequitDetails;
        const feeToSender = ragequitDetails.feeToSender || 0n;
        const [state, prefix_data] = await Promise.all([
            this._fetchCipherAccountState(),
            this.prefixData(sender),
        ]);
        if (state.balance === 0n) {
            throw new Error("Cannot ragequit: balance is 0");
        }
        if (state.balance < feeToSender) {
            throw new Error(`Insufficient balance for ragequit: have ${state.balance}, need ${feeToSender} (relay fee)`);
        }
        return this._createRagequitOperation(state, { prefix_data, ragequitDetails });
    }
    async withdraw(withdrawDetails) {
        const { amount, sender } = withdrawDetails;
        const feeToSender = withdrawDetails.feeToSender || 0n;
        const [state, bitSize, prefix_data] = await Promise.all([
            this._fetchCipherAccountState(),
            this.bitSize(),
            this.prefixData(sender),
        ]);
        if (state.balance < amount + feeToSender) {
            throw new Error(`Insufficient balance for withdrawal: have ${state.balance}, need ${amount + feeToSender} (amount=${amount}, fee=${feeToSender})`);
        }
        return this._createWithdrawOperation(state, { prefix_data, bitSize, withdrawDetails });
    }
    async rollover(rolloverDetails) {
        const { sender } = rolloverDetails;
        const [state, prefix_data] = await Promise.all([
            this._fetchCipherAccountState(),
            this.prefixData(sender),
        ]);
        if (state.pending === 0n) {
            throw new Error("Nothing to roll over: pending balance is 0");
        }
        return this._createRolloverOperation(state, prefix_data);
    }
    async relayerRollover({ sender, feeToSender, }) {
        const multi = await this.startMultiOperation(sender);
        const state = multi.finalState;
        if (state.pending === 0n) {
            throw new Error("Nothing to roll over: pending balance is 0");
        }
        if (state.balance + state.pending < feeToSender) {
            throw new Error(`Insufficient balance for relay fee: have ${state.balance + state.pending}, need ${feeToSender}`);
        }
        if (state.balance >= feeToSender) {
            // Fee covered by current balance: withdraw first, then rollover.
            // The withdraw proof commits to currentAmount, which cannot be invalidated
            // by a tx that lands before ours (that would only grow pending, not balance).
            await this.pushOperation(multi, {
                type: OperationType.Withdraw,
                to: sender,
                amount: 0n,
                feeToSender,
            });
            await this.pushOperation(multi, { type: OperationType.Rollover });
        }
        else {
            // Fee requires pending funds: rollover first to consolidate, then withdraw.
            await this.pushOperation(multi, { type: OperationType.Rollover });
            await this.pushOperation(multi, {
                type: OperationType.Withdraw,
                to: sender,
                amount: 0n,
                feeToSender,
            });
        }
        return multi;
    }
    async startMultiOperation(opOrSender) {
        const bitSize = await this.bitSize();
        if (typeof opOrSender === "string") {
            const [state, prefix_data] = await Promise.all([
                this._fetchCipherAccountState(),
                this.prefixData(opOrSender),
            ]);
            return new MultiOperation(state, prefix_data, bitSize);
        }
        const op = opOrSender;
        const multi = new MultiOperation(op.nextState, op.prefix_data, bitSize);
        multi.push(op);
        return multi;
    }
    async pushOperation(multi, descriptor) {
        const { prefix_data, bit_size: bitSize } = multi;
        const sender = prefix_data.sender_address;
        const state = multi.finalState;
        switch (descriptor.type) {
            case OperationType.Fund: {
                const op = await this._createFundOperation(state, {
                    amount: descriptor.amount,
                    prefix_data,
                });
                multi.push(op);
                break;
            }
            case OperationType.Rollover: {
                const op = await this._createRolloverOperation(state, prefix_data);
                multi.push(op);
                break;
            }
            case OperationType.Withdraw: {
                const { type: _, ...rest } = descriptor;
                const op = await this._createWithdrawOperation(state, {
                    prefix_data,
                    bitSize,
                    withdrawDetails: { ...rest, sender },
                });
                multi.push(op);
                break;
            }
            case OperationType.Transfer: {
                const { type: _, ...rest } = descriptor;
                const op = await this._createTransferOperation(state, {
                    prefix_data,
                    bitSize,
                    transferDetails: { ...rest, sender },
                });
                multi.push(op);
                break;
            }
            case OperationType.Ragequit: {
                const { type: _, ...rest } = descriptor;
                const op = await this._createRagequitOperation(state, {
                    prefix_data,
                    ragequitDetails: { ...rest, sender },
                });
                multi.push(op);
                break;
            }
        }
    }
    // -------------------------------------------------------------------------
    // Audit & crypto
    // -------------------------------------------------------------------------
    async createAuditPart(balance, nonce, storedCipherBalance, prefix_data, auditor) {
        let auditPart = None();
        if (auditor.isSome()) {
            const auditorPubKey = starkPointToProjectivePoint(auditor.unwrap());
            const { inputs: inputsAudit, proof: proofAudit } = proveAudit(this.pk, balance, storedCipherBalance, auditorPubKey, prefix_data);
            const hint = await this.computeAEHintForPubKey(balance, nonce, auditorPubKey);
            const audit = {
                auditedBalance: inputsAudit.auditedBalance,
                hint,
                proof: proofAudit,
            };
            auditPart = Some(audit);
        }
        return auditPart;
    }
    async decryptAEBalance(aeBalance, accountNonce) {
        return this.decryptAEHintForPubKey(aeBalance, accountNonce, this.publicKey);
    }
    decryptCipherBalance({ L, R }, hint) {
        if (hint) {
            if (assertBalance(this.pk, hint, L, R)) {
                return hint;
            }
        }
        return decipherBalance(this.pk, L, R);
    }
    //TODO: rethink this to better ux
    async generateExPost(to, cipher, sender) {
        if (cipher.L == null) {
            throw new Error("Invalid cipher balance: L point is null");
        }
        if (cipher.R == null) {
            throw new Error("Invalid cipher balance: R point is null");
        }
        const prefix_data = await this.prefixData(sender);
        const balance = this.decryptCipherBalance(cipher);
        const { inputs, proof } = proveAudit(this.pk, balance, cipher, starkPointToProjectivePoint(to), prefix_data);
        return { inputs, proof };
    }
    verifyExPost(expost) {
        const y = expost.inputs.y;
        if (y != this.publicKey) {
            throw new Error(`ExPost does not belong to this account: proof targets (${y.x}, ${y.y}), this account is (${this.publicKey.x}, ${this.publicKey.y})`);
        }
        verifyAudit(expost.inputs, expost.proof);
        const amount = this.decryptCipherBalance({
            L: starkPointToProjectivePoint(expost.inputs.auditedBalance.L),
            R: starkPointToProjectivePoint(expost.inputs.auditedBalance.R),
        });
        return amount;
    }
    // -------------------------------------------------------------------------
    // Events
    // -------------------------------------------------------------------------
    async getEventsFund(fromBlock, toBlock = "latest", numEvents = "all") {
        const events = await this.reader.getEventsFund(fromBlock, this.publicKey, toBlock, numEvents);
        return events.map((event) => ({
            type: event.type,
            tx_hash: event.tx_hash,
            block_number: event.block_number,
            nonce: event.nonce,
            amount: event.amount,
            from: num.toHex(event.from),
        }));
    }
    async getEventsOutsideFund(fromBlock, toBlock = "latest", numEvents = "all") {
        const events = await this.reader.getEventsOutsideFund(fromBlock, this.publicKey, toBlock, numEvents);
        return events.map((event) => ({
            type: event.type,
            tx_hash: event.tx_hash,
            block_number: event.block_number,
            amount: event.amount,
            from: num.toHex(event.from),
        }));
    }
    async getEventsRollover(fromBlock, toBlock = "latest", numEvents = "all") {
        const events = await this.reader.getEventsRollover(fromBlock, this.publicKey, toBlock, numEvents);
        return events.map((event) => ({
            type: event.type,
            tx_hash: event.tx_hash,
            block_number: event.block_number,
            nonce: event.nonce,
            amount: this.decryptCipherBalance(parseCipherBalance(event.rollovered)),
        }));
    }
    async getEventsWithdraw(fromBlock, toBlock = "latest", numEvents = "all") {
        const events = await this.reader.getEventsWithdraw(fromBlock, this.publicKey, toBlock, numEvents);
        return events.map((event) => ({
            type: event.type,
            tx_hash: event.tx_hash,
            block_number: event.block_number,
            nonce: event.nonce,
            amount: event.amount,
            to: num.toHex(event.to),
        }));
    }
    async getEventsRagequit(fromBlock, toBlock = "latest", numEvents = "all") {
        const events = await this.reader.getEventsRagequit(fromBlock, this.publicKey, toBlock, numEvents);
        return events.map((event) => ({
            type: event.type,
            tx_hash: event.tx_hash,
            block_number: event.block_number,
            nonce: event.nonce,
            amount: event.amount,
            to: num.toHex(event.to),
        }));
    }
    async getEventsTransferOut(fromBlock, toBlock = "latest", numEvents = "all") {
        const events = await this.reader.getEventsTransferOut(fromBlock, this.publicKey, toBlock, numEvents);
        return Promise.all(events.map(async (event) => ({
            type: event.type,
            tx_hash: event.tx_hash,
            block_number: event.block_number,
            nonce: event.nonce,
            amount: this.decryptCipherBalance(parseCipherBalance(event.transferBalanceSelf), await this.decryptAEHintForPubKey(event.hintTransfer, event.nonce, event.to)),
            to: pubKeyAffineToBase58(event.to),
        })));
    }
    async getEventsTransferIn(fromBlock, toBlock = "latest", numEvents = "all") {
        const events = await this.reader.getEventsTransferIn(fromBlock, this.publicKey, toBlock, numEvents);
        return Promise.all(events.map(async (event) => ({
            type: event.type,
            tx_hash: event.tx_hash,
            block_number: event.block_number,
            nonce: event.nonce,
            amount: this.decryptCipherBalance(parseCipherBalance(event.transferBalance), await this.decryptAEHintForPubKey(event.hintTransfer, event.nonce, event.from)),
            from: pubKeyAffineToBase58(event.from),
        })));
    }
    async getEventsReceivedExternalTransfer(fromBlock, toBlock, numEvents) {
        const events = await this.reader.getReceivedExternalTransferTo(fromBlock, this.publicKey, toBlock, numEvents);
        return Promise.all(events.map(async (event) => ({
            type: event.type,
            tx_hash: event.tx_hash,
            block_number: event.block_number,
            amount: this.decryptCipherBalance(parseCipherBalance(event.transferBalance), await this.decryptAEHintForPubKey(event.hintTransfer, event.nonce, event.from)),
            nonce: event.nonce,
            from: pubKeyAffineToBase58(event.from),
            fromTongo: num.toHex(event.fromTongo),
        })));
    }
    async getTxHistory(fromBlock, toBlock = "latest", numEvents = "all") {
        const promises = Promise.all([
            this.getEventsFund(fromBlock, toBlock, numEvents),
            this.getEventsOutsideFund(fromBlock, toBlock, numEvents),
            this.getEventsRollover(fromBlock, toBlock, numEvents),
            this.getEventsWithdraw(fromBlock, toBlock, numEvents),
            this.getEventsRagequit(fromBlock, toBlock, numEvents),
            this.getEventsTransferOut(fromBlock, toBlock, numEvents),
            this.getEventsTransferIn(fromBlock, toBlock, numEvents),
            this.getEventsReceivedExternalTransfer(fromBlock, toBlock, numEvents),
        ]);
        const events = (await promises).flat();
        return events.sort((a, b) => b.block_number - a.block_number);
    }
    // -------------------------------------------------------------------------
    // Signing
    // -------------------------------------------------------------------------
    // This is intended to give a unique `nonce` per account state. It is usefull as snip9 nonce if needed.
    async nonceHash(data) {
        const nonce = await this.nonce();
        const tongoAddress = this.Tongo.address;
        const extraData = data ? data : [];
        return num.toHex(poseidonHashMany([
            BigInt(tongoAddress),
            BigInt(this.publicKey.x),
            BigInt(this.publicKey.y),
            nonce,
            ...extraData,
        ]));
    }
    async signMessage(typedData, accountAddress) {
        const signer = new Signer(num.toHex(this.pk));
        return await signer.signMessage(typedData, accountAddress);
    }
    // -------------------------------------------------------------------------
    // Private helpers
    // -------------------------------------------------------------------------
    async prefixData(sender) {
        return {
            chain_id: BigInt(await this.provider.getChainId()),
            tongo_address: this.Tongo.address,
            sender_address: sender,
        };
    }
    async auditorKey() {
        return this.Tongo.auditor_key();
    }
    applyRelayFee(fee_to_sender, currentAmount, currentBalance) {
        if (fee_to_sender == 0n) {
            return {
                relayData: None(),
                currentAmount,
                currentBalance,
            };
        }
        const relayData = Some({ fee_to_sender });
        const { L: L_fee, R: R_fee } = createCipherBalance(starkPointToProjectivePoint(this.publicKey), fee_to_sender, FEE_CAIRO_STRING);
        return {
            relayData,
            currentAmount: currentAmount - fee_to_sender,
            currentBalance: {
                L: currentBalance.L.subtract(L_fee),
                R: currentBalance.R.subtract(R_fee),
            },
        };
    }
    _diffieHellman(other) {
        const otherPublicKey = pubKeyBase58ToHex(other);
        return ECDiffieHellman(this.pk, otherPublicKey);
    }
    async computeAEHintForPubKey(amount, nonce, pubKey) {
        const keyAEBal = await this.deriveSymmetricKeyForPubKey(nonce, pubKey);
        return bytesToAEHint(new AEChaCha(keyAEBal).encryptBalance(amount));
    }
    async computeAEHintForSelf(amount, nonce) {
        return this.computeAEHintForPubKey(amount, nonce, this.publicKey);
    }
    async decryptAEHintForPubKey(aeHint, accountNonce, other) {
        return decryptAEHint(this.pk, aeHint, accountNonce, other, this.Tongo.address);
    }
    async deriveSymmetricKeyForPubKey(nonce, other) {
        const sharedSecret = ECDiffieHellman(this.pk, pubKeyAffineToHex(other));
        return deriveSymmetricEncryptionKey({
            contractAddress: this.Tongo.address,
            nonce,
            secret: sharedSecret,
        });
    }
    async _fetchCipherAccountState() {
        const { nonce, balanceCipher, aeBalance, pendingCipher } = await this.rawState();
        const hint = aeBalance ? await this.decryptAEBalance(aeBalance, nonce) : undefined;
        const balance = this.decryptCipherBalance(balanceCipher, hint);
        const pending = this.decryptCipherBalance(pendingCipher);
        return { nonce, balance, balanceCipher, pending, pendingCipher };
    }
    static parseAccountState(state) {
        const { balance, pending, audit, nonce, ae_balance, ae_audit_balance } = state;
        let auditCipher;
        if (audit.isSome()) {
            auditCipher = parseCipherBalance(audit.unwrap());
        }
        return {
            balanceCipher: parseCipherBalance(balance),
            pendingCipher: parseCipherBalance(pending),
            auditCipher,
            nonce: num.toBigInt(nonce),
            aeBalance: ae_balance.isSome()
                ? parseAEBalance(ae_balance.unwrap())
                : undefined,
            aeAuditBalance: ae_audit_balance.isSome()
                ? parseAEBalance(ae_audit_balance.unwrap())
                : undefined,
        };
    }
    async _createFundOperation(state, { amount, prefix_data }) {
        const { inputs, proof, newBalance } = proveFund(this.pk, amount, state.balance, state.balanceCipher, state.nonce, prefix_data);
        const auditor = await this.auditorKey();
        const auditPart = await this.createAuditPart(amount + state.balance, state.nonce, newBalance, prefix_data, auditor);
        const hint = await this.computeAEHintForSelf(amount + state.balance, state.nonce + 1n);
        const nextState = {
            nonce: state.nonce + 1n,
            balanceCipher: newBalance,
            balance: state.balance + amount,
            pendingCipher: state.pendingCipher,
            pending: state.pending,
        };
        return new FundOperation({
            to: inputs.y,
            amount,
            hint,
            proof,
            auditPart,
            Tongo: this.Tongo,
            nextState,
            prefix_data,
        });
    }
    async _createTransferOperation(state, { prefix_data, bitSize, transferDetails, }) {
        const { nonce, balanceCipher: initialBalance, balance: initialAmount } = state;
        const { amount, to } = transferDetails;
        const feeToSender = transferDetails.feeToSender || 0n;
        let externalData = None();
        const { relayData, currentAmount: adjustedAmount, currentBalance: adjustedBalance, } = this.applyRelayFee(feeToSender, initialAmount, initialBalance);
        if (transferDetails.toTongo) {
            const toTongo = transferDetails.toTongo;
            if (toTongo == this.Tongo.address) {
                throw new Error("Cannot make an external transfer to same tongo");
            }
            externalData = Some({
                toTongo,
                auditPart: None(),
            });
        }
        let transferOptions = Some({ relayData, externalData });
        const serializedData = serializeTransferOptions(transferOptions);
        const { inputs, proof, newBalance } = proveTransfer(this.pk, starkPointToProjectivePoint(to), adjustedAmount, amount, adjustedBalance, nonce, bitSize, prefix_data, serializedData);
        const balance_left = adjustedAmount - amount;
        const hintTransfer = await this.computeAEHintForPubKey(amount, nonce, to);
        const hintLeftover = await this.computeAEHintForSelf(balance_left, nonce + 1n);
        const transferBalanceSelfCipher = parseCipherBalance(inputs.transferBalanceSelf);
        const auditor = await this.auditorKey();
        const auditPart = await this.createAuditPart(balance_left, nonce, newBalance, prefix_data, auditor);
        const auditPartTransfer = await this.createAuditPart(amount, nonce, transferBalanceSelfCipher, prefix_data, auditor);
        if (externalData.isSome()) {
            const toTongo = externalData.unwrap().toTongo;
            //TODO: Check with the vault that it is a valid tongo contract
            const Tongo2 = new Contract({
                abi: tongoAbi,
                address: num.toHex(toTongo),
                providerOrAccount: this.provider,
            }).typedv2(tongoAbi);
            const auditorTarget = await Tongo2.auditor_key();
            const prefix_data_target = {
                ...prefix_data,
                tongo_address: toTongo,
            };
            const auditTarget = await this.createAuditPart(amount, nonce, transferBalanceSelfCipher, prefix_data_target, auditorTarget);
            const external = {
                toTongo,
                auditPart: auditTarget,
            };
            externalData = Some(external);
            transferOptions = Some({ relayData, externalData });
        }
        const nextState = {
            nonce: nonce + 1n,
            balanceCipher: newBalance,
            balance: adjustedAmount - amount,
            pendingCipher: state.pendingCipher,
            pending: state.pending,
        };
        return new TransferOperation({
            from: inputs.from,
            to: inputs.to,
            feeToSender,
            transferBalance: inputs.transferBalance,
            transferBalanceSelf: inputs.transferBalanceSelf,
            auxiliarCipher: inputs.auxiliarCipher,
            auxiliarCipher2: inputs.auxiliarCipher2,
            hintTransfer,
            hintLeftover,
            proof,
            auditPart,
            auditPartTransfer,
            transferOptions,
            Tongo: this.Tongo,
            nextState,
            prefix_data,
        });
    }
    async _createRagequitOperation(state, { prefix_data, ragequitDetails, }) {
        const { nonce, balanceCipher: initialBalance, balance: initialAmount } = state;
        const to = ragequitDetails.to;
        const feeToSender = ragequitDetails.feeToSender || 0n;
        const { relayData, currentAmount: adjustedAmount, currentBalance: adjustedBalance, } = this.applyRelayFee(feeToSender, initialAmount, initialBalance);
        const ragequitOptions = Some({ relayData });
        const serializedData = serializeRagequitOptions(ragequitOptions);
        const { inputs, proof, newBalance } = proveRagequit(this.pk, adjustedBalance, nonce, BigInt(to), adjustedAmount, prefix_data, serializedData);
        const auditor = await this.auditorKey();
        const auditPart = await this.createAuditPart(0n, nonce, newBalance, prefix_data, auditor);
        const hint = await this.computeAEHintForSelf(0n, nonce + 1n);
        const nextState = {
            nonce: nonce + 1n,
            balanceCipher: newBalance,
            balance: 0n,
            pendingCipher: state.pendingCipher,
            pending: state.pending,
        };
        return new RagequitOperation({
            from: inputs.y,
            to: inputs.to,
            amount: inputs.amount,
            feeToSender,
            hint,
            proof,
            ragequitOptions,
            Tongo: this.Tongo,
            auditPart,
            nextState,
            prefix_data,
        });
    }
    async _createRolloverOperation(state, prefix_data) {
        const { nonce, balanceCipher, pendingCipher, balance, pending } = state;
        const { inputs, proof } = proveRollover(this.pk, nonce, prefix_data);
        const nextBalance = {
            L: balanceCipher.L.add(pendingCipher.L),
            R: balanceCipher.R.add(pendingCipher.R),
        };
        const hint = await this.computeAEHintForSelf(pending + balance, nonce + 1n);
        const nextState = {
            nonce: nonce + 1n,
            balanceCipher: nextBalance,
            balance: balance + pending,
            pendingCipher: createCipherBalance(starkPointToProjectivePoint(this.publicKey), 0n, 1n),
            pending: 0n,
        };
        return new RollOverOperation({
            to: inputs.y,
            proof,
            Tongo: this.Tongo,
            hint,
            nextState,
            prefix_data,
        });
    }
    async _createWithdrawOperation(state, { prefix_data, bitSize, withdrawDetails, }) {
        const { nonce, balanceCipher: initialBalance, balance: initialAmount } = state;
        const { to, amount } = withdrawDetails;
        const feeToSender = withdrawDetails.feeToSender || 0n;
        const { relayData, currentAmount: adjustedAmount, currentBalance: adjustedBalance, } = this.applyRelayFee(feeToSender, initialAmount, initialBalance);
        const withdrawOptions = Some({ relayData });
        const serializedData = serializeWithdrawOptions(withdrawOptions);
        const { inputs, proof, newBalance } = proveWithdraw(this.pk, adjustedAmount, amount, BigInt(to), adjustedBalance, nonce, bitSize, prefix_data, serializedData);
        const hint = await this.computeAEHintForSelf(adjustedAmount - amount, nonce + 1n);
        const auditor = await this.auditorKey();
        const auditPart = await this.createAuditPart(adjustedAmount - amount, nonce, newBalance, prefix_data, auditor);
        const nextState = {
            nonce: nonce + 1n,
            balanceCipher: newBalance,
            balance: adjustedAmount - amount,
            pendingCipher: state.pendingCipher,
            pending: state.pending,
        };
        return new WithdrawOperation({
            from: inputs.y,
            to: inputs.to,
            amount: inputs.amount,
            feeToSender,
            auxiliarCipher: inputs.auxiliarCipher,
            hint,
            proof,
            auditPart,
            Tongo: this.Tongo,
            withdrawOptions,
            nextState,
            prefix_data,
        });
    }
}
//# sourceMappingURL=account.js.map