import { ProjectivePoint as SheProjectivePoint, } from "@fatsolutions/she";
import { base58 } from "@scure/base";
import { bytesToHex } from "@noble/hashes/utils";
import { poseidonHashMany } from "@scure/starknet";
import { GENERATOR } from "./constants.js";
export const ProjectivePoint = SheProjectivePoint;
/**
 * This function coincides with cairo compute_prefix
 * @param seq - Array of bigint values to hash
 * @returns The computed prefix hash
 */
export function compute_prefix(seq) {
    return poseidonHashMany(seq);
}
/**
 * Converts a StarkPoint to a ProjectivePoint. This operation could throw an error
 * if the x and y are not coordinates from a point in the starknet curve.
 * @param {PubKey} param0 - The public key with x and y coordinates
 * @returns {ProjectivePoint} The resulting ProjectivePoint
 * @throws {Error} If the coordinates are not valid points on the starknet curve
 */
export function starkPointToProjectivePoint({ x, y }) {
    return new ProjectivePoint(BigInt(x), BigInt(y), 1n);
}
/**
 * Converts the ProjectivePoint to a StarkPoint
 * @param {ProjectivePoint} p - The ProjectivePoint to convert
 * @returns {StarkPoint} The resulting StarkPoint
 */
export function projectivePointToStarkPoint(p) {
    const pAffine = p.toAffine();
    return { x: pAffine.x, y: pAffine.y };
}
/**
 * Constructs a public key from a given private key.
 * @param {bigint} privateKey - The private key to derive from
 * @returns {PubKey} The derived public key
 */
export function derivePublicKey(privateKey) {
    return projectivePointToStarkPoint(GENERATOR.multiply(privateKey));
}
/**
 * Converts a public key to hex format (assumes compressed format)
 * @param {PubKey} pub - The public key to convert
 * @returns {string} The hex representation of the public key
 */
export function pubKeyAffineToHex(pub) {
    const point = starkPointToProjectivePoint(pub);
    return bytesToHex(point.toRawBytes(true));
}
/**
 * Converts a public key to base58 format (assumes compressed format)
 * @param {PubKey} pub - The public key to convert
 * @returns {TongoAddress} The base58 representation as a TongoAddress
 */
export function pubKeyAffineToBase58(pub) {
    const point = starkPointToProjectivePoint(pub);
    return base58.encode(point.toRawBytes(true));
}
/**
 * Converts a base58 string to affine coordinates (assumes compressed format)
 * @param {string} b58string - The base58 encoded string
 * @returns {{x: bigint, y: bigint}} The affine coordinates
 */
export function pubKeyBase58ToAffine(b58string) {
    const bytes = base58.decode(b58string);
    return ProjectivePoint.fromHex(bytesToHex(bytes));
}
/**
 * Converts a base58 string to hex format (assumes compressed format)
 * @param {string} b58string - The base58 encoded string
 * @returns {string} The hex representation
 */
export function pubKeyBase58ToHex(b58string) {
    const bytes = base58.decode(b58string);
    return bytesToHex(bytes);
}
/**
 * Converts a pair of StarkPoints to a CipherBalance.
 * @param {object} param0 - Object containing L and R StarkPoints
 * @param {StarkPoint} param0.L - The left point
 * @param {StarkPoint} param0.R - The right point
 * @returns {CipherBalance} The resulting CipherBalance
 */
export function parseCipherBalance({ L, R }) {
    return {
        L: starkPointToProjectivePoint(L),
        R: starkPointToProjectivePoint(R),
    };
}
/**
 * Converts a CipherBalance (ProjectivePoint pair) to its StarkPoint (affine) form.
 * @param {CipherBalance} cb - The cipher balance to convert
 * @returns {StarkCipherBalance} The StarkPoint counterpart
 */
export function cipherToStark(cb) {
    return {
        L: projectivePointToStarkPoint(cb.L),
        R: projectivePointToStarkPoint(cb.R),
    };
}
//# sourceMappingURL=types.js.map