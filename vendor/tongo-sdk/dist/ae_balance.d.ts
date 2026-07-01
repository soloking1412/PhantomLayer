import { TongoAbiType } from "./abi/abi.types.js";
import { PubKey } from "./types.js";
/**
 * The AEBalance represents a simetrically encrypted balance using authenticated
 * encryption. This type represents the upstream values found in the
 * contract, which are stored as numbers, although they must be interpreted
 * as bytes. (ciphertext: Cairo.U512, nonce: Cairo.U256)
 */
export type AEBalance = TongoAbiType<"tongo::structs::aecipher::AEBalance">;
export interface AEBalanceBytes {
    ciphertext: Uint8Array;
    nonce: Uint8Array;
}
export declare function AEHintToBytes({ ciphertext, nonce }: AEBalance): AEBalanceBytes;
export declare function bytesToAEHint({ ciphertext, nonce }: AEBalanceBytes): AEBalance;
export declare function parseAEBalance({ ciphertext, nonce }: AEBalance): {
    ciphertext: bigint;
    nonce: bigint;
};
export declare class AEChaCha {
    readonly key: Uint8Array;
    constructor(key: Uint8Array);
    encryptBalance(balance: bigint): AEBalanceBytes;
    decryptBalance({ ciphertext, nonce }: AEBalanceBytes): bigint;
}
export declare function decryptAEHint(pk: bigint, hint: AEBalance, accountNonce: bigint, otherPubKey: PubKey, contractAddress: string): Promise<bigint>;
