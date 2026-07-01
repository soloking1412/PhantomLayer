import { accountFromEnv, providerFromEnv } from './lib/account.js';
import { runShieldedSwapFlow } from './lib/flow.js';
import { writeDeployment } from './lib/deployments.js';

/**
 * Runs the full PhantomLayer flow on Starknet Sepolia using a self-contained mock token/exchange
 * pair (registry, policy engine, AgentShield, and a mock avnu exchange it deploys itself). Proves
 * the agent-execution + policy + audit system end-to-end on a public network without depending on
 * real liquidity. Confidentiality here is not real — see demo:sepolia for the real Tongo flow.
 *
 * Writes to deployments/sepolia-e2e.json, distinct from deployments/sepolia.json (produced by
 * deploy:sepolia, wired to the real avnu exchange and used by demo:sepolia).
 */
async function main(): Promise<void> {
  const provider = providerFromEnv();
  const account = accountFromEnv(provider);

  const { result, addresses, agentId, viewingKey } = await runShieldedSwapFlow(
    account,
    provider,
    'SN_SEPOLIA',
  );

  const path = writeDeployment('sepolia-e2e', addresses);

  console.log('\n✔ Shielded agent swap verified end-to-end on Sepolia');
  console.log('  agent id:       ', agentId);
  console.log('  tx:             ', result.transactionHash);
  console.log('  quoted out:     ', result.quotedOut.toString());
  console.log('  addresses:      ', path);
  console.log('  viewing key:    ', viewingKey, '(store securely to read the audit log)');
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
