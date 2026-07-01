import { Account as TongoSdkAccount } from '@fatsolutions/tongo-sdk';
import type { Call } from 'starknet';
import type { Address } from '@phantomlayer/core';

export interface TongoConfidentialConfig {
  /** The agent's Tongo private key (controls the confidential balance). */
  tongoPrivateKey: string;
  /** Deployed Tongo pool contract for the asset, on this chain. */
  tongoAddress: Address;
  /** Starknet account address that signs/pays the Tongo operations. */
  senderAddress: Address;
  /** RPC URL — the Tongo SDK builds its own internal provider from this string. */
  rpcUrl: string;
}

const CONFIDENTIAL_BALANCE_BITS = 32n;

function asCalls(value: unknown): Call[] {
  return (Array.isArray(value) ? value : [value]) as Call[];
}

/** A Tongo operation's full call sequence: its ERC-20 approve (if any) plus the operation call(s). */
function operationCalls(operation: unknown): Call[] {
  const op = operation as { approve?: Call; toCalldata(): unknown };
  const approve = op.approve ? [op.approve] : [];
  return [...approve, ...asCalls(op.toCalldata())];
}

/**
 * Real confidential layer for PhantomLayer, backed by Tongo (ElGamal + zero-knowledge over the
 * Stark curve). All proofs are generated client-side by the Tongo SDK; these helpers return plain
 * Starknet calls that compose with AgentShield in a single multicall:
 *   withdraw(to=AgentShield) → AgentShield.execute_swap → fund(received).
 *
 * Tongo's confidential balance is a fixed 32-bit counter of "units", where each unit represents
 * `rate` wei of the underlying ERC-20 (the pool's on-chain `fund`/`withdraw` multiply by `rate`
 * for the real token transfer). This wrapper works in wei throughout — matching the rest of
 * PhantomLayer — and converts to/from units internally.
 *
 * Uses the vendored Tongo SDK (master build) — the npm 1.5.0 release has a broken proof-prefix
 * ordering. A confidential fund verified on Sepolia with this path; see DEPLOYMENTS.md.
 */
export class TongoConfidential {
  private readonly account: TongoSdkAccount;
  private readonly sender: Address;
  private rateCache: bigint | undefined;

  constructor(config: TongoConfidentialConfig) {
    this.sender = config.senderAddress;
    // The Tongo SDK accepts an RPC URL string and builds its own (internally-versioned) provider;
    // passing a cross-version provider object breaks its constructor.
    this.account = new TongoSdkAccount(config.tongoPrivateKey, config.tongoAddress, config.rpcUrl);
  }

  /** Base58-encoded Tongo public address for this account. */
  get tongoAddress(): string {
    return this.account.tongoAddress();
  }

  get publicKey(): { x: bigint; y: bigint } {
    const key = this.account.publicKey;
    return { x: BigInt(key.x), y: BigInt(key.y) };
  }

  /** The pool's conversion rate: each confidential unit represents `rate` wei. */
  async rate(): Promise<bigint> {
    this.rateCache ??= await this.account.rate();
    return this.rateCache;
  }

  /** Converts a wei amount to confidential units, requiring an exact, in-range multiple. */
  async toUnits(weiAmount: bigint): Promise<bigint> {
    const rate = await this.rate();
    if (weiAmount % rate !== 0n) {
      throw new Error(`amount ${weiAmount} is not a multiple of the pool rate (${rate})`);
    }
    const units = weiAmount / rate;
    if (units >= 2n ** CONFIDENTIAL_BALANCE_BITS) {
      throw new Error(`amount ${weiAmount} exceeds the pool's 32-bit balance cap (rate ${rate})`);
    }
    return units;
  }

  /** Rounds a wei amount down to the nearest exact multiple of the pool's rate. */
  async roundDown(weiAmount: bigint): Promise<bigint> {
    const rate = await this.rate();
    return (weiAmount / rate) * rate;
  }

  /** Calls that deposit `weiAmount` of the public ERC-20 into the confidential balance. */
  async fundCalls(weiAmount: bigint): Promise<Call[]> {
    const amount = await this.toUnits(weiAmount);
    return operationCalls(await this.account.fund({ amount, sender: this.sender }));
  }

  /** Calls that withdraw `weiAmount` from the confidential balance to public address `to`. */
  async withdrawCalls(to: Address, weiAmount: bigint): Promise<Call[]> {
    const amount = await this.toUnits(weiAmount);
    return operationCalls(await this.account.withdraw({ to, amount, sender: this.sender }));
  }

  /** Applies any pending confidential balance (required before spending freshly received notes). */
  async rolloverCalls(): Promise<Call[]> {
    return operationCalls(await this.account.rollover({ sender: this.sender }));
  }
}
