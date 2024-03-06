import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssNested from 'postcss-nested'

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    base: mode === 'production' ? '/trivia-explorer/' : '/',
    plugins: [react()],
    css: {
      postcss: {
        plugins: [postcssNested],
      },
    },
  })
}
