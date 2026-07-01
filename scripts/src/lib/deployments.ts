import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { ContractAddresses } from '@phantomlayer/core';

const DIR = join(dirname(fileURLToPath(import.meta.url)), '../../../deployments');

export function writeDeployment(network: string, addresses: ContractAddresses): string {
  mkdirSync(DIR, { recursive: true });
  const path = join(DIR, `${network}.json`);
  writeFileSync(path, `${JSON.stringify(addresses, null, 2)}\n`);
  return path;
}

export function readDeployment(network: string): ContractAddresses {
  const path = join(DIR, `${network}.json`);
  if (!existsSync(path)) {
    throw new Error(`no deployment at ${path} — run deploy:${network} first`);
  }
  return JSON.parse(readFileSync(path, 'utf8')) as ContractAddresses;
}
