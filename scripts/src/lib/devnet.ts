export interface DevnetAccount {
  address: string;
  private_key: string;
  public_key: string;
}

/** Fetches the deterministic predeployed accounts exposed by starknet-devnet. */
export async function fetchPredeployedAccounts(rpcUrl: string): Promise<DevnetAccount[]> {
  const response = await fetch(rpcUrl, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'devnet_getPredeployedAccounts',
      params: {},
    }),
  });
  if (!response.ok) {
    throw new Error(`devnet: ${rpcUrl} unreachable — is starknet-devnet running?`);
  }
  const body = (await response.json()) as { result?: DevnetAccount[]; error?: { message: string } };
  if (!body.result) {
    throw new Error(`devnet: ${body.error?.message ?? 'no predeployed accounts returned'}`);
  }
  return body.result;
}
