import assert from 'node:assert/strict';
import type { Account, RpcProvider } from 'starknet';
import {
  buildAgentRegistrationFile,
  generateViewingKey,
  MockRouteProvider,
  PhantomClient,
  u256ToFelts,
  type ContractAddresses,
  type ShieldedSwapResult,
} from '@phantomlayer/sdk';
import { declareAndDeploy, invoke } from './deploy.js';

const AMOUNT_IN = 1000n;
const MIN_OUT = 900n;

export interface FlowResult {
  addresses: ContractAddresses;
  agentId: string;
  viewingKey: string;
  result: ShieldedSwapResult;
}

/**
 * Deploys a self-contained PhantomLayer stack (mock token-in/out + mock exchange) and runs a full
 * policy-gated, audited swap, asserting the audit-privacy invariants. Used identically on local
 * devnet and on Sepolia. In production the input token is delivered by a Tongo withdraw; here it is
 * minted to AgentShield to stand in for that step (confidentiality is exercised by the Tongo flow).
 */
export async function runShieldedSwapFlow(
  account: Account,
  provider: RpcProvider,
  chainId: string,
  log: (message: string) => void = console.log,
): Promise<FlowResult> {
  const owner = account.address;

  log('Deploying PhantomLayer stack…');
  const agentRegistry = await declareAndDeploy(account, provider, 'AgentRegistry');
  const tokenIn = await declareAndDeploy(account, provider, 'MockERC20');
  const tokenOut = await declareAndDeploy(account, provider, 'MockERC20');
  const router = await declareAndDeploy(account, provider, 'MockAvnuExchange', [
    '1',
    '0',
    '1',
    '0',
  ]);
  const policyEngine = await declareAndDeploy(account, provider, 'PolicyEngine', [agentRegistry]);
  const agentShield = await declareAndDeploy(account, provider, 'AgentShield', [
    owner,
    policyEngine,
    router,
    '0',
    owner,
  ]);

  const addresses: ContractAddresses = { agentRegistry, policyEngine, agentShield, router };

  await invoke(account, provider, tokenOut, 'mint', [router, ...u256ToFelts(AMOUNT_IN * 100n)]);

  const viewingKey = generateViewingKey();
  const client = new PhantomClient({
    account,
    provider,
    addresses,
    routeProvider: new MockRouteProvider({ exchangeAddress: router, agentShield }),
    viewingKey,
  });

  log('Registering ERC-8004 agent…');
  const registration = buildAgentRegistrationFile({
    name: 'phantomlayer-demo-agent',
    chainId,
    registry: agentRegistry,
    capabilities: ['private-execution', 'shielded-swap'],
  });
  const { agentId } = await client.registerAgent(
    `data:application/json,${encodeURIComponent(JSON.stringify(registration))}`,
  );

  log(`Configuring policy for agent ${agentId}…`);
  await client.configurePolicy(agentId, {
    tokens: [tokenIn, tokenOut],
    exchanges: [router],
    maxAmountIn: [{ token: tokenIn, amount: AMOUNT_IN * 10n }],
  });

  // Deliver the input token to AgentShield (a Tongo withdraw does this in production).
  await invoke(account, provider, tokenIn, 'mint', [agentShield, ...u256ToFelts(AMOUNT_IN)]);

  log('Executing shielded swap…');
  const result = await client.executeSwap(
    { agentId, tokenIn, tokenOut, amountIn: AMOUNT_IN, minOut: MIN_OUT },
    owner,
  );

  const ownerLog = await client.getAuditLog(agentId);
  const stranger = new PhantomClient({
    account,
    provider,
    addresses,
    routeProvider: new MockRouteProvider({ exchangeAddress: router, agentShield }),
    viewingKey: generateViewingKey(),
  });
  const strangerLog = await stranger.getAuditLog(agentId);

  assert.equal(result.recordId, 0, 'first record id should be 0');
  assert.equal(await client.recordCount(), 1, 'record count should be 1');
  assert.equal(ownerLog.length, 1, 'owner should decrypt exactly one audit entry');
  assert.equal(strangerLog.length, 0, 'a stranger viewing key must decrypt nothing');
  assert.equal(ownerLog[0]!.amountIn, AMOUNT_IN.toString(), 'audit amountIn mismatch');

  return { addresses, agentId, viewingKey, result };
}
