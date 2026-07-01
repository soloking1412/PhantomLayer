import { GeneralPrefixData, ProjectivePoint } from "../types.js";
import { AuxAbiType } from "../abi/abi.types.js";
export declare const ROLLOVER_CAIRO_STRING = 8245928655720965490n;
/**
 * Public inputs of the verifier for the rollover operation.
 * @property {PubKey} y - The Tongo account to rollover
 * @property {bigint} nonce - The nonce of the Tongo account
 * @property {GeneralPrefixData} prefix_data - General prefix data for the operation
 */
export type InputsRollover = AuxAbiType<"tongo::structs::operations::rollover::InputsRollOver">;
/**
 * Proof of rollover operation.
 * @interface ProofOfRollover
 * @property {ProjectivePoint} Ax - The proof point Ax
 * @property {bigint} sx - The proof scalar sx
 */
export interface ProofOfRollover {
    Ax: ProjectivePoint;
    sx: bigint;
}
export declare function proveRollover(private_key: bigint, nonce: bigint, prefix_data: GeneralPrefixData): {
    inputs: InputsRollover;
    proof: ProofOfRollover;
};
/**
 * Verify the rollover operation. In this case, users have to only show the knowledge
 * of the private key.
 *
 * Complexity:
 * - EC_MUL: 2
 * - EC_ADD: 1
 *
 * @param {InputsRollover} inputs - The rollover operation inputs
 * @param {ProofOfRollover} proof - The proof to verify
 * @returns {boolean} True if the proof is valid, false otherwise
 */
export declare function verifyRollover(inputs: InputsRollover, proof: ProofOfRollover): void;
