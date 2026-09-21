import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Avoid caching partially written files during saves on Windows.
      awaitWriteFinish: {
        stabilityThreshold: 300,
        pollInterval: 50,
      },
    },
  },
})
