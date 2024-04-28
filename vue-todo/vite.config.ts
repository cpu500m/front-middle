import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { join} from "path";
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  build: {
    emptyOutDir: false,
  },
  mode: "development",
  resolve: {
    alias: {
      "@": join(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // Enabled by default
  ],
  define: { "process.env": {} },
});
