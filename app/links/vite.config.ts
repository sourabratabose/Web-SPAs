import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: "./",
  build: {
    emptyOutDir: true,
    outDir: "../../dist/links/"
  },
  plugins: [react(), tailwindcss()],
})
