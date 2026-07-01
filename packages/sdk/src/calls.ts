import type { ShieldedSwapArgs } from './types.js';

const U128_MASK = (1n << 128n) - 1n;

/** Normalises any felt-ish value to a decimal calldata string. */
export function toFelt(value: string | bigint | number): string {
  return BigInt(value).toString();
}

export function u256ToFelts(value: bigint): [string, string] {
  return [(value & U128_MASK).toString(), (value >> 128n).toString()];
}

/** Serialises a Cairo `ByteArray` (used for ERC-8004 registration URIs). */
export function byteArrayToFelts(text: string): string[] {
  const bytes = new TextEncoder().encode(text);
  const fullWords = Math.floor(bytes.length / 31);
  const data: string[] = [];
  for (let word = 0; word < fullWords; word += 1) {
    let acc = 0n;
    for (let i = 0; i < 31; i += 1) {
      acc = (acc << 8n) | BigInt(bytes[word * 31 + i]!);
    }
    data.push(acc.toString());
  }
  let pending = 0n;
  const remainder = bytes.length - fullWords * 31;
  for (let i = 0; i < remainder; i += 1) {
    pending = (pending << 8n) | BigInt(bytes[fullWords * 31 + i]!);
  }
  return [data.length.toString(), ...data, pending.toString(), remainder.toString()];
}

function spanToFelts(span: string[]): string[] {
  return [span.length.toString(), ...span.map(toFelt)];
}

/** Full calldata for `AgentShield.execute_swap(swap, swap_calldata, recipient, audit_blob)`. */
export function buildExecuteSwapCalldata(args: ShieldedSwapArgs): string[] {
  const { swap, swapCalldata, recipient, auditBlob } = args;
  return [
    toFelt(swap.agentId),
    toFelt(swap.tokenIn),
    toFelt(swap.tokenOut),
    ...u256ToFelts(swap.amountIn),
    ...u256ToFelts(swap.minOut),
    ...spanToFelts(swapCalldata),
    toFelt(recipient),
    ...spanToFelts(auditBlob),
  ];
}
