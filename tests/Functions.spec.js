


function greet() {
    console.log("Hello, world!");
}

greet(); // Output: Hello, world!

function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // Output: 8





const { chromium } = require('playwright');

// Reusable function
async function searchGoogle(page, query) {
    await page.goto('https://www.google.com');
    await page.fill('input[name="q"]', query);
    await page.keyboard.press('Enter');
    await page.waitForSelector('#search');
}

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    // Use your function
    await searchGoogle(page, 'Playwright JavaScript functions');

    await browser.close();
})();






