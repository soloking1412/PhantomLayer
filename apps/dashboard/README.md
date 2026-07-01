# PhantomLayer Audit Console

Next.js dashboard that proves the audit story: paste an `AgentShield` address, an RPC URL, and the
agent owner's viewing key, and it decrypts the owner's full execution history from the
`ShieldedSwapExecuted` events — the same events every other observer on-chain sees only as opaque
ciphertext.

```bash
pnpm --filter @phantomlayer/dashboard dev
# open http://localhost:3000
```

All decryption happens client-side (`@phantomlayer/sdk`'s `fetchDecryptedAuditLog`); the viewing
key never leaves the browser tab.
