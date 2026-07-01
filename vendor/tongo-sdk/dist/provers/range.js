import { range } from "@fatsolutions/she/protocols";
import { GENERATOR as g, SECONDARY_GENERATOR as h } from "../constants.js";
export function generateRangeProof(amount, bit_size, randomness, initial_prefix) {
    const { inputs, proofs, r } = range.prove(amount, bit_size, g, h, randomness, initial_prefix);
    const range_without_prefix = proofs.proofs.map(({ prefix, ...item }) => item);
    const range_proof = { commitments: inputs.commitments, proofs: range_without_prefix };
    return { r, range: range_proof };
}
export function verifyRangeProof(range_proof, bit_size, initial_prefix) {
    const inputs = {
        g1: g,
        g2: h,
        bit_size,
        commitments: range_proof.commitments,
    };
    const proof = {
        proofs: range_proof.proofs.map((pi, index) => ({
            ...pi,
            prefix: initial_prefix + BigInt(index),
        })),
    };
    const V = range.verify(inputs, proof);
    return V;
}
//# sourceMappingURL=range.js.map