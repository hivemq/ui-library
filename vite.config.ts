import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'

import packageData from './package.json'

type BuildEnvironment = 'storybook' | 'library'

const buildEnvironment: BuildEnvironment = (process.env.BUILD_ENV as BuildEnvironment) || 'library'

const libPlugins = [
  react({
    jsxRuntime: 'classic'
  }),
  dts({
    rollupTypes: true
  }),
  viteStaticCopy({
    targets: [
      {
        src: './src/export/styles.css',
        dest: '.'
      },
      {
        src: './src/export/fonts',
        dest: '.'
      },
      {
        src: './src/export/tailwind.config.js',
        dest: '.'
      }
    ]
  })
]

const storybookPlugins = [
  react({
    jsxRuntime: 'automatic'
  })
]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: buildEnvironment === 'storybook' ? storybookPlugins : libPlugins,
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external:
        buildEnvironment === 'storybook'
          ? []
          : [...Object.keys(packageData.peerDependencies), ...Object.keys(packageData?.dependencies || [])],
      output: {
        // Since we publish our ./src folder, there's no point
        // in bloating sourcemaps with another copy of it.
        sourcemapExcludeSources: true
      }
    },
    target: 'esnext',
    sourcemap: true,
    minify: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@hivemq/ui-shell': resolve(__dirname, './src/lib.ts')
    }
  }
})
