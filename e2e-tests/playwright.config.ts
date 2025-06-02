import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  reporter: [['html',{ outputFolder: 'test-report' }], ['list'], ['allure-playwright']],
  use: {
    baseURL: 'https://ver.flixole.com',
    trace: 'on-first-retry',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  projects:  [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    }
  ],
});