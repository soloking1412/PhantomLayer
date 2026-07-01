import { AuditConsole } from './audit-console';

export default function Page() {
  return (
    <main className="shell">
      <div className="brand">
        <span className="dot" />
        PhantomLayer
      </div>
      <h1>Audit Console</h1>
      <p className="lede">
        Every shielded execution is recorded on-chain as an opaque note — no agent id, token, or
        amount in clear. Only the holder of the agent owner&rsquo;s viewing key can reconstruct the
        strategy history below. Enter your viewing key to decrypt it.
      </p>
      <AuditConsole />
    </main>
  );
}
