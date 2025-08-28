import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';
import { copyFileSync } from 'fs';

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
  // Plugin untuk menyalin file SEO (robots.txt dan sitemap.xml) ke folder dist
  plugins: [
    {
      name: 'copy-seo-files',
      closeBundle() {
        // Pastikan robots.txt dan sitemap.xml disalin ke folder dist
        const seoFiles = ['robots.txt', 'sitemap.xml'];
        seoFiles.forEach(file => {
          const srcPath = resolve(__dirname, file);
          const destPath = resolve(__dirname, 'dist', file);
          if (fs.existsSync(srcPath)) {
            copyFileSync(srcPath, destPath);
            console.log(`Copied ${file} to dist folder`);
          }
        });
      }
    }
  ],
  // Konfigurasi untuk optimasi
  optimizeDeps: {
    include: ['aos'],
  },
  // Konfigurasi untuk CSS
  css: {
    devSourcemap: true,
  },
});