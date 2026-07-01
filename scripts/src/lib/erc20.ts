import type { RpcProvider } from 'starknet';

/** Reads an ERC-20 `balance_of` and returns it as a bigint (u256 low/high felts). */
export async function readBalance(
  provider: RpcProvider,
  token: string,
  account: string,
): Promise<bigint> {
  const response = await provider.callContract({
    contractAddress: token,
    entrypoint: 'balance_of',
    calldata: [account],
  });
  const result = Array.isArray(response) ? response : (response as { result: string[] }).result;
  return BigInt(result[0]!) + (BigInt(result[1]!) << 128n);
}
