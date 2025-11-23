import { test, expect } from '../../fixtures/ui_fixtures.ts'
import { Home } from '../../page_objects/Home.ts' 

test.describe.configure( { mode: 'serial' })
test.describe("validate_checkout", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test('tc1_validate_homepage_loads', async ({ homePage }) => { 
    const title = await homePage.getHomeTitle();
    expect(title).toBe('Automation Exercise');
  });

  test('tc2_validate_product_can_be_added_to_cart', async ({ homePage, page }) => { 
    await homePage.clickOnProductsPage();
    expect(page.url()).toContain('/products');
  });
});