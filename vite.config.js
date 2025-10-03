import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 👈 this is the key line
    },
  },
  server: {
    host: true, // 👈 exposes on your local network
    port: 3000, // (optional) fix port instead of random one
  },
  base: "./", // 👈 important for Netlify
});
