import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Rythamictunes/', // Set a default base path
  plugins: [react()],
  
})
