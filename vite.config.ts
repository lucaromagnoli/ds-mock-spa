import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: "/ds-mock-spa",
  build: {
    outDir: "build",
  },
});
