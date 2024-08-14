import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      dirs: ['src/components', 'src/views'],
      resolvers: [PrimeVueResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    fs: {
      strict: false // Disable strict file serving restrictions.
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['@/assets/styles'],
        additionalData:
          '@import "@/assets/styles/base/_variables.scss"; @import "@/assets/styles/base/_mixins.scss";'
      }
    }
  }
})
