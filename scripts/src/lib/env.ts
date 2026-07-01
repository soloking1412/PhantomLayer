import 'dotenv/config';

export function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`missing environment variable ${name} (see .env.example)`);
  }
  return value;
}

export function optional(name: string, fallback: string): string {
  return process.env[name] ?? fallback;
}
