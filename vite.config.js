import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { resolve } from 'path';
import fs from 'fs';
import { copyFileSync } from 'fs';

export default defineConfig({
  server: {
    port: 3200,
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        fitur: resolve(__dirname, 'fitur.html'),
      },
    },
  },
  plugins: [
    preact({
      prerender: {
        enabled: true,
        renderTarget: '#app',
        prerenderScript: resolve(__dirname, 'src/prerender.tsx'),
      },
    }),
    {
      name: 'copy-seo-files',
      closeBundle() {
        const seoFiles = ['robots.txt', 'sitemap.xml'];
        seoFiles.forEach(file => {
          const srcPath = resolve(__dirname, file);
          const destPath = resolve(__dirname, 'dist', file);
          if (fs.existsSync(srcPath)) {
            copyFileSync(srcPath, destPath);
            console.log(`Copied ${file} to dist folder`);
          }
        });
      },
    },
  ],
  optimizeDeps: {
    include: ['aos'],
  },
  css: {
    devSourcemap: true,
  },
});
