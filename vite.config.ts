import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr(), checker({ typescript: true })]
})
