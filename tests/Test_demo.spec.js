import {test,expect} from "@playwright/test";

test('opencart', async({page}) => {

    await page.goto('https://opencart.abstracta.us/')
    await expect(page).toHaveTitle(/Your Store/);
    // Assert search bar is present and enabled
    await expect(page.locator('input[name="search"]')).toBeVisible();
    // Assert top links are visible (My Account)
    await expect(page.getByRole('link', { name: 'My Account', exact: true })).toBeVisible();
    await page.click('a[href="http://opencart.abstracta.us:80/index.php?route=product/category&path=24"]')
    await page.click('//a[text()="HTC Touch HD"]');
    await page.waitForTimeout(2000);
    const Input_quantity = await page.locator('//input[@id="input-quantity"]');
    await Input_quantity.fill('2');
    await page.click('#button-cart');
    await page.click('#cart-total');
    await page.waitForTimeout(2000);
    await page.click('a:has-text("Checkout")');
    await page.waitForTimeout(2000);
    await page.fill('[name="email"]', 'test@example.com');
    await page.waitForTimeout(2000);
    await page.fill('[name="password"]', '12345678');
    await page.waitForTimeout(2000);
    await page.click('#button-login');


})