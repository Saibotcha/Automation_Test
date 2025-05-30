
import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

test('Login with environment variables', async ({ page }) => {

  await page.goto('/login');
  await page.fill('#username', process.env.LOGIN_USERNAME);
  await page.fill('#password', process.env.PASSWORD);
  await page.click('button[type="submit"]');

 });


