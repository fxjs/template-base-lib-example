import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  define: {
    'process.env': {},
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      src: resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'BaseLibExample',
      fileName: (format) => `base-lib-example.${format}.js`,
      formats: ['umd', 'es'],
    },
    rollupOptions: {
      logLevel: 'silent',
      // 确保外部化处理那些你不想打包进库的依赖
      external: [],
    },
  },
});
