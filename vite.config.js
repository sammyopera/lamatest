import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.png', '**/*.PNG'], // This line includes both lowercase and uppercase extensions
  plugins: [react()],
})
