# Live deployments (Starknet Sepolia)

Everything below was deployed and executed on public Starknet Sepolia and can be verified on
[Voyager](https://sepolia.voyager.online/) / [Starkscan](https://sepolia.starkscan.co/).

## 1. Full system, verified end-to-end ✅

Self-contained run of the entire agent-execution flow — register ERC-8004 agent → configure
on-chain policy → deliver funds → policy-gated audited swap — with the privacy invariants asserted
**on-chain** (the agent owner decrypts exactly one audit entry from the viewing key; a stranger key
decrypts nothing).

| Contract         | Address                                                             |
| ---------------- | ------------------------------------------------------------------- |
| AgentRegistry    | `0xcdedba20d66abff9e7c422e6c686bf609b06978d634a9f55e7fadf0f9e2ca3`  |
| PolicyEngine     | `0x6e3155fb9411d850897eee09a2c51303fc007d28be80c4750155643876463d3` |
| AgentShield      | `0x77d66c9844131a77f123aadffee2fe0d3fb4ac5a95bc2738d638d049fd0f92d` |
| MockAvnuExchange | `0x7b135ff415e6ea70c2a563242c8e27b5b4e2d59d3e8da5b7353d37909d4c3f2` |

Shielded swap tx: [`0x6cd84373ae040a2db6c4537f140bb7903fc0b32dd0c849343f92575091b782b`](https://sepolia.voyager.online/tx/0x6cd84373ae040a2db6c4537f140bb7903fc0b32dd0c849343f92575091b782b)
(reproduce with `pnpm --filter @phantomlayer/scripts e2e:sepolia`; addresses in `deployments/sepolia-e2e.json`).

## 2. Production stack wired to real avnu ✅

The PhantomLayer stack configured against avnu's real Sepolia exchange (verified live with STRK→ETH
liquidity), ready for a real-liquidity swap.

| Contract               | Address                                                             |
| ---------------------- | ------------------------------------------------------------------- |
| AgentRegistry          | `0x238e0b6ec0277ff97d1a1c30d891280a02ac9729aa133592a1bcb37e1a349d3` |
| PolicyEngine           | `0x17f9065b2c68f0c036fff50b37154db6068aee48c42ff30a0bc4fa367f5d56a` |
| AgentShield            | `0x56420e4e388ec1f46b4427a65fea93c4221dfdd6fa1554dc17513d7d7692cf6` |
| avnu exchange (router) | `0x2c56e8b00dbe2a71e57472685378fc8988bba947e9a99b26a00fade2b4fe7c2` |

Addresses in `deployments/sepolia.json`.

## 3. Real Tongo confidential transfers ✅ (working on-chain)

PhantomLayer's confidentiality is real [Tongo](https://github.com/fatlabsxyz/tongo) — ElGamal +
zero-knowledge confidential transfers over the Stark curve, proofs generated client-side. A full
confidential **deposit and private withdrawal round trip is verified on Starknet Sepolia**:

| Operation                                  | Tx                                                                                                                                                                         |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Confidential fund (deposit, amount hidden) | [`0x50415c497900d5357632fdb58198e5def99ec804314fa042dab808c5f2e2300`](https://sepolia.voyager.online/tx/0x50415c497900d5357632fdb58198e5def99ec804314fa042dab808c5f2e2300) |
| Confidential withdraw (private)            | [`0x410e8d713f272f8083a213fbc000c9361eb3cf06ec988a1f4087f3ecda567e0`](https://sepolia.voyager.online/tx/0x410e8d713f272f8083a213fbc000c9361eb3cf06ec988a1f4087f3ecda567e0) |

| Contract                                  | Address                                                             |
| ----------------------------------------- | ------------------------------------------------------------------- |
| Tongo pool (STRK, vault-based, rate 1e12) | `0x7f1a56198264260706afb246463531c395c0dff4a800559af7f6659c2f8afa1` |
| Vault                                     | `0x1e146d740aa901b744c4cb22ca65c20774e6db1030387917dede8b0aaeeb489` |
| Tongo class hash                          | `0x12783c39bb7400541f705b29b97a21a8b5f73aa2047f926b252d4417a2cda2f` |

Reproduce with `pnpm --filter @phantomlayer/scripts confidential:sepolia` (runs through PhantomSDK's
`TongoConfidential`, `packages/sdk/src/tongo.ts`).

### The Tongo SDK fix

The npm-published Tongo SDK (`@fatsolutions/tongo-sdk@1.5.0`) is **broken**: its provers order the
Fiat-Shamir proof prefix differently from the Cairo verifier (`[chain_id, tongo_address,
sender_address, selector, …]` in JS vs. `[selector, …, chain_id, tongo_address, sender_address]` in
Cairo), so every proof is rejected on-chain ("Proof Of Ownership failed"). Their unit tests never
catch it (they prove and verify with the same wrong order); their integration test never catches it
(it crashes at calldata serialization first). Tongo's **master branch** already fixes this via
`cairo-abi-codec` serialization but has not been published to npm, so PhantomLayer vendors the master
build in `vendor/tongo-sdk` (Apache-2.0). Making the whole path work also required: passing an RPC
URL string (not a provider object) to the SDK constructor, flattening its array-returning
`toCalldata()`, and deploying Tongo **through a Vault** (`Vault.deploy_tongo`) rather than standalone
so it has a real token custodian.

### Full confidential swap

`demo:sepolia` composes the round trip with an avnu swap (Tongo withdraw → avnu → re-fund). Fund and
withdraw are verified above; the swap leg additionally needs live avnu Sepolia liquidity for the
pair, which fluctuates on testnet (it was available earlier in development and dry at last check).

## Reproduce

Fund a Sepolia account with STRK, fill `scripts/.env` from `scripts/.env.example`, then:

```bash
pnpm --filter @phantomlayer/scripts e2e:sepolia          # section 1 (full agent system)
pnpm --filter @phantomlayer/scripts deploy:sepolia       # section 2 (avnu-wired stack)
pnpm --filter @phantomlayer/scripts confidential:sepolia # section 3 (real Tongo fund + withdraw)
pnpm --filter @phantomlayer/scripts demo:sepolia         # full confidential swap (needs avnu liquidity)
```
