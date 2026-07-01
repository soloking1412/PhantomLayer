'use client';

import { useState, type FormEvent } from 'react';
import { RpcProvider } from 'starknet';
import { fetchDecryptedAuditLog, type DecryptedAuditEntry } from '@phantomlayer/sdk';

function shorten(value: string): string {
  return value.length > 14 ? `${value.slice(0, 8)}…${value.slice(-4)}` : value;
}

export function AuditConsole() {
  const [rpcUrl, setRpcUrl] = useState('http://127.0.0.1:5050');
  const [agentShield, setAgentShield] = useState('');
  const [viewingKey, setViewingKey] = useState('');
  const [agentId, setAgentId] = useState('');
  const [entries, setEntries] = useState<DecryptedAuditEntry[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function load(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setEntries(null);
    try {
      const provider = new RpcProvider({ nodeUrl: rpcUrl });
      const log = await fetchDecryptedAuditLog(
        provider,
        agentShield,
        viewingKey,
        agentId.trim() || undefined,
      );
      setEntries(log);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form className="card" onSubmit={load}>
        <div className="row">
          <div className="field">
            <label htmlFor="rpc">Starknet RPC</label>
            <input id="rpc" value={rpcUrl} onChange={(e) => setRpcUrl(e.target.value)} required />
          </div>
          <div className="field">
            <label htmlFor="shield">AgentShield address</label>
            <input
              id="shield"
              placeholder="0x…"
              value={agentShield}
              onChange={(e) => setAgentShield(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="field">
            <label htmlFor="vk">Viewing key</label>
            <input
              id="vk"
              placeholder="0x…"
              value={viewingKey}
              onChange={(e) => setViewingKey(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="agent">Agent id (optional)</label>
            <input id="agent" value={agentId} onChange={(e) => setAgentId(e.target.value)} />
          </div>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Decrypting…' : 'Decrypt audit trail'}
        </button>
        {error && <div className="error">error: {error}</div>}
      </form>

      {entries && <Results entries={entries} />}
    </>
  );
}

function Results({ entries }: { entries: DecryptedAuditEntry[] }) {
  if (entries.length === 0) {
    return (
      <div className="card" style={{ marginTop: 24 }}>
        <div className="empty">
          No entries decrypt with this viewing key — exactly what every other observer sees.
        </div>
      </div>
    );
  }

  return (
    <div className="card" style={{ marginTop: 24 }}>
      <div className="summary">
        <div className="stat">
          <div className="n">{entries.length}</div>
          <div className="l">executions decrypted</div>
        </div>
        <div className="stat">
          <div className="n">
            <span className="pill">viewing key valid</span>
          </div>
          <div className="l">owner-only visibility</div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Agent</th>
            <th>Pair</th>
            <th>Amount in</th>
            <th>Amount out</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.recordId}>
              <td>{entry.recordId}</td>
              <td>{entry.agentId}</td>
              <td className="mono">
                {shorten(entry.tokenIn)} → {shorten(entry.tokenOut)}
              </td>
              <td>{entry.amountIn}</td>
              <td>{entry.amountOut}</td>
              <td className="mono">{new Date(entry.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
