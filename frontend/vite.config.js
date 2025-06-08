import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public',
    emptyOutDir: true
  },
  publicDir: 'static' // Change the public directory to avoid conflicts
})
