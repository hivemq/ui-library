import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: ['**/*.spec.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      setupFiles: [],
      coverage: {
        provider: 'v8',
        include: ['src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        reporter: ['text', 'lcovonly'],
        reportsDirectory: './coverage'
      },
      reporters: ['default', 'junit']
    }
  })
)
