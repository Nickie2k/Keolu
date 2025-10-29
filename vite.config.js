import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Keolu/',
  build: {
    // ... other build options
    cssMinify: false, // <-- ADD THIS LINE
  }
})
