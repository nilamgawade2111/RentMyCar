import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['rentmycar.framework.autopath.ai', 'rentmycar.localhost', 'localhost']
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    },
    // Ensure the build is optimized for Apache deployment
    assetsDir: 'assets',
    emptyOutDir: true,
    manifest: true,
    sourcemap: true
  }
});