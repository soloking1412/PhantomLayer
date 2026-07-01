import { compute_challenge } from "@fatsolutions/she";
import { poe } from "@fatsolutions/she/protocols";
import { createCipherBalance } from "../utils.js";
import { auxCodec } from "../abi/abi.types.js";
import { GENERATOR as g } from "../constants.js";
import { compute_prefix, projectivePointToStarkPoint, starkPointToProjectivePoint, } from "../types.js";
// cairo string 'fund'
export const FUND_CAIRO_STRING = 1718972004n;
/**
 * Computes the prefix by hashing some public inputs.
 * @param {InputsFund} inputs - The fund operation inputs
 * @returns {bigint} The computed prefix hash
 */
function prefixFund(inputs) {
    const _serialized = auxCodec.encode("tongo::structs::operations::fund::InputsFund", inputs);
    const seq = [FUND_CAIRO_STRING, ..._serialized.map(BigInt)];
    return compute_prefix(seq);
}
export function proveFund(private_key, amount_to_fund, initial_balance, initial_cipherbalance, nonce, prefix_data) {
    const x = private_key;
    const y = g.multiply(x);
    const { L: L0, R: R0 } = initial_cipherbalance;
    //this is to assert that storedbalance is an encryption of the balance amount
    const g_b = L0.subtract(R0.multiplyUnsafe(x));
    const temp = g.multiplyUnsafe(initial_balance);
    if (!g_b.equals(temp)) {
        throw new Error("storedBalance is not an encryption of balance");
    }
    const inputs = {
        y: projectivePointToStarkPoint(y),
        nonce,
        amount: amount_to_fund,
        prefix_data,
    };
    const prefix = prefixFund(inputs);
    const { proof: { s: sx, A: Ax }, } = poe.prove(x, g, prefix);
    // compute the cipherbalance that `y` will have after the fund operation
    const cipher = createCipherBalance(y, amount_to_fund, FUND_CAIRO_STRING); // we use FUND_CAIRO_STRING as a random number
    const newBalance = { L: L0.add(cipher.L), R: R0.add(cipher.R) };
    return { inputs, proof: { sx, Ax }, newBalance };
}
/**
 * Verify the fund operation. In this case, users have to only show the knowledge
 * of the private key.
 *
 * Complexity:
 * - EC_MUL: 2
 * - EC_ADD: 1
 *
 * @param {InputsFund} inputs - The fund operation inputs
 * @param {ProofOfFund} proof - The proof to verify
 */
export function verifyFund(inputs, proof) {
    const prefix = prefixFund(inputs);
    const c = compute_challenge(prefix, [proof.Ax]);
    if (poe._verify(starkPointToProjectivePoint(inputs.y), g, proof.Ax, c, proof.sx) === false) {
        throw new Error("verifyFund failed");
    }
}
//# sourceMappingURL=fund.js.map