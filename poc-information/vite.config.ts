import { defineConfig } from "vite";

import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: "main.js",
      },
    },
    sourcemap: mode === "development",
  },
}));
