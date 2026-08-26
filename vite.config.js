import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/psych-work-exam1/',
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
          if (id.includes('/src/chapters/ch01')) return 'ch01';
          if (id.includes('/src/chapters/ch02')) return 'ch02';
          if (id.includes('/src/chapters/ch03')) return 'ch03';
          if (id.includes('/src/chapters/ch04')) return 'ch04';
          if (id.includes('/src/chapters/ch06')) return 'ch06';
          if (id.includes('/src/data/exam')) return 'exam';
        }
      }
    }
  }
});
