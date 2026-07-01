import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { CompiledSierra, CompiledSierraCasm } from 'starknet';

const TARGET = join(dirname(fileURLToPath(import.meta.url)), '../../../contracts/target/dev');

export interface ContractArtifact {
  sierra: CompiledSierra;
  casm: CompiledSierraCasm;
}

/** Loads the Scarb-compiled sierra and casm for a contract by its Cairo module name. */
export function loadArtifact(name: string): ContractArtifact {
  return {
    sierra: readJson(`phantomlayer_${name}.contract_class.json`),
    casm: readJson(`phantomlayer_${name}.compiled_contract_class.json`),
  };
}

function readJson<T>(file: string): T {
  return JSON.parse(readFileSync(join(TARGET, file), 'utf8')) as T;
}
