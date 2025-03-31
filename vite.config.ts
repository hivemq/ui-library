import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import packageData from './package.json'

const libPlugins = [
  react(),
  dts({
    rollupTypes: true,
  }),
]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: libPlugins,
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize peer dependencies that shouldn't be bundled
      external: Object.keys(packageData.peerDependencies),
    },
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
    },
  },
})
