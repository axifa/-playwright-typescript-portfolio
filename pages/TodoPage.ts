import {Page} from '@playwright/test';

export class TodoPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(){
        await this.page.goto('https://demo.playwright.dev/todomvc');
    }

    async addTodo(text: string) {
        await this.page.locator('.new-todo').fill(text);
        await this.page.locator('.new-todo').press('Enter');
    }
    async completeTodo(){
        await this.page.locator('.todo-list li .toggle').click();
    }
}


test.describe('Tests for todo page', () => {

test.beforeEach(async ({page}){
    await page.goto('https://demo.playwright.dev/todomvc');
});

test('Check page title', async({page}) => {
    await expect(page).toHaveTitle('React • TodoMVC');
});

});