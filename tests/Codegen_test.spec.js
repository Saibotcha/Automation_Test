import { test, expect } from '@playwright/test';


test('demoqa', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('heading', { name: 'Forms' }).click();
  await page.getByText('Practice Form').click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'First Name' }).fill('S');
  await page.getByRole('textbox', { name: 'First Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'First Name' }).fill('Sai');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('botcha');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('test@gmail.com');
  await page.getByText('Male', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('1234567890');
  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('combobox').nth(1).selectOption('2009');
  await page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('9');
  await page.locator('#fixedban div').nth(1).click();
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('no');
  await page.getByText('Economics', { exact: true }).click();
  await page.getByText('Sports').click();
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('no');
  await page.locator('#state svg').click();
  await page.locator('#react-select-3-input').fill('a');
  await page.getByText('Uttar Pradesh', { exact: true }).click();
  await page.locator('#city svg').click();
  await page.getByText('Lucknow', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('#close-fixedban').click();
  await page.locator('[id="google_ads_iframe_\\/21849154601\\,22343295815\\/Ad\\.Plus-Anchor_0"]').contentFrame().locator('#cbb').click();
});