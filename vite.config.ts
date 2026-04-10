import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // これを追加（または '/リポジトリ名/' ）
  plugins: [
    react(),
    tailwindcss(),
  ],
})
