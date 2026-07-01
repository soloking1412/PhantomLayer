import type { Account, RawArgs, RpcProvider } from 'starknet';
import { loadArtifact } from './artifacts.js';

/** Declares a contract if needed, deploys an instance, and waits for both to settle. */
export async function declareAndDeploy(
  account: Account,
  provider: RpcProvider,
  name: string,
  constructorCalldata: RawArgs = [],
): Promise<string> {
  const { sierra, casm } = loadArtifact(name);
  const declared = await account.declareIfNot({ contract: sierra, casm });
  if (declared.transaction_hash) {
    await provider.waitForTransaction(declared.transaction_hash);
  }
  const deployed = await account.deployContract({
    classHash: declared.class_hash,
    constructorCalldata,
  });
  await provider.waitForTransaction(deployed.transaction_hash);
  return deployed.contract_address;
}

/** Invokes a single entrypoint and waits for the receipt. */
export async function invoke(
  account: Account,
  provider: RpcProvider,
  contractAddress: string,
  entrypoint: string,
  calldata: string[] = [],
): Promise<string> {
  const { transaction_hash } = await account.execute({ contractAddress, entrypoint, calldata });
  await provider.waitForTransaction(transaction_hash);
  return transaction_hash;
}
