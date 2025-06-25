const { test, expect } = require('@playwright/test');

test('Amazon login page automation', async ({ page }) => {
  // Go to Amazon homepage
  await page.goto('https://everrise-test.itrobes.in/');

  // Wait for the sign-in link to be visible
  await page.waitForSelector('h5:has-text("Sign In")', { state: 'visible' });


  // Fill in email/phone
  await page.waitForSelector('input[name="email"]', { state: 'visible' });
  await page.fill('input[name="email"]', 'superadmin@gmail.com');


  // Fill in password
  await page.waitForSelector('input[name="password"]', { state: 'visible' });
  await page.fill('input[name="password"]', 'EVdemo2024');
  await page.click('span:has-text("Sign In ")');

  // Optionally, check for successful login (e.g., presence of account name)
  // await expect(page.locator('span.nav-line-1')).toContainText('Hello, YourName');
});