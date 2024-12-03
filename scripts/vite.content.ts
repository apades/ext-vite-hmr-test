import { defineConfig } from 'vite'
import { port, r } from './utils'

export default defineConfig(({ command }) => {
  return {
    resolve: {
      alias: {
        '@root': r('src'),
      },
    },
    base: command === 'serve' ? `http://localhost:${port}/` : '/dist/',
    server: {
      port,
      hmr: {
        host: 'localhost',
      },
    },
  }
})
