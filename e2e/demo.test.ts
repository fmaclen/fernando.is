import { expect, test } from '@playwright/test';

test('home page introduces Fernando', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('strong', { hasText: 'Fernando Maclen' })).toBeVisible();
});
