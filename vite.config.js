import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: './', // setting base path so it starts from "./" instead of "/"
  build: {
    outDir: 'dist-react'
  },
  server: {
    port: 5123,
    strictPort: true,
  },
})
