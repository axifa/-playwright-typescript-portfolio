import { test, expect, Page } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

let todoPage: TodoPage;

test.describe('Todo Page',() => {

test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.goto();
});

test.afterEach(async({page}) => {
    console.log('Test Finished');
});

test('user can add a todo item', async ({ page }) => {
    await todoPage.addTodo('Buy groceries');
    await expect(page.locator('.todo-list li')).toHaveText('Buy groceries');
});

test('user can complete a todo item', async ({ page }) => {
    await todoPage.addTodo('Buy groceries');
    await todoPage.completeTodo();
    await expect(page.locator('.todo-list li')).toHaveClass(/completed/);
});

test('user can see page title', async ({ page }) => {
    await expect(page).toHaveTitle('React • TodoMVC');
});

test('user can see the todo input box', async ({ page }) => {
    await expect(page.locator('.new-todo')).toBeVisible();
});

});