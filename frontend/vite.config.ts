import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // we need to add a proxy so /api calls go to the spring boot backend 
})
