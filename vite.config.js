import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three-core': ['three'],
          'three-fiber': ['@react-three/fiber', '@react-three/drei'],
          'gsap': ['gsap', '@gsap/react'],
          'globe': ['react-globe.gl'],
          'spring': ['react-spring', 'react-spring-3d-carousel'],
        },
      },
    },
  },
})
