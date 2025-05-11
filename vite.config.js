import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Penting: ini memungkinkan akses dari jaringan
    port: 5173, // Port default Vite
    strictPort: true, // Gagal jika port sudah dipakai
  },
});
