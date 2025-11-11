import { defineConfig } from 'vite';

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
    minify: 'terser'
  }
});
