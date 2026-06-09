import { test, expect } from '@playwright/test';
//hey go grab test and expect tools from playwright

test('has title', async ({ page }) => { 
  //hey create a test called 'has title' and give me a browser page to work with
  await page.goto('https://playwright.dev/');
  //"open this browser and go to this url"
  

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
}); //check that it contains the word playwright

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
