import { defineConfig } from 'vitest/config'

export default defineConfig({
  optimizeDeps: {
    entries: []
  },
  test: {
    setupFiles: ['./test/index.test.ts'],
    testTimeout: 300000
  }
})
