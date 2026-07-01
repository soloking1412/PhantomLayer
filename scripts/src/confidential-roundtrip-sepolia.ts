import { TongoConfidential } from '@phantomlayer/sdk/tongo';
import { required } from './lib/env.js';
import { accountFromEnv, providerFromEnv } from './lib/account.js';

/**
 * Demonstrates PhantomLayer's real confidential layer on Starknet Sepolia, independent of any DEX:
 * deposit an ERC-20 into a Tongo confidential balance (ElGamal + zero-knowledge, amount hidden),
 * then withdraw it privately back to the owner. Both operations generate client-side ZK proofs
 * (via the vendored Tongo SDK) that are verified on-chain.
 *
 * Requires a vault-based Tongo pool (TONGO_ADDRESS), the agent's Tongo key (TONGO_PRIVATE_KEY), and
 * an owner account holding the pool's ERC-20. Amount must be an exact multiple of the pool rate.
 */
async function main(): Promise<void> {
  const provider = providerFromEnv();
  const account = accountFromEnv(provider, 'AGENT_OWNER_ADDRESS', 'AGENT_OWNER_PRIVATE_KEY');
  const owner = account.address;
  const amountWei = BigInt(process.env.ROUNDTRIP_AMOUNT ?? '100000000000000'); // 0.0001 STRK default

  const tongo = new TongoConfidential({
    tongoPrivateKey: required('TONGO_PRIVATE_KEY'),
    tongoAddress: required('TONGO_ADDRESS'),
    senderAddress: owner,
    rpcUrl: required('STARKNET_RPC_URL'),
  });

  console.log('Confidential address:', tongo.tongoAddress);
  console.log(`Depositing ${amountWei} wei into the confidential balance…`);
  const fundTx = await account.execute(await tongo.fundCalls(amountWei));
  await provider.waitForTransaction(fundTx.transaction_hash);
  console.log('  fund tx:    ', fundTx.transaction_hash);

  console.log('Withdrawing privately back to the owner…');
  const withdrawTx = await account.execute(await tongo.withdrawCalls(owner, amountWei));
  await provider.waitForTransaction(withdrawTx.transaction_hash);
  console.log('  withdraw tx:', withdrawTx.transaction_hash);

  console.log('\n✔ Confidential round trip complete on Sepolia — ElGamal + ZK, amounts hidden.');
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
