import {test, expect} from '@playwright/test';

test.describe('Tests for todo page', () => {

test.beforeEach(async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
});

test('Check page title', async({page}) => {
    await expect(page).toHaveTitle('React • TodoMVC');
});

});