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
}

class ProductsMap {
  private readonly page: Page; 
  public readonly firstProductCard: Locator; 
  public readonly firstProductAddToCartOverlay: Locator; 
  public readonly cartPopupTitle: Locator;

  constructor(page: Page) {
    this.page = page; 
    this.firstProductCard = page.locator('.features_items .single-products').first(); 
    this.firstProductAddToCartOverlay = page.locator('.features_items a[data-product-id="1"]').nth(1);  
    this.cartPopupTitle = page.getByRole('heading', { name: 'Added!', exact: true });
  }
}
