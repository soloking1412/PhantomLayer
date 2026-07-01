import type { Address, Felt } from '@phantomlayer/core';

/** ERC-8004 service endpoint (e.g. the agent's A2A endpoint). */
export interface AgentEndpoint {
  name: string;
  url: string;
}

/**
 * An ERC-8004-shaped Agent Registration File. The PhantomLayer registry stores a URI pointing
 * to a document of this form, so a PhantomLayer agent is discoverable by any ERC-8004 consumer.
 */
export interface AgentRegistrationFile {
  type: 'AgentRegistration';
  name: string;
  description?: string;
  image?: string;
  endpoints: AgentEndpoint[];
  capabilities: string[];
  registrations: {
    chainId: string;
    registry: Address;
    agentId?: Felt;
  }[];
}

export interface BuildRegistrationInput {
  name: string;
  chainId: string;
  registry: Address;
  description?: string;
  image?: string;
  endpoints?: AgentEndpoint[];
  capabilities?: string[];
  agentId?: Felt;
}

/** Builds an ERC-8004 registration file binding an agent to the PhantomLayer registry. */
export function buildAgentRegistrationFile(input: BuildRegistrationInput): AgentRegistrationFile {
  return {
    type: 'AgentRegistration',
    name: input.name,
    ...(input.description !== undefined ? { description: input.description } : {}),
    ...(input.image !== undefined ? { image: input.image } : {}),
    endpoints: input.endpoints ?? [],
    capabilities: input.capabilities ?? ['private-execution'],
    registrations: [
      {
        chainId: input.chainId,
        registry: input.registry,
        ...(input.agentId !== undefined ? { agentId: input.agentId } : {}),
      },
    ],
  };
}
