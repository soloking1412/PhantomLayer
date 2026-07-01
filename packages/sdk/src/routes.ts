import { getQuotes, quoteToCalls } from '@avnu/avnu-sdk';
import type { Address, Felt, ShieldedIntent } from '@phantomlayer/core';
import { toFelt, u256ToFelts } from './calls.js';

export interface SwapQuote {
  /** avnu `multi_route_swap` calldata, forwarded verbatim by AgentShield. */
  swapCalldata: Felt[];
  minOut: bigint;
  quotedOut: bigint;
}

/** Produces the router calldata and bounds for a shielded swap. */
export interface RouteProvider {
  readonly exchangeAddress: Address;
  quote(intent: ShieldedIntent): Promise<SwapQuote>;
}

function feltsToU256(felts: Felt[], lowIndex: number): bigint {
  return BigInt(felts[lowIndex]!) + (BigInt(felts[lowIndex + 1]!) << 128n);
}

export interface MockRouteOptions {
  exchangeAddress: Address;
  /** AgentShield address — the swap output beneficiary. */
  agentShield: Address;
  rateNum?: bigint;
  rateDen?: bigint;
}

/** Deterministic provider for the mock exchange used on local devnet and in tests. */
export class MockRouteProvider implements RouteProvider {
  readonly exchangeAddress: Address;
  private readonly agentShield: Address;
  private readonly rateNum: bigint;
  private readonly rateDen: bigint;

  constructor(options: MockRouteOptions) {
    this.exchangeAddress = options.exchangeAddress;
    this.agentShield = options.agentShield;
    this.rateNum = options.rateNum ?? 1n;
    this.rateDen = options.rateDen ?? 1n;
  }

  async quote(intent: ShieldedIntent): Promise<SwapQuote> {
    const quotedOut = (intent.amountIn * this.rateNum) / this.rateDen;
    const swapCalldata = [
      toFelt(intent.tokenIn),
      ...u256ToFelts(intent.amountIn),
      toFelt(intent.tokenOut),
      ...u256ToFelts(quotedOut),
      ...u256ToFelts(intent.minOut),
      toFelt(this.agentShield),
      '0', // integrator_fee_amount_bps
      '0', // integrator_fee_recipient
      '0', // routes length
    ];
    return { swapCalldata, minOut: intent.minOut, quotedOut };
  }
}

export interface AvnuRouteOptions {
  /** avnu exchange address (AgentShield's configured router). */
  exchangeAddress: Address;
  /** Beneficiary/taker of the swap — the AgentShield contract. */
  takerAddress: Address;
  slippageBps?: bigint;
  baseUrl?: string;
}

/**
 * Live provider backed by the avnu aggregator. Pulls a real quote from existing Starknet
 * liquidity and uses avnu's own `quoteToCalls` to produce the exact `multi_route_swap` calldata,
 * which AgentShield forwards verbatim — so route encoding is always avnu-authoritative.
 */
export class AvnuRouteProvider implements RouteProvider {
  readonly exchangeAddress: Address;

  constructor(private readonly options: AvnuRouteOptions) {
    this.exchangeAddress = options.exchangeAddress;
  }

  async quote(intent: ShieldedIntent): Promise<SwapQuote> {
    const avnuOptions = this.options.baseUrl ? { baseUrl: this.options.baseUrl } : undefined;
    const quotes = await getQuotes(
      {
        sellTokenAddress: intent.tokenIn,
        buyTokenAddress: intent.tokenOut,
        sellAmount: intent.amountIn,
        takerAddress: this.options.takerAddress,
      },
      avnuOptions,
    );
    const best = quotes[0];
    if (!best) {
      throw new Error('avnu: no quote available for this pair');
    }

    const slippageBps = this.options.slippageBps ?? 50n;
    const built = await quoteToCalls(
      {
        quoteId: best.quoteId,
        slippage: Number(slippageBps) / 10000,
        takerAddress: this.options.takerAddress,
        executeApprove: false,
      },
      avnuOptions,
    );

    const swapCall = built.calls.find((call) => call.entrypoint === 'multi_route_swap');
    if (!swapCall) {
      throw new Error('avnu: no multi_route_swap call returned');
    }
    const swapCalldata = (swapCall.calldata as Array<string | number | bigint>).map(toFelt);

    // The authoritative min-out is the one avnu encoded into the forwarded calldata.
    return {
      swapCalldata,
      minOut: feltsToU256(swapCalldata, 6),
      quotedOut: best.buyAmount,
    };
  }
}
