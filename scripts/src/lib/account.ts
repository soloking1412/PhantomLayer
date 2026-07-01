import { Account, RpcProvider } from 'starknet';
import { required } from './env.js';

export function providerFromEnv(): RpcProvider {
  return new RpcProvider({ nodeUrl: required('STARKNET_RPC_URL') });
}

export function accountFromEnv(
  provider: RpcProvider,
  addressVar = 'DEPLOYER_ADDRESS',
  keyVar = 'DEPLOYER_PRIVATE_KEY',
): Account {
  return new Account({ provider, address: required(addressVar), signer: required(keyVar) });
}
