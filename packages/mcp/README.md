# @phantomlayer/mcp

MCP server that exposes PhantomLayer's private execution as tools any MCP-compatible agent
framework (Claude, etc.) can call directly.

## Tools

| Tool                     | Description                                                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------------ |
| `phantom_register_agent` | Register an ERC-8004 agent identity and commit the owner's viewing key.                          |
| `phantom_shielded_swap`  | Route a swap through avnu under policy + audit (input must already be delivered to AgentShield). |
| `phantom_policy_status`  | Check whether the configured account may execute a given intent.                                 |
| `phantom_audit_log`      | Decrypt the owner's execution history with the viewing key.                                      |

## Running

Configuration is read entirely from environment variables (see the root `.env.example`) — no
`.env` file loading, since MCP servers get their environment from the launching client (e.g. your
`claude_desktop_config.json` / Claude Code MCP config).

```bash
pnpm --filter @phantomlayer/mcp build
node packages/mcp/dist/index.js
```

Required env: `STARKNET_RPC_URL`, `STARKNET_NETWORK`, `AGENT_OWNER_ADDRESS`,
`AGENT_OWNER_PRIVATE_KEY`, `AGENT_REGISTRY_ADDRESS`, `POLICY_ENGINE_ADDRESS`,
`AGENT_SHIELD_ADDRESS`, `AVNU_ROUTER_ADDRESS`, `AGENT_VIEWING_KEY`.
