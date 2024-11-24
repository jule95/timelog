import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-expect-error TS7016
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      emitError: true,
      emitWarning: true,
      failOnError: false,
      failOnWarning: false,
    }),
  ],
});
