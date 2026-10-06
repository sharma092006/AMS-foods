import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        '..',
        'C:/Users/Administrator/.gemini/antigravity-ide/brain/15a86399-ce07-4cff-9aeb-049afd528c7a/'
      ]
    }
  }
})
