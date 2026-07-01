import type { Account, RpcProvider } from 'starknet';
import type { Address, ContractAddresses, Felt } from '@phantomlayer/core';
import type { RouteProvider } from './routes.js';

export interface ShieldedSwapStruct {
  agentId: Felt;
  tokenIn: Address;
  tokenOut: Address;
  amountIn: bigint;
  minOut: bigint;
}

export interface ShieldedSwapArgs {
  swap: ShieldedSwapStruct;
  swapCalldata: Felt[];
  recipient: Address;
  auditBlob: Felt[];
}

export interface PhantomClientConfig {
  account: Account;
  provider: RpcProvider;
  addresses: ContractAddresses;
  routeProvider: RouteProvider;
  /** Owner viewing-key secret; required to encrypt audit blobs and read the audit log. */
  viewingKey: Felt;
}
