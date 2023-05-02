import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@entities': '/src/entities',
      '@features': '/src/features',
      '@shared': '/src/shared',
      '@app': '/src/app',
      '@pages': '/src/pages',
      '@widgets': '/src/widgets'
    }
  },
})
