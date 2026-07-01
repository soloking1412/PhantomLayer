import { describe, expect, it } from 'vitest';
import { shieldedIntentSchema } from './intent.js';

describe('shieldedIntentSchema', () => {
  it('coerces amounts to bigint and agentId to a decimal string', () => {
    const parsed = shieldedIntentSchema.parse({
      agentId: '0x5',
      tokenIn: '0xaaa',
      tokenOut: '0xbbb',
      amountIn: '1000',
      minOut: 900,
    });
    expect(parsed.agentId).toBe('5');
    expect(parsed.amountIn).toBe(1000n);
    expect(parsed.minOut).toBe(900n);
  });

  it('rejects non-positive amounts', () => {
    expect(() =>
      shieldedIntentSchema.parse({
        agentId: '1',
        tokenIn: '0xa',
        tokenOut: '0xb',
        amountIn: '0',
        minOut: '1',
      }),
    ).toThrow();
  });

  it('rejects malformed felt addresses', () => {
    expect(() =>
      shieldedIntentSchema.parse({
        agentId: '1',
        tokenIn: 'not-a-felt',
        tokenOut: '0xb',
        amountIn: '1',
        minOut: '1',
      }),
    ).toThrow();
  });
});
