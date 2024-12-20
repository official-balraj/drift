import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import path from "path"

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "./src/components"),
      Assets: path.resolve(__dirname, "./src/assets"),
    },
  },
  plugins: [react(), tsconfigPaths()],
})
