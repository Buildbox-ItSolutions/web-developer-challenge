import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      _components: path.resolve(__dirname, "./src/components"),
      _assets: path.resolve(__dirname, "./src/assets"),
      _types:path.resolve(__dirname,'./src/types')
    },
  },
});
