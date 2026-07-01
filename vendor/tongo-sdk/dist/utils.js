import { bytesToHex } from "@noble/hashes/utils";
import { CairoOption, CairoOptionVariant, num, uint256 } from "starknet";
import { GENERATOR } from "./constants.js";
import { projectivePointToStarkPoint } from "./types.js";
export function bytesOrNumToBigInt(x) {
    if (x instanceof Uint8Array) {
        return num.toBigInt("0x" + bytesToHex(x));
    }
    else {
        return num.toBigInt(x);
    }
}
export function isUint256(x) {
    const low = x.low;
    const high = x.high;
    return low !== undefined && high !== undefined;
}
export function castBigInt(x) {
    if (num.isBigNumberish(x)) {
        return num.toBigInt(x);
    }
    else {
        return uint256.uint256ToBN(x);
    }
}
export function toNumber(x) {
    return typeof x === "bigint" ? Number(x) : x;
}
export function createCipherBalance(y, amount, random) {
    if (amount === 0n) {
        const L = y.multiplyUnsafe(random);
        const R = GENERATOR.multiplyUnsafe(random);
        return { L, R };
    }
    const L = GENERATOR.multiply(amount).add(y.multiplyUnsafe(random));
    const R = GENERATOR.multiplyUnsafe(random);
    return { L, R };
}
/**
 * Decipher the given cipher balance with the given secret key.
 * This function has to bruteforce for `b` in `g^b`. It starts at `b = 0` and
 * ends in `b = 2^32`.
 * @param {bigint} x - The secret key
 * @param {ProjectivePoint} L - The left point of the cipher balance
 * @param {ProjectivePoint} R - The right point of the cipher balance
 * @returns {bigint} The deciphered balance
 * @throws {Error} If decryption fails
 * @todo Parametrize bit size
 */
export function decipherBalance(x, L, R) {
    const Rx = R.multiply(x);
    if (Rx.equals(L)) {
        return 0n;
    }
    const g_b = L.subtract(Rx);
    let b = 1n;
    let temp = GENERATOR;
    if (temp.equals(g_b)) {
        return 1n;
    }
    while (b < 2 ** 32) {
        b = b + 1n;
        temp = temp.add(GENERATOR);
        if (temp.equals(g_b)) {
            return b;
        }
    }
    throw new Error("Decryption of Cipherbalance has failed");
}
/**
 * Asserts that the given CipherBalance is a correct encryption for the public
 * key of the given private key x and the given balance.
 * @param {bigint} x - The private key
 * @param {bigint} balance - The expected balance
 * @param {ProjectivePoint} L - The left point of the cipher balance
 * @param {ProjectivePoint} R - The right point of the cipher balance
 * @returns {boolean} True if the assertion passes, false otherwise
 */
export function assertBalance(x, balance, L, R) {
    const Rx = R.multiply(x);
    const g_b = L.subtract(Rx);
    return g_b.equals(GENERATOR.multiplyUnsafe(balance));
}
export function pubKeyFromSecret(secret) {
    return projectivePointToStarkPoint(GENERATOR.multiply(secret));
}
export function Some(data) {
    return new CairoOption(CairoOptionVariant.Some, data);
}
export function None() {
    return new CairoOption(CairoOptionVariant.None);
}
export function erc20ToTongo(erc20Amount, rate) {
    const q = erc20Amount / rate;
    return erc20Amount % rate !== 0n ? q + 1n : q;
}
export function tongoToErc20(tongoAmount, rate) {
    return tongoAmount * rate;
}
//# sourceMappingURL=utils.js.map