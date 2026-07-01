import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  type Tool,
} from '@modelcontextprotocol/sdk/types.js';
import { shieldedIntentSchema } from '@phantomlayer/core';
import type { PhantomClient } from '@phantomlayer/sdk';

const intentProperties = {
  agentId: { type: 'string', description: 'Registered agent id.' },
  tokenIn: { type: 'string', description: 'Input token address (0x felt).' },
  tokenOut: { type: 'string', description: 'Output token address (0x felt).' },
  amountIn: { type: 'string', description: 'Input amount in base units.' },
  minOut: { type: 'string', description: 'Minimum acceptable output in base units.' },
} as const;

const intentRequired = ['agentId', 'tokenIn', 'tokenOut', 'amountIn', 'minOut'];

const TOOLS: Tool[] = [
  {
    name: 'phantom_register_agent',
    description: 'Register an ERC-8004 agent identity and commit the owner viewing key on-chain.',
    inputSchema: {
      type: 'object',
      properties: {
        registrationUri: {
          type: 'string',
          description: 'URI of the ERC-8004 Agent Registration File.',
        },
      },
      required: ['registrationUri'],
    },
  },
  {
    name: 'phantom_shielded_swap',
    description:
      'Route a swap through avnu under policy + audit. Input must be delivered to AgentShield (by a Tongo withdraw); output goes to the owner.',
    inputSchema: { type: 'object', properties: intentProperties, required: intentRequired },
  },
  {
    name: 'phantom_policy_status',
    description: 'Check whether the configured account may execute the given intent.',
    inputSchema: { type: 'object', properties: intentProperties, required: intentRequired },
  },
  {
    name: 'phantom_audit_log',
    description: "Decrypt the owner's execution history with the viewing key.",
    inputSchema: {
      type: 'object',
      properties: {
        agentId: { type: 'string', description: 'Filter to a single agent id (optional).' },
      },
    },
  },
];

type Args = Record<string, unknown>;

function str(args: Args, key: string): string {
  const value = args[key];
  if (typeof value !== 'string') {
    throw new Error(`expected string argument "${key}"`);
  }
  return value;
}

async function dispatch(
  client: PhantomClient,
  recipient: string,
  name: string,
  args: Args,
): Promise<unknown> {
  switch (name) {
    case 'phantom_register_agent':
      return client.registerAgent(str(args, 'registrationUri'));
    case 'phantom_shielded_swap':
      return client.executeSwap(shieldedIntentSchema.parse(args), recipient);
    case 'phantom_policy_status': {
      const intent = shieldedIntentSchema.parse(args);
      return { authorized: await client.isAuthorized(intent) };
    }
    case 'phantom_audit_log':
      return client.getAuditLog(typeof args.agentId === 'string' ? args.agentId : undefined);
    default:
      throw new Error(`unknown tool: ${name}`);
  }
}

function serialize(value: unknown): string {
  return JSON.stringify(value, (_key, v) => (typeof v === 'bigint' ? v.toString() : v), 2);
}

/** Wires the PhantomLayer tools onto an MCP server backed by a PhantomClient. */
export function createServer(client: PhantomClient, recipient: string): Server {
  const server = new Server(
    { name: 'phantomlayer', version: '0.1.0' },
    { capabilities: { tools: {} } },
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools: TOOLS }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    try {
      const result = await dispatch(client, recipient, name, (args ?? {}) as Args);
      return { content: [{ type: 'text', text: serialize(result) }] };
    } catch (error) {
      return {
        content: [{ type: 'text', text: `error: ${(error as Error).message}` }],
        isError: true,
      };
    }
  });

  return server;
}
