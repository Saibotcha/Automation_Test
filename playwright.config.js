// @ts-check
import { devices, defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config(); // ✅ Load .env variables

const config = defineConfig({
  testDir: './tests',
  retries: 1,
  workers: 3,

  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },

  reporter: 'html',

  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'on',
    trace: 'on',
    video: 'off',
    launchOptions: {
      slowMo: 200
    },
    baseURL: process.env.BASE_URL, // ✅ Use .env variable
  },
});

export default config;

