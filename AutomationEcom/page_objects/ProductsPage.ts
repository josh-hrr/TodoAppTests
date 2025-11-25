// page_objects/ProductsPage.ts
import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  private readonly page: Page;
  private readonly map: ProductsMap;

  constructor(page: Page) {
    this.page = page;
    this.map = new ProductsMap(page);
  } 

  async addFirstProductToCart() { 
    await this.map.firstProductCard.hover(); 
    await this.map.firstProductAddToCartOverlay.click();
  } 
  get cartPopupTitle() {
    return this.map.cartPopupTitle;
  }
  async viewCartPopupBtn() {
    await this.map.viewCartPopupBtn.click();
  }
  async viewProductOnFirstItemBtn() {
    await this.map.viewProductOnFirstItemBtn.click()
  }

}

class ProductsMap {
  private readonly page: Page;
  public readonly firstProductCard: Locator;
  public readonly firstProductAddToCartOverlay: Locator;
  public readonly cartPopupTitle: Locator;
  public readonly viewCartPopupBtn: Locator;
  public readonly viewProductOnFirstItemBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstProductCard = page
      .locator('.features_items .single-products')
      .first();
    this.firstProductAddToCartOverlay = page
      .locator('.features_items a[data-product-id="1"]')
      .nth(1);
    this.cartPopupTitle = page.getByRole('heading', {
      name: 'Added!',
      exact: true,
    });
    this.viewCartPopupBtn = page.getByRole('link', { name: 'View Cart' });
    this.viewProductOnFirstItemBtn = page.locator('.features_items .col-sm-4').first().getByRole('link', { name: 'View Product' }).first();
  }
}
