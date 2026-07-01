import type { Account, Call, RpcProvider } from 'starknet';
import {
  type Address,
  type ContractAddresses,
  type DecryptedAuditEntry,
  type Felt,
  type ShieldedIntent,
} from '@phantomlayer/core';
import { buildExecuteSwapCalldata, byteArrayToFelts, toFelt, u256ToFelts } from './calls.js';
import { encryptAuditRecord, viewingKeyCommitment } from './crypto.js';
import { buildAuditRecord } from './audit.js';
import { fetchDecryptedAuditLog } from './reader.js';
import type { PhantomClientConfig, ShieldedSwapStruct } from './types.js';
import type { RouteProvider } from './routes.js';

export interface RegisterAgentResult {
  agentId: Felt;
  transactionHash: string;
}

export interface ShieldedSwapResult {
  transactionHash: string;
  recordId: number;
  quotedOut: bigint;
  minOut: bigint;
}

/**
 * High-level entrypoint for private agent execution. Wraps account, provider, route provider,
 * and the deployed PhantomLayer addresses behind an intent-oriented API.
 */
export class PhantomClient {
  private readonly account: Account;
  private readonly provider: RpcProvider;
  private readonly addresses: ContractAddresses;
  private readonly routeProvider: RouteProvider;
  private readonly viewingKey: Felt;

  constructor(config: PhantomClientConfig) {
    this.account = config.account;
    this.provider = config.provider;
    this.addresses = config.addresses;
    this.routeProvider = config.routeProvider;
    this.viewingKey = config.viewingKey;
  }

  /** Registers an agent identity, committing the owner's viewing key on-chain. */
  async registerAgent(registrationUri: string): Promise<RegisterAgentResult> {
    const commitment = viewingKeyCommitment(this.viewingKey);
    const { transaction_hash } = await this.account.execute({
      contractAddress: this.addresses.agentRegistry,
      entrypoint: 'register_agent',
      calldata: [...byteArrayToFelts(registrationUri), toFelt(commitment)],
    });
    await this.provider.waitForTransaction(transaction_hash);
    const agentId = await this.readFelt(this.addresses.agentRegistry, 'total_agents');
    return { agentId, transactionHash: transaction_hash };
  }

  /** Applies a complete policy for an agent in one transaction. */
  async configurePolicy(
    agentId: Felt,
    policy: {
      tokens: Address[];
      exchanges: Address[];
      maxAmountIn: { token: Address; amount: bigint }[];
    },
  ): Promise<string> {
    const calls: Call[] = [this.policyCall('set_policy_active', [toFelt(agentId), '1'])];
    for (const token of policy.tokens) {
      calls.push(this.policyCall('set_token_allowed', [toFelt(agentId), toFelt(token), '1']));
    }
    for (const exchange of policy.exchanges) {
      calls.push(this.policyCall('set_exchange_allowed', [toFelt(agentId), toFelt(exchange), '1']));
    }
    for (const limit of policy.maxAmountIn) {
      calls.push(
        this.policyCall('set_max_amount_in', [
          toFelt(agentId),
          toFelt(limit.token),
          ...u256ToFelts(limit.amount),
        ]),
      );
    }
    return this.run(calls);
  }

  /** Authorizes a time-boxed session key for an agent. */
  async addSessionKey(agentId: Felt, session: Address, expiresAt: number): Promise<string> {
    return this.run([
      this.policyCall('add_session_key', [toFelt(agentId), toFelt(session), expiresAt.toString()]),
    ]);
  }

  async revokeSessionKey(agentId: Felt, session: Address): Promise<string> {
    return this.run([this.policyCall('revoke_session_key', [toFelt(agentId), toFelt(session)])]);
  }

  /**
   * Builds (without submitting) the AgentShield `execute_swap` call for an intent. Lets the Tongo
   * flow compose it into one multicall: `withdraw(to=AgentShield) → execute_swap → ...`.
   */
  async buildExecuteSwapCall(
    intent: ShieldedIntent,
    recipient: Address,
  ): Promise<{ call: Call; recordId: number; quotedOut: bigint; minOut: bigint }> {
    const quote = await this.routeProvider.quote(intent);
    const swap: ShieldedSwapStruct = {
      agentId: intent.agentId,
      tokenIn: intent.tokenIn,
      tokenOut: intent.tokenOut,
      amountIn: intent.amountIn,
      minOut: quote.minOut,
    };
    const auditBlob = encryptAuditRecord(
      buildAuditRecord(intent, quote.quotedOut),
      this.viewingKey,
    );
    const recordId = await this.recordCount();
    const call: Call = {
      contractAddress: this.addresses.agentShield,
      entrypoint: 'execute_swap',
      calldata: buildExecuteSwapCalldata({
        swap,
        swapCalldata: quote.swapCalldata,
        recipient,
        auditBlob,
      }),
    };
    return { call, recordId, quotedOut: quote.quotedOut, minOut: quote.minOut };
  }

  /**
   * Routes a swap through avnu under policy + audit. The input token must already sit in
   * AgentShield (delivered by a preceding Tongo withdraw, or a transfer); the net output is sent
   * to `recipient` (e.g. back into the Tongo pool).
   */
  async executeSwap(intent: ShieldedIntent, recipient: Address): Promise<ShieldedSwapResult> {
    const { call, recordId, quotedOut, minOut } = await this.buildExecuteSwapCall(
      intent,
      recipient,
    );
    const transactionHash = await this.run([call]);
    return { transactionHash, recordId, quotedOut, minOut };
  }

  /** Returns the agent owner's decrypted execution history; opaque to everyone else on-chain. */
  async getAuditLog(agentId?: Felt): Promise<DecryptedAuditEntry[]> {
    return fetchDecryptedAuditLog(
      this.provider,
      this.addresses.agentShield,
      this.viewingKey,
      agentId,
    );
  }

  /** Previews whether the configured account could execute this intent under the agent policy. */
  async isAuthorized(intent: ShieldedIntent): Promise<boolean> {
    const authorized = await this.readFelt(this.addresses.policyEngine, 'is_authorized', [
      toFelt(intent.agentId),
      toFelt(this.account.address),
      toFelt(intent.tokenIn),
      toFelt(intent.tokenOut),
      ...u256ToFelts(intent.amountIn),
      toFelt(this.addresses.router),
    ]);
    return BigInt(authorized) !== 0n;
  }

  async recordCount(): Promise<number> {
    return Number(BigInt(await this.readFelt(this.addresses.agentShield, 'record_count')));
  }

  private policyCall(entrypoint: string, calldata: string[]): Call {
    return { contractAddress: this.addresses.policyEngine, entrypoint, calldata };
  }

  private async run(calls: Call[]): Promise<string> {
    const { transaction_hash } = await this.account.execute(calls);
    await this.provider.waitForTransaction(transaction_hash);
    return transaction_hash;
  }

  private async readFelt(
    contractAddress: Address,
    entrypoint: string,
    calldata: string[] = [],
  ): Promise<Felt> {
    const response = await this.provider.callContract({ contractAddress, entrypoint, calldata });
    const result = Array.isArray(response) ? response : (response as { result: string[] }).result;
    return result[0]!;
  }
}
