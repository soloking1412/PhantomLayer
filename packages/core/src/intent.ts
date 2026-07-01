import { z } from 'zod';

const felt = z.string().regex(/^0x[0-9a-fA-F]+$/, 'expected a 0x-prefixed felt');

const amount = z
  .union([z.string(), z.number(), z.bigint()])
  .transform((value) => BigInt(value))
  .refine((value) => value > 0n, 'amount must be positive');

const agentId = z
  .union([z.string(), z.number(), z.bigint()])
  .transform((value) => BigInt(value).toString());

/** Runtime schema for a shielded swap intent, used to validate untrusted MCP/API input. */
export const shieldedIntentSchema = z.object({
  agentId,
  tokenIn: felt,
  tokenOut: felt,
  amountIn: amount,
  minOut: amount,
});

export type ShieldedIntentInput = z.input<typeof shieldedIntentSchema>;
