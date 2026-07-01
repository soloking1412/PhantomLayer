/** 0x-prefixed field element (felt252). */
export type Felt = string;

/** 0x-prefixed Starknet contract address. */
export type Address = string;

/** A single avnu route hop, mirroring the on-chain `Route` layout. */
export interface Route {
  tokenFrom: Address;
  tokenTo: Address;
  exchangeAddress: Address;
  percent: bigint;
  additionalSwapParams: Felt[];
}

/** What an agent wants to execute privately. */
export interface ShieldedIntent {
  agentId: Felt;
  tokenIn: Address;
  tokenOut: Address;
  amountIn: bigint;
  minOut: bigint;
}

/** Plaintext audit entry, encrypted under the owner's viewing key before it ever leaves the SDK. */
export interface AuditRecord {
  agentId: Felt;
  tokenIn: Address;
  tokenOut: Address;
  amountIn: string;
  amountOut: string;
  timestamp: number;
}

/** An audit entry resolved from chain and decrypted with the viewing key. */
export interface DecryptedAuditEntry extends AuditRecord {
  recordId: number;
}

export type NetworkName = 'devnet' | 'sepolia' | 'mainnet';

/** Addresses of the deployed PhantomLayer stack on a given network. */
export interface ContractAddresses {
  agentRegistry: Address;
  policyEngine: Address;
  agentShield: Address;
  router: Address;
}
