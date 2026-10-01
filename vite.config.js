import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages project site serves from /<repo-name>/, not the domain root.
  base: '/locus-advisory/',
  plugins: [react(), tailwindcss()],
})
