import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/

export default defineConfig({
  //assetsInclude: ['**/*.svg'],
  //publicDir: "./src/assets/",
  plugins: [
    react(),
    ViteImageOptimizer({
      svg: {
        floatPrecision: 0,
      }
    }),
  ],
});