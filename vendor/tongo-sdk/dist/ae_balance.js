import { xchacha20poly1305 } from "@noble/ciphers/chacha.js";
import { bytesToNumberBE, numberToBytesBE } from "@noble/ciphers/utils.js";
import { randomBytes } from "@noble/ciphers/webcrypto.js";
import { uint256 } from "starknet";
import { castBigInt, isUint256 } from "./utils.js";
import { pubKeyAffineToHex } from "./types.js";
import { deriveSymmetricEncryptionKey, ECDiffieHellman } from "./key.js";
export function AEHintToBytes({ ciphertext, nonce }) {
    return {
        ciphertext: numberToBytesBE(BigInt(ciphertext), 64),
        nonce: numberToBytesBE(castBigInt(nonce), 24), // XChaCha20 nonce is 192 bits
    };
}
export function bytesToAEHint({ ciphertext, nonce }) {
    return {
        ciphertext: bytesToNumberBE(ciphertext),
        nonce: bytesToNumberBE(nonce),
    };
}
export function parseAEBalance({ ciphertext, nonce }) {
    let parsedNonce;
    if (isUint256(nonce)) {
        parsedNonce = uint256.uint256ToBN(nonce);
    }
    else {
        parsedNonce = BigInt(nonce);
    }
    return {
        ciphertext: BigInt(ciphertext),
        nonce: parsedNonce,
    };
}
// TODO: we should split this class into a AECipher class that returns
// AEBalance's. This way we can decouple the cipher from the balance and its
// serialization.
export class AEChaCha {
    key;
    constructor(key) {
        this.key = key;
        // 32 B
        if (this.key.length != 32) {
            throw new Error(`Key length must be exactly 32 Bytes, not '${this.key.length}'`);
        }
    }
    encryptBalance(balance) {
        // TODO: refactor AEChaCha to support different bit sizes. (Max is 384 bits)
        if (balance >= 2n ** 32n) {
            throw new Error("This implementation only supports 32 bit balances");
        }
        // 512  = ( TAG [128] ) + ( NOISE/RESERVED [352] ) + ( BALANCE [32] )
        // 64 B      16 B                44 B                    4 B
        const nonce = randomBytes(24); // XChaCha20 uses random nonces of 192 bit = 24 B
        const noise = randomBytes(3 * 16 - 4);
        const numberBytes = numberToBytesBE(balance, 48);
        numberBytes.set(noise, 0);
        const chacha = xchacha20poly1305(this.key, nonce);
        const ciphertext = chacha.encrypt(numberBytes);
        return { ciphertext, nonce };
    }
    decryptBalance({ ciphertext, nonce }) {
        const chacha = xchacha20poly1305(this.key, nonce);
        try {
            const plaintext = chacha.decrypt(ciphertext);
            if (plaintext.length !== 48)
                throw new Error("Malformed plaintext");
            return bytesToNumberBE(plaintext.slice(44, 48));
        }
        catch {
            throw new Error("Malformed or tampered ciphertext");
        }
    }
}
export async function decryptAEHint(pk, hint, accountNonce, otherPubKey, contractAddress) {
    const sharedSecret = ECDiffieHellman(pk, pubKeyAffineToHex(otherPubKey));
    const keyAEHint = await deriveSymmetricEncryptionKey({
        contractAddress,
        nonce: accountNonce,
        secret: sharedSecret,
    });
    const { ciphertext, nonce: cipherNonce } = AEHintToBytes(hint);
    return new AEChaCha(keyAEHint).decryptBalance({ ciphertext, nonce: cipherNonce });
}
//# sourceMappingURL=ae_balance.js.map