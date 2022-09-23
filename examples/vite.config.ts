import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// vite
import requireTransform from "vite-plugin-require-transform";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  plugins: [
    vue(),
    requireTransform({
      fileRegex: /.js$|.vue$|.ts$/,
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    // 配置路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
