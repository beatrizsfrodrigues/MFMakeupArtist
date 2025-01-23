import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // Ensure base is set for deployment (use "/" for Vercel)
  base: "/",
  build: {
    outDir: "dist", // Ensure this matches your output folder
  },
  server: {
    // Optional: Configure for local dev testing
    host: true,
    port: 3000,
  },
});
