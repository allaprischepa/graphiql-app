import { defineConfig } from 'vitest/dist/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './tests.setup.ts',
    coverage: {
      all: true,
    },
  },
});
