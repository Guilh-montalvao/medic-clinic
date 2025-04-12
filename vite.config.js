
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    allowedHosts: [
      '7d5ec977-6eb3-4d7b-a026-a6fc60a63745.lovableproject.com',
      'localhost'
    ]
  }
});
