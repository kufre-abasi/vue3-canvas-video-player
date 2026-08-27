import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [vue()],
  publicDir: false,
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      name: 'Vue3CanvasVideoPlayer',
      fileName: 'vue3-canvas-video-player',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
