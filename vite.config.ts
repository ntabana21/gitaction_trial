import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// @ts-ignore
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})