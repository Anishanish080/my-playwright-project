import { test, expect } from '@playwright/test';

test('basic test example', async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
});