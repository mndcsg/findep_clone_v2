import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // ✅ 关键：设置为仓库名称（带斜杠）
  base: '/findep_clone_v2/',
  
  build: {
    target: 'esnext',
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});