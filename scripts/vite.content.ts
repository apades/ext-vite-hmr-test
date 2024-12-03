import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { port, r } from './utils'

export default defineConfig(() => {
  return {
    plugins: [
      react() as any,
    ],
    resolve: {
      alias: {
        '@root': r('src'),
      },
    },
    server: {
      port,
    },
  }
})
