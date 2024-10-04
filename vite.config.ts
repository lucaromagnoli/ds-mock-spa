import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

process.env = {...process.env, ...loadEnv("development", process.cwd())};
const apiUrl = process.env.VITE_API_URL;


export default defineConfig({
  plugins: [react()],
  define: {
    __API_URL__: JSON.stringify(apiUrl),
  },
  server: {
    proxy: {
      '/api': {
        target: apiUrl,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
