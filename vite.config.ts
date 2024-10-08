import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
// @ts-ignore
import eslintPlugin from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  AutoImport({
    imports: ["vue", "vue-router", "pinia"],
    eslintrc: {
      enabled: false,
    },
    dts: "src/auto-imports.d.ts",
  }),
  Components({}),
  eslintPlugin({
    include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
    exclude: ['node_modules/**', 'dist/**'],    // 指定不需要检查的文件
    fix: true,    // 是否自动修复
    cache: false    // 是否启用缓存
  })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),

    }
  },
})
