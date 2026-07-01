import { Account, RpcProvider } from 'starknet';
import {
  AvnuRouteProvider,
  MockRouteProvider,
  PhantomClient,
  type RouteProvider,
} from '@phantomlayer/sdk';
import type { ContractAddresses, Felt, NetworkName } from '@phantomlayer/core';

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`PhantomLayer MCP: missing environment variable ${name}`);
  }
  return value;
}

export interface McpContext {
  client: PhantomClient;
  /** Default recipient for swap output (the agent owner account). */
  ownerAddress: string;
}

/** Builds a PhantomClient + context from the process environment (see .env.example). */
export function createClientFromEnv(): McpContext {
  const network = (process.env.STARKNET_NETWORK ?? 'devnet') as NetworkName;
  const provider = new RpcProvider({ nodeUrl: required('STARKNET_RPC_URL') });
  const ownerAddress = required('AGENT_OWNER_ADDRESS');
  const account = new Account({
    provider,
    address: ownerAddress,
    signer: required('AGENT_OWNER_PRIVATE_KEY'),
  });

  const addresses: ContractAddresses = {
    agentRegistry: required('AGENT_REGISTRY_ADDRESS'),
    policyEngine: required('POLICY_ENGINE_ADDRESS'),
    agentShield: required('AGENT_SHIELD_ADDRESS'),
    router: required('AVNU_ROUTER_ADDRESS'),
  };

  const routeProvider: RouteProvider =
    network === 'devnet'
      ? new MockRouteProvider({
          exchangeAddress: addresses.router,
          agentShield: addresses.agentShield,
          rateNum: BigInt(process.env.MOCK_RATE_NUM ?? '1'),
          rateDen: BigInt(process.env.MOCK_RATE_DEN ?? '1'),
        })
      : new AvnuRouteProvider({
          exchangeAddress: addresses.router,
          takerAddress: addresses.agentShield,
        });

  const client = new PhantomClient({
    account,
    provider,
    addresses,
    routeProvider,
    viewingKey: required('AGENT_VIEWING_KEY') as Felt,
  });

  return { client, ownerAddress };
}
