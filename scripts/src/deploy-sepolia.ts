import type { ContractAddresses } from '@phantomlayer/core';
import { optional, required } from './lib/env.js';
import { accountFromEnv, providerFromEnv } from './lib/account.js';
import { declareAndDeploy } from './lib/deploy.js';
import { writeDeployment } from './lib/deployments.js';

/**
 * Deploys the PhantomLayer stack to Sepolia wired to the real avnu exchange (AVNU_ROUTER_ADDRESS).
 * Confidentiality is provided externally by Tongo (see demo:sepolia); AgentShield itself is the
 * policy-gated, audited swap executor.
 */
async function main(): Promise<void> {
  const provider = providerFromEnv();
  const account = accountFromEnv(provider);
  const owner = account.address;

  const router = required('AVNU_ROUTER_ADDRESS');
  const feeBps = optional('PHANTOM_FEE_BPS', '5');
  const feeRecipient = optional('PHANTOM_FEE_RECIPIENT', owner);

  console.log('Deploying PhantomLayer to Sepolia (avnu router)…');
  const agentRegistry = await declareAndDeploy(account, provider, 'AgentRegistry');
  const policyEngine = await declareAndDeploy(account, provider, 'PolicyEngine', [agentRegistry]);
  const agentShield = await declareAndDeploy(account, provider, 'AgentShield', [
    owner,
    policyEngine,
    router,
    feeBps,
    feeRecipient,
  ]);

  const addresses: ContractAddresses = { agentRegistry, policyEngine, agentShield, router };
  const path = writeDeployment('sepolia', addresses);
  console.log(`\n✔ Deployed. Addresses written to ${path}`);
  console.log(addresses);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
