import { describe, expect, it } from 'vitest';
import { buildExecuteSwapCalldata, byteArrayToFelts, u256ToFelts } from './calls.js';

describe('calldata serialization', () => {
  it('splits u256 into low/high felts', () => {
    expect(u256ToFelts(1n)).toEqual(['1', '0']);
    expect(u256ToFelts(1n << 128n)).toEqual(['0', '1']);
  });

  it('encodes a ByteArray with no full words', () => {
    // "abc" -> 0x616263 = 6382179, remainder 3 bytes, zero full words
    expect(byteArrayToFelts('abc')).toEqual(['0', '6382179', '3']);
    expect(byteArrayToFelts('')).toEqual(['0', '0', '0']);
  });

  it('lays out the execute_swap calldata in ABI order', () => {
    const calldata = buildExecuteSwapCalldata({
      swap: {
        agentId: '0x1',
        tokenIn: '0xaaa',
        tokenOut: '0xbbb',
        amountIn: 1000n,
        minOut: 900n,
      },
      swapCalldata: ['0x5'],
      recipient: '0x9',
      auditBlob: ['0x7', '0x8'],
    });

    // agentId, tokenIn, tokenOut, amountIn(lo,hi), minOut(lo,hi),
    // swap_calldata(len, ...), recipient, audit_blob(len, ...)
    expect(calldata.slice(0, 5)).toEqual(['1', '2730', '3003', '1000', '0']);
    expect(calldata.slice(7)).toEqual(['1', '5', '9', '2', '7', '8']);
  });
});
