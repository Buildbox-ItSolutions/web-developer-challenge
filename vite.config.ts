import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@global': path.resolve(__dirname, './src/global'),
      '@types': path.resolve(__dirname, './src/global/types'),
      '@pages': path.resolve(__dirname, './src/global/pages'),
      '@styles': path.resolve(__dirname, './src/global/styles'),
      '@config': path.resolve(__dirname, './src/global/config'),
      '@services': path.resolve(__dirname, './src/global/services'),
      '@components': path.resolve(
        __dirname,
        './src/global/components'
      ),
    },
  },
});
