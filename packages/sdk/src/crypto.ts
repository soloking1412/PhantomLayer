import { chacha20poly1305 } from '@noble/ciphers/chacha.js';
import { sha256 } from '@noble/hashes/sha2.js';
import { bytesToHex, hexToBytes } from '@noble/hashes/utils.js';
import { hash } from 'starknet';
import type { AuditRecord, Felt } from '@phantomlayer/core';

const VIEWING_KEY_BYTES = 31; // fits inside the felt252 range
const NONCE_BYTES = 12;

/** Generates a fresh owner viewing-key secret. */
export function generateViewingKey(): Felt {
  return `0x${bytesToHex(crypto.getRandomValues(new Uint8Array(VIEWING_KEY_BYTES)))}`;
}

/** The on-chain commitment stored in the registry; reveals nothing about the secret. */
export function viewingKeyCommitment(secret: Felt): Felt {
  return hash.computePoseidonHashOnElements([secret]);
}

/** Encrypts an audit record under the viewing key into a felt array suitable for `audit_blob`. */
export function encryptAuditRecord(record: AuditRecord, secret: Felt): Felt[] {
  const nonce = crypto.getRandomValues(new Uint8Array(NONCE_BYTES));
  const plaintext = new TextEncoder().encode(JSON.stringify(record));
  const ciphertext = chacha20poly1305(cipherKey(secret), nonce).encrypt(plaintext);
  const blob = new Uint8Array(nonce.length + ciphertext.length);
  blob.set(nonce, 0);
  blob.set(ciphertext, nonce.length);
  return packBytes(blob);
}

/** Decrypts an audit blob; returns null when the blob was not encrypted for this key. */
export function decryptAuditRecord(felts: Felt[], secret: Felt): AuditRecord | null {
  try {
    const blob = unpackBytes(felts);
    const nonce = blob.slice(0, NONCE_BYTES);
    const ciphertext = blob.slice(NONCE_BYTES);
    const plaintext = chacha20poly1305(cipherKey(secret), nonce).decrypt(ciphertext);
    return JSON.parse(new TextDecoder().decode(plaintext)) as AuditRecord;
  } catch {
    return null;
  }
}

function cipherKey(secret: Felt): Uint8Array {
  return sha256(hexToBytes(normalizeHex(secret)));
}

function normalizeHex(value: Felt): string {
  const hex = value.startsWith('0x') ? value.slice(2) : value;
  return hex.length % 2 === 1 ? `0${hex}` : hex;
}

function packBytes(bytes: Uint8Array): Felt[] {
  const felts: Felt[] = [`0x${bytes.length.toString(16)}`];
  for (let offset = 0; offset < bytes.length; offset += 31) {
    let acc = 0n;
    for (const byte of bytes.slice(offset, offset + 31)) {
      acc = (acc << 8n) | BigInt(byte);
    }
    felts.push(`0x${acc.toString(16)}`);
  }
  return felts;
}

function unpackBytes(felts: Felt[]): Uint8Array {
  const length = Number(BigInt(felts[0]!));
  const out = new Uint8Array(length);
  let offset = 0;
  for (let i = 1; i < felts.length && offset < length; i += 1) {
    const size = Math.min(31, length - offset);
    let acc = BigInt(felts[i]!);
    for (let j = size - 1; j >= 0; j -= 1) {
      out[offset + j] = Number(acc & 0xffn);
      acc >>= 8n;
    }
    offset += size;
  }
  return out;
}
