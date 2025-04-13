import { fileURLToPath, URL } from 'node:url'
import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[name]',
      svgSpriteId: 'svg-sprite',
      inject: 'body-last',
      customDomId: '__svg__icons__dom__',
      svgoOptions: {
        plugins: [
          {
            name: 'removeAttrs',
            params: {
              attrs: ['fill', 'stroke', 'class', 'style']
            }
          },
          {
            name: 'removeViewBox',
            active: false
          }
        ]
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
