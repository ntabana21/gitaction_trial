
import react from '@vitejs/plugin-react'
import {defineConfig} from "eslint/config";

// @ts-expect-errore no error we just ignore it
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})