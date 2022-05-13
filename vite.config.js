import path from 'path'
import WindiCSSPlugin from 'vite-plugin-windicss'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// __dirname gets converted to path (wtf)
const _dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    WindiCSSPlugin(),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(_dirname, 'src')}/`,
    }
  },
  base: './',
})
