# PhantomLayer

**The private execution membrane for autonomous AI agents on Starknet.**

Autonomous agents now initiate a large and growing share of on-chain transactions. Every one
of them broadcasts its intent to the mempool before it settles, so any watcher can front-run
the agent, copy its positions, or reverse-engineer its strategy. PhantomLayer holds an agent's
balances in a confidential pool, and when the agent trades it withdraws into an anonymizing
contract, routes through _existing_ public liquidity (avnu), and settles the result back into the
pool — so the agent's positions and strategy stay private while liquidity stays unfragmented.

This is the agent-native application of the [STRK20](https://www.starknet.io/blog/private-defi-is-coming-to-starknet/)
anonymizing-contract pattern, with session-key scoping, an on-chain policy engine, ERC-8004
identity, and an owner-only viewing-key audit trail layered on top.

## Architecture

```
Agent (MCP / SDK)
      │
      ▼
Tongo confidential pool ──(1) withdraw(to=AgentShield)──┐  real ZK (ElGamal, @fatsolutions/tongo-sdk)
      ▲                                                  ▼
      └────(3) fund(received) ── AgentShield.execute_swap (policy + audit)
                                       │ (2) forward avnu calldata
                                       ▼
                                 avnu exchange (existing public liquidity)
                                       │
                                 encrypted audit record ─► Owner viewing key ─► Audit dashboard
```

Confidentiality is provided by **Tongo** (real zero-knowledge confidential transfers). AgentShield
is the policy-gated, audited swap executor: it never holds agent balances, only the in-flight swap.

| Package                   | Description                                                              |
| ------------------------- | ------------------------------------------------------------------------ |
| `contracts/`              | Cairo: `AgentShield` (swap executor), `PolicyEngine`, `AgentRegistry`.   |
| `packages/core`           | Shared `ShieldedIntent` schema, types, encoding.                         |
| `packages/sdk`            | PhantomSDK — client, session keys, viewing keys, ERC-8004, avnu routing. |
| `packages/sdk` (`/tongo`) | `TongoConfidential` — real confidential fund/withdraw via Tongo.         |
| `packages/mcp`            | MCP server exposing private execution as agent tools.                    |
| `apps/dashboard`          | Next.js owner audit dashboard (viewing-key decryption).                  |
| `scripts/`                | Declare/deploy + devnet & Sepolia end-to-end runs.                       |

## How a private swap works

1. **withdraw** — `TongoConfidential.withdrawCalls(to=AgentShield, amountIn)` produces a real ZK
   withdraw (proofs generated client-side by `@fatsolutions/tongo-sdk`) that moves the input out of
   the confidential balance into AgentShield.
2. **execute_swap** — AgentShield enforces the agent's policy (session key, allowlists, notional
   cap), forwards avnu's own `multi_route_swap` calldata (from `quoteToCalls`) to the pinned
   exchange after validating its header, takes the protocol fee, and emits an owner-encrypted audit
   blob. Steps 1–2 run in a single multicall.
3. **fund** — the output is re-deposited into the confidential balance with `fundCalls(received)`.

`@fatsolutions/tongo-sdk` pins starknet v8 and is isolated by pnpm from our v10; it only generates
proofs and emits plain `Call` objects, which our v10 account executes.

## avnu routing

AgentShield never reconstructs avnu's route encoding. The SDK asks avnu for the exact
`multi_route_swap` calldata (`getQuotes` → `quoteToCalls`) and AgentShield forwards those bytes
verbatim to the pinned exchange via `call_contract_syscall`, after validating the calldata header
(sell token/amount, buy token, beneficiary, min-out) against the shielded intent.

## Quick start

```bash
# Prerequisites: scarb 2.16, snforge 0.57, node >=20, pnpm 9, starknet-devnet

pnpm install
pnpm run contracts:test       # snforge unit + integration tests
pnpm run build && pnpm run test
# Full local flow on starknet-devnet (start `starknet-devnet --seed 0` first):
pnpm --filter @phantomlayer/scripts e2e:devnet
```

## Testing on Sepolia

Fund a Sepolia account with STRK (https://starknet-faucet.vercel.app/) and fill `scripts/.env`
from `scripts/.env.example`, then:

```bash
# Self-contained full-system run (deploys mock token-in/out + exchange + the stack):
pnpm --filter @phantomlayer/scripts e2e:sepolia

# Deploy wired to the real avnu exchange:
pnpm --filter @phantomlayer/scripts deploy:sepolia

# Real confidential agent swap: Tongo withdraw → avnu swap, in one multicall.
# Needs a deployed Tongo pool for DEMO_TOKEN_IN (TONGO_ADDRESS) + the agent Tongo key.
pnpm --filter @phantomlayer/scripts demo:sepolia
```

`e2e:sepolia` proves the policy-gated, audited swap-executor on a public network. `demo:sepolia`
composes the real Tongo confidentiality with a real avnu swap.

## Live on Starknet Sepolia

Deployed and executed on **public Starknet Sepolia** — every hash below is verifiable on
[Voyager](https://sepolia.voyager.online/). The full record (all addresses + reproduction commands)
is in [`DEPLOYMENTS.md`](./DEPLOYMENTS.md).

**Real Tongo confidential transfers** — a deposit and private withdrawal round trip, proofs
generated client-side and verified on-chain:

| Operation                                      | Transaction                                                                                                                  |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Confidential **fund** (deposit, amount hidden) | [`0x50415c49…f2e2300`](https://sepolia.voyager.online/tx/0x50415c497900d5357632fdb58198e5def99ec804314fa042dab808c5f2e2300)  |
| Confidential **withdraw** (private)            | [`0x410e8d71…cda567e0`](https://sepolia.voyager.online/tx/0x410e8d713f272f8083a213fbc000c9361eb3cf06ec988a1f4087f3ecda567e0) |

| Contract                                    | Address                                                             |
| ------------------------------------------- | ------------------------------------------------------------------- |
| Tongo confidential pool (STRK, vault-based) | `0x7f1a56198264260706afb246463531c395c0dff4a800559af7f6659c2f8afa1` |
| Vault (token custodian)                     | `0x1e146d740aa901b744c4cb22ca65c20774e6db1030387917dede8b0aaeeb489` |

**Full agent-execution system** — ERC-8004 register → on-chain policy → policy-gated audited shielded
swap, with the privacy invariants asserted on-chain (the owner decrypts exactly one audit entry from
the viewing key; a stranger key decrypts nothing):

Shielded swap tx: [`0x6cd84373…5091b782b`](https://sepolia.voyager.online/tx/0x6cd84373ae040a2db6c4537f140bb7903fc0b32dd0c849343f92575091b782b)

| Contract                       | Address                                                             |
| ------------------------------ | ------------------------------------------------------------------- |
| AgentShield (swap executor)    | `0x56420e4e388ec1f46b4427a65fea93c4221dfdd6fa1554dc17513d7d7692cf6` |
| PolicyEngine                   | `0x17f9065b2c68f0c036fff50b37154db6068aee48c42ff30a0bc4fa367f5d56a` |
| AgentRegistry (ERC-8004)       | `0x238e0b6ec0277ff97d1a1c30d891280a02ac9729aa133592a1bcb37e1a349d3` |
| avnu exchange (router, pinned) | `0x2c56e8b00dbe2a71e57472685378fc8988bba947e9a99b26a00fade2b4fe7c2` |

Reproduce: `pnpm --filter @phantomlayer/scripts confidential:sepolia` (Tongo fund + withdraw) and
`pnpm --filter @phantomlayer/scripts e2e:sepolia` (full agent system).

Real Tongo confidentiality required fixing a real bug in Tongo's published SDK — its prover orders
the Fiat-Shamir proof prefix differently from the Cairo verifier, so every proof is rejected on-chain.
PhantomLayer vendors Tongo's fixed `master` build in [`vendor/tongo-sdk`](./vendor/tongo-sdk); the
root cause is written up in [`DEPLOYMENTS.md`](./DEPLOYMENTS.md#the-tongo-sdk-fix). The fully composed
swap (`demo:sepolia`) additionally needs live avnu Sepolia liquidity for the pair, which fluctuates
on testnet.

## License

MIT
