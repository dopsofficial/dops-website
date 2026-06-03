import { test, expect } from '@playwright/test';

test('homepage loads and catalog can be opened', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/DOPS Parfume/);
  await expect(page.locator('nav')).toContainText('DOPS');
  await page.locator('a[href="#catalog"]').first().click();
  await expect(page.locator('#catalog')).toBeVisible();
  await expect(page.locator('#catalog-grid')).toBeVisible();
});
