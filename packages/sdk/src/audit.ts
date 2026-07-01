import { hash } from 'starknet';
import type { AuditRecord, Felt, ShieldedIntent } from '@phantomlayer/core';

export const SHIELDED_SWAP_EVENT = 'ShieldedSwapExecuted';
export const SHIELDED_SWAP_EVENT_KEY = hash.getSelectorFromName(SHIELDED_SWAP_EVENT);

export function buildAuditRecord(
  intent: ShieldedIntent,
  amountOut: bigint,
  timestamp: number = Date.now(),
): AuditRecord {
  return {
    agentId: intent.agentId,
    tokenIn: intent.tokenIn,
    tokenOut: intent.tokenOut,
    amountIn: intent.amountIn.toString(),
    amountOut: amountOut.toString(),
    timestamp,
  };
}

export interface RawShieldedSwapEvent {
  recordId: number;
  auditBlob: Felt[];
}

/**
 * Decodes a `ShieldedSwapExecuted` event. Layout: `keys = [selector, record_id]`,
 * `data = [blob_len, ...blob]`.
 */
export function parseShieldedSwapEvent(keys: Felt[], data: Felt[]): RawShieldedSwapEvent {
  const blobLen = Number(BigInt(data[0]!));
  return {
    recordId: Number(BigInt(keys[1]!)),
    auditBlob: data.slice(1, 1 + blobLen),
  };
}
