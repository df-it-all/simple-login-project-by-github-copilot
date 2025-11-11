import { defineConfig } from 'vite';
import { resolve } from 'path';

/**
 * Vite 設定檔
 * 用途：配置專案建置設定
 */
export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        welcome: resolve(__dirname, 'welcome.html')
      }
    }
  }
});
