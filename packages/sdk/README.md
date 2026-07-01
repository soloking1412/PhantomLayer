# @phantomlayer/sdk (PhantomSDK)

TypeScript client for PhantomLayer: session-key management, on-chain policy configuration, avnu
routing, viewing-key audit encryption/decryption, and an ERC-8004 registration helper.

```ts
import { PhantomClient, AvnuRouteProvider } from '@phantomlayer/sdk';

const client = new PhantomClient({
  account,
  provider,
  addresses,
  viewingKey,
  routeProvider: new AvnuRouteProvider({
    exchangeAddress: addresses.router,
    takerAddress: addresses.agentShield,
  }),
});

const { agentId } = await client.registerAgent(registrationUri);
await client.configurePolicy(agentId, { tokens, exchanges, maxAmountIn });
await client.executeSwap({ agentId, tokenIn, tokenOut, amountIn, minOut }, recipient);
const history = await client.getAuditLog(agentId); // decrypted with the owner's viewing key
```

## Real confidentiality — `@phantomlayer/sdk/tongo`

Confidential balances are a separate, node-only entry point wrapping the real
[`@fatsolutions/tongo-sdk`](https://github.com/fatlabsxyz/tongo) (ElGamal + zero-knowledge proofs,
generated client-side):

```ts
import { TongoConfidential } from '@phantomlayer/sdk/tongo';

const tongo = new TongoConfidential({ tongoPrivateKey, tongoAddress, senderAddress, provider });
const withdrawCalls = await tongo.withdrawCalls(agentShieldAddress, amountIn);
const { call: swapCall } = await client.buildExecuteSwapCall(intent, ownerAddress);
await account.execute([...withdrawCalls, swapCall]); // one multicall: unshield → policy-gated swap
```

Kept as a separate entry point (not re-exported from the main index) so the browser-facing SDK
bundle never pulls in Node-only crypto dependencies.

## Backends

`MockRouteProvider` builds deterministic calldata for the mock exchange used in tests/devnet.
`AvnuRouteProvider` pulls a live quote (`getQuotes`) and the exact `multi_route_swap` calldata
(`quoteToCalls`) from avnu, which `AgentShield` forwards on-chain without ever reconstructing the
route encoding itself.
