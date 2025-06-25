// tests/saucedemo.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');

test.describe('SauceDemo Playwright Training', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('1. Validate page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Swag Labs/);
  });

  test('2. Fill login form with dummy credentials', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('3. Use locators and click login', async ({ page }) => {
    await page.locator('input#user-name').fill('standard_user');
    await page.locator('input#password').fill('secret_sauce');
    await page.locator('input[type="submit"]').click();
    await expect(page.locator('.title')).toBeVisible();
  });

  test('4. Various locator strategies', async ({ page }) => {
    await expect(page.locator('text=Swag Labs')).toBeVisible();
    await expect(page.locator('css=.login_logo')).toBeVisible();
    await expect(page.locator('xpath=//input[@id="user-name"]')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  });

  test('5. Assertions with expect()', async ({ page }) => {
    await expect(page.locator('#login-button')).toHaveText('Login');
    await expect(page.locator('#login-button')).toBeVisible();
  });

  test('6. Filling a form', async ({ page }) => {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('8. Handling dropdowns, buttons, radio buttons', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await page.selectOption('select.product_sort_container', 'za'); // dropdown
    await expect(page.locator('.inventory_item_name').first()).toBeVisible();
  });

  test('9. Handling JS Alerts (simulate)', async ({ page }) => {
    await page.evaluate(() => alert('Test Alert'));
    page.once('dialog', async dialog => {
      expect(dialog.message()).toBe('Test Alert');
      await dialog.accept();
    });
  });

  test('10. Working with iFrames (mock example)', async ({ page }) => {
    await page.setContent(`
      <iframe srcdoc="<html><body><h1 id='inside'>Hello</h1></body></html>"></iframe>
    `);
    const frame = await page.frameLocator('iframe');
    await expect(frame.locator('#inside')).toHaveText('Hello');
  });
});
