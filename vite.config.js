import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssNested from 'postcss-nested'

const mode = import.meta.env.MODE

// https://vitejs.dev/config/
export default defineConfig({
  base: mode === 'production' ? '/trivia-explorer/' : '/',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [postcssNested],
    },
  },
})
