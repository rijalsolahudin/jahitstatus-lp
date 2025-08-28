import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Konfigurasi server development
  server: {
    port: 3200, // Port kustom yang diinginkan
    open: true, // Buka browser secara otomatis saat server dimulai
  },
  // Konfigurasi build
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  // Konfigurasi untuk optimasi
  optimizeDeps: {
    include: ['aos'],
  },
  // Konfigurasi untuk CSS
  css: {
    devSourcemap: true,
  },
});