import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  timeout: 120_000,
  workers: 1,
  fullyParallel: false,
  use: { actionTimeout: 10_000 },
  reporter: [['list']],
});
