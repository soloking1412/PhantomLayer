import type { RpcProvider } from 'starknet';
import type { Address, DecryptedAuditEntry, Felt } from '@phantomlayer/core';
import { decryptAuditRecord } from './crypto.js';
import { parseShieldedSwapEvent, SHIELDED_SWAP_EVENT_KEY } from './audit.js';

/**
 * Read-only audit reader: pages `ShieldedSwapExecuted` events and decrypts the entries this
 * viewing key owns. Needs only a provider, so it runs in the browser without an account.
 */
export async function fetchDecryptedAuditLog(
  provider: RpcProvider,
  agentShield: Address,
  viewingKey: Felt,
  agentId?: Felt,
): Promise<DecryptedAuditEntry[]> {
  const entries: DecryptedAuditEntry[] = [];
  let continuationToken: string | undefined;

  do {
    const page = await provider.getEvents({
      address: agentShield,
      keys: [[SHIELDED_SWAP_EVENT_KEY]],
      from_block: { block_number: 0 },
      to_block: 'latest',
      chunk_size: 100,
      ...(continuationToken ? { continuation_token: continuationToken } : {}),
    });

    for (const event of page.events) {
      const raw = parseShieldedSwapEvent(event.keys, event.data);
      const record = decryptAuditRecord(raw.auditBlob, viewingKey);
      if (!record) continue;
      if (agentId && record.agentId !== agentId) continue;
      entries.push({ ...record, recordId: raw.recordId });
    }

    continuationToken = page.continuation_token;
  } while (continuationToken);

  return entries;
}
