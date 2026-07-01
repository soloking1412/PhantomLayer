import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/tongo.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  sourcemap: true,
});
