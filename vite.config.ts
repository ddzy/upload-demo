import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: `http://localhost:3001`,
      },
    },
  },

  build: {
    outDir: 'dist/client',
    emptyOutDir: true,
  },
});
