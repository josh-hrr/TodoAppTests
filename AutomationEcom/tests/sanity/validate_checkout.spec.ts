import { test, expect } from '../../fixtures/ui_fixtures.ts' 

test.describe.configure( { mode: 'serial' })
test.describe("validate_checkout_without_login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test('tc1_validate_homePage_loads', async ({ homePage }) => { 
    const title = await homePage.getHomeTitle();
    expect(title).toBe('Automation Exercise');
  });

  test('tc2_validate_productsPage_loads', async ({ homePage, page }) => { 
    await homePage.clickOnProductsPage();
    expect(page.url()).toContain('/products');
  });
  test('tc3_validate_product_can_be_added_to_cart_from_products_page', async ({ homePage, productsPage, page }) => {
    await homePage.clickOnProductsPage(); 
    await productsPage.addFirstProductToCart(); 
    await expect(productsPage.cartPopupTitle).toBeVisible();
    await expect(productsPage.cartPopupTitle).toHaveText('Added!');
  }) 
  test('tc4_validate_productQuantity_matches_cartPage', async ({ homePage, productsPage, productDetailPage, cartPage }) => {
    const myQuantity = '5'
    await homePage.clickOnProductsPage(); 
    await productsPage.viewProductOnFirstItemBtn();
    await productDetailPage.specifyQuantityAndAddToCart(myQuantity);
    // ensure the cart popup appears and has the expected text
    await expect(productsPage.cartPopupTitle).toBeVisible();
    await expect(productsPage.cartPopupTitle).toHaveText('Added!');
    await productsPage.viewCartPopupBtn();
    const getQuantityFromCartPage = await cartPage.getQuantityOfSpecifiedProduct();
    // assert that the quantity in the cart matches what was specified
    expect(getQuantityFromCartPage).toBe(myQuantity);
  })
});