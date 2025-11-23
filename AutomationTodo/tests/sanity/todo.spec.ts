import { test, expect } from '@playwright/test'
import { type Page } from '@playwright/test'

let page: Page;

test.describe.configure( {mode: 'serial'})
test.describe("Todo Test Suite", () => {    

  test.beforeAll("Environment Setup", async ({ browser }) => {
    page = await browser.newPage();
  }) 
  test.afterAll("Closing Environment", () => {
    page.close()
  })

  test("Test 1 - Add a new todo", async () => { 
    await page.goto('http://localhost:5173/'); 
    const todoText = 'new todo goes here 1';
    await page.click('input[class="new-todo"]');
    await page.fill('input[class="new-todo"]', todoText);
    await page.keyboard.press('Enter')
    const todoListItem = page.locator(
      "ul[class='todo-list'] li:nth-last-child(1)"
    );
    await page.waitForTimeout(2000)
    await expect(todoListItem).toContainText(todoText);
  })

  test("Test 2 - Mark todo task as completed", async () => { 
    await page.click('li:nth-child(1) div:nth-child(1) input:nth-child(1)');
    const markedCompleted = page.locator('li[class="completed"]:nth-child(1)')
    await page.waitForTimeout(2000);
    await expect(markedCompleted).toBeVisible()
  })
  
})
