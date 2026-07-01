import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createClientFromEnv } from './config.js';
import { createServer } from './server.js';

async function main(): Promise<void> {
  const { client, ownerAddress } = createClientFromEnv();
  const server = createServer(client, ownerAddress);
  await server.connect(new StdioServerTransport());
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
