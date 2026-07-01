import { Account, RpcProvider } from 'starknet';
import { fetchPredeployedAccounts } from './lib/devnet.js';
import { runShieldedSwapFlow } from './lib/flow.js';

const RPC = process.env.STARKNET_RPC_URL ?? 'http://127.0.0.1:5050';

async function main(): Promise<void> {
  const provider = new RpcProvider({ nodeUrl: RPC });
  const accounts = await fetchPredeployedAccounts(RPC);
  const deployer = accounts[0];
  if (!deployer) throw new Error('devnet: no predeployed accounts');
  const account = new Account({
    provider,
    address: deployer.address,
    signer: deployer.private_key,
  });

  const { result, addresses } = await runShieldedSwapFlow(account, provider, 'SN_DEVNET');

  console.log('\n✔ Shielded agent swap verified end-to-end on devnet');
  console.log('  tx:             ', result.transactionHash);
  console.log('  quoted out:     ', result.quotedOut.toString());
  console.log('  agent shield:   ', addresses.agentShield);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
