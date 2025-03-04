import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: "./",
  server: {
    port: 6000
  },
  build: {
    emptyOutDir: true,
    outDir: "../../dist/portfolio",
  },
  plugins: [tailwindcss(), react()],
});
