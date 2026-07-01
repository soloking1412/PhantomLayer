import type { NextConfig } from 'next';

const config: NextConfig = {
  transpilePackages: ['@phantomlayer/sdk', '@phantomlayer/core'],
};

export default config;
