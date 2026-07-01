import {
  AvnuRouteProvider,
  buildAgentRegistrationFile,
  generateViewingKey,
  PhantomClient,
} from '@phantomlayer/sdk';
import { TongoConfidential } from '@phantomlayer/sdk/tongo';
import { optional, required } from './lib/env.js';
import { accountFromEnv, providerFromEnv } from './lib/account.js';
import { readDeployment } from './lib/deployments.js';
import { readBalance } from './lib/erc20.js';

/**
 * Live confidential agent swap on Sepolia: real Tongo (ElGamal + ZK) confidentiality composed with
 * a real avnu swap routed through AgentShield (policy + audit).
 *
 * Lifecycle:
 *   1. fund + rollover: deposit DEMO_AMOUNT_IN of DEMO_TOKEN_IN into the agent's confidential balance.
 *   2. one multicall: tongo.withdraw(to=AgentShield) → AgentShield.execute_swap(recipient=owner).
 *   3. re-shield the swap output: tongo.fund(receivedAmount) into a token-out Tongo pool.
 *
 * Step 3 cannot be folded into step 2's multicall: Tongo's ZK proof for `fund` is generated
 * client-side and must encrypt a known amount, but the swap's exact output is only known once
 * step 2 executes on-chain. So the flow is two transactions, not one — the confidential window
 * (input) is atomic with the swap; the output is briefly public between steps 2 and 3, exactly as
 * long as it takes to read the receipt and submit the re-shield.
 *
 * Requires a deployed Tongo pool for DEMO_TOKEN_IN (TONGO_ADDRESS), the agent's Tongo key
 * (TONGO_PRIVATE_KEY), an owner account holding DEMO_TOKEN_IN, and a deploy:sepolia stack. If
 * TONGO_OUT_ADDRESS (a Tongo pool for DEMO_TOKEN_OUT) is set, step 3 runs automatically; otherwise
 * the exact amount to re-shield is printed for a manual follow-up.
 *
 * Each Tongo pool stores its confidential balance in 32 bits, in units of `rate` wei (see
 * scripts/deploy in the Tongo repo). DEMO_AMOUNT_IN must be an exact multiple of the input pool's
 * rate and fit under 2^32 units. The swap's real output is not an exact multiple in general, so
 * it is truncated down to the output pool's rate before re-shielding (negligible dust is left
 * public — a fixed, tiny amount bounded by the pool's rate, not a percentage of the trade).
 */
async function main(): Promise<void> {
  const provider = providerFromEnv();
  const account = accountFromEnv(provider, 'AGENT_OWNER_ADDRESS', 'AGENT_OWNER_PRIVATE_KEY');
  const owner = account.address;
  const addresses = readDeployment('sepolia');

  const tokenIn = required('DEMO_TOKEN_IN');
  const tokenOut = required('DEMO_TOKEN_OUT');
  const amountIn = BigInt(required('DEMO_AMOUNT_IN'));
  const viewingKey = process.env.AGENT_VIEWING_KEY ?? generateViewingKey();
  const tongoPrivateKey = required('TONGO_PRIVATE_KEY');
  const rpcUrl = required('STARKNET_RPC_URL');

  const tongoIn = new TongoConfidential({
    tongoPrivateKey,
    tongoAddress: required('TONGO_ADDRESS'),
    senderAddress: owner,
    rpcUrl,
  });

  const client = new PhantomClient({
    account,
    provider,
    addresses,
    routeProvider: new AvnuRouteProvider({
      exchangeAddress: addresses.router,
      takerAddress: addresses.agentShield,
      slippageBps: BigInt(optional('DEMO_SLIPPAGE_BPS', '50')),
      baseUrl: optional('AVNU_BASE_URL', 'https://sepolia.api.avnu.fi'),
    }),
    viewingKey,
  });

  // 1. Deposit the input into the confidential balance. fundCalls/withdrawCalls take wei and
  //    convert to the pool's confidential units internally (throwing if amountIn isn't an exact,
  //    in-range multiple of the pool's rate). `fund` credits the balance directly — rollover is
  //    only needed to apply *received* confidential transfers (which land in a pending balance).
  console.log(`Confidential address: ${tongoIn.tongoAddress}`);
  console.log('Funding confidential balance…');
  const fundTx = await account.execute(await tongoIn.fundCalls(amountIn));
  await provider.waitForTransaction(fundTx.transaction_hash);

  // 2. Register + policy.
  const registration = buildAgentRegistrationFile({
    name: optional('DEMO_AGENT_NAME', 'phantomlayer-agent'),
    chainId: 'SN_SEPOLIA',
    registry: addresses.agentRegistry,
    capabilities: ['private-execution'],
  });
  const { agentId } = await client.registerAgent(
    `data:application/json,${encodeURIComponent(JSON.stringify(registration))}`,
  );
  await client.configurePolicy(agentId, {
    tokens: [tokenIn, tokenOut],
    exchanges: [addresses.router],
    maxAmountIn: [{ token: tokenIn, amount: amountIn }],
  });

  // 3. One atomic multicall: confidential withdraw into AgentShield, then the audited swap.
  console.log('Executing confidential swap (withdraw → swap)…');
  const intent = { agentId, tokenIn, tokenOut, amountIn, minOut: 0n };
  const withdrawCalls = await tongoIn.withdrawCalls(addresses.agentShield, amountIn);
  const { call: swapCall, quotedOut, minOut } = await client.buildExecuteSwapCall(intent, owner);
  const balanceBefore = await readBalance(provider, tokenOut, owner);
  const swapTx = await account.execute([...withdrawCalls, swapCall]);
  await provider.waitForTransaction(swapTx.transaction_hash);
  const received = (await readBalance(provider, tokenOut, owner)) - balanceBefore;

  console.log('\n✔ Confidential agent swap executed on Sepolia');
  console.log('  agent id:      ', agentId);
  console.log('  tx:            ', swapTx.transaction_hash);
  console.log('  quoted out:    ', quotedOut.toString());
  console.log('  min out:       ', minOut.toString());
  console.log('  actual out:    ', received.toString());

  // 4. Re-shield the output. Needs its own Tongo pool for DEMO_TOKEN_OUT (a separate asset).
  //    The real output is rarely an exact multiple of the pool's rate, so it is truncated down —
  //    a small, fixed amount of dust (< rate wei) is left public rather than lost or rejected.
  const tongoOutAddress = process.env.TONGO_OUT_ADDRESS;
  if (tongoOutAddress) {
    const tongoOut = new TongoConfidential({
      tongoPrivateKey,
      tongoAddress: tongoOutAddress,
      senderAddress: owner,
      rpcUrl,
    });
    const shieldAmount = await tongoOut.roundDown(received);
    if (shieldAmount === 0n) {
      const rateOut = await tongoOut.rate();
      console.log(
        `  Output (${received}) is smaller than the pool rate (${rateOut}) — skipping re-shield.`,
      );
    } else {
      console.log(
        `Re-shielding ${shieldAmount} of ${received} (dust: ${received - shieldAmount} wei, below pool rate)…`,
      );
      const fundTx = await account.execute(await tongoOut.fundCalls(shieldAmount));
      await provider.waitForTransaction(fundTx.transaction_hash);
      console.log('  re-shield tx:  ', fundTx.transaction_hash);
      console.log('✔ Round trip complete — output is confidential again.');
    }
  } else {
    console.log(
      `  Set TONGO_OUT_ADDRESS to a Tongo pool for ${tokenOut} to auto re-shield ${received} on the next run.`,
    );
  }

  if (!process.env.AGENT_VIEWING_KEY) {
    console.log('  viewing key (store securely):', viewingKey);
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
