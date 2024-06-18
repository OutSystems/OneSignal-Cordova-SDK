import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts()],
  build: {
    minify: false,
    outDir: 'outsystems',
    target: 'es2020',
    lib: {
      entry: './src/outsystems/index.ts',
      name: 'OSOneSignal',
      fileName: (format) => `manager.${format === 'es' ? 'mjs' : format === 'cjs' ? 'cjs' : 'js'}`,
      formats: ['umd'],
    },
    rollupOptions: {
      external: ['cordova'],
    },
  },
});