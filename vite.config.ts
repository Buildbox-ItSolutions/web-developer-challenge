import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log(import.meta)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: import.meta?.env?.VITE_PORT || 3000
  }
})
