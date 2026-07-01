# @phantomlayer/core

Shared types and the `ShieldedIntent` runtime schema used by both the SDK and the MCP server —
the single source of truth for what a private swap request looks like.

- `ShieldedIntent`, `ContractAddresses`, `AuditRecord`, `DecryptedAuditEntry` — shared types.
- `shieldedIntentSchema` (zod) — validates untrusted input (MCP tool calls, API bodies) and
  coerces `agentId`/amounts to the right runtime types before they reach the SDK.

No side effects, no network calls, no dependency on `starknet` beyond hashing utilities. Built
with `tsup` to a single ESM bundle.
