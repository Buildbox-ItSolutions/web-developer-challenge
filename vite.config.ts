import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@honkhonk/vite-plugin-svgr';
import tsConfigpaths from 'vite-tsconfig-paths';
import { EsLinter, linterPlugin } from 'vite-plugin-linter';

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-styled-components']],
      },
    }),
    tsConfigpaths(),
    linterPlugin({
      include: ['./src/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    svgr(),
  ],
}));
