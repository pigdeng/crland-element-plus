import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import requireTransform from "vite-plugin-require-transform";
import VitePluginQiankun from 'vite-plugin-qiankun'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: "/ued-pc-web",
  preview: {
    port: 8128,
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: false, //按需导入组件，但是不导入样式文件（sass）
        }),
      ],
    }),
    requireTransform({
      fileRegex: /.ts$|.tsx$|.vue$/,
      //   fileRegex:/.js$|.jsx$|.vue$/
    }),
    VitePluginQiankun('ued-pc-web', { // 微应用名字，与主应用注册的微应用名字保持一致
      useDevMode: true,
    }),
  ],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "./src/assets/css/theming.scss"`, // 添加公共样式sass变量(此处为全局sass变量，跟element-plus无关)
  //     },
  //   },
  // },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          lodash: ["lodash"],
        },
      },
    },
  },
});
