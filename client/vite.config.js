import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// https://vitejs.dev/config/
import path from "path";
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
  },
  plugins: [react()],
});
