import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist", // default, but make it explicit
    chunkSizeWarningLimit: 1000, // optional: prevent chunk warning spam
    rollupOptions: {
      output: {
        manualChunks: undefined, // optional: you can define chunk splitting if needed
      },
    },
  },
});
