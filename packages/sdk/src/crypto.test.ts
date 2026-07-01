import { describe, expect, it } from 'vitest';
import type { AuditRecord } from '@phantomlayer/core';
import { decryptAuditRecord, encryptAuditRecord, generateViewingKey } from './crypto.js';

const record: AuditRecord = {
  agentId: '1',
  tokenIn: '0xaaa',
  tokenOut: '0xbbb',
  amountIn: '1000000000000000000',
  amountOut: '995000000000000000',
  timestamp: 1_718_000_000,
};

describe('viewing-key audit crypto', () => {
  it('round-trips a record through the owner key', () => {
    const key = generateViewingKey();
    const blob = encryptAuditRecord(record, key);
    expect(decryptAuditRecord(blob, key)).toEqual(record);
  });

  it('returns null for a blob not encrypted to this key', () => {
    const blob = encryptAuditRecord(record, generateViewingKey());
    expect(decryptAuditRecord(blob, generateViewingKey())).toBeNull();
  });
});
