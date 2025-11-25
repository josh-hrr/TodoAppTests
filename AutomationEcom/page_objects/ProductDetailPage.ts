import { Page, Locator } from '@playwright/test';
export class ProductDetailPage {
  private readonly page: Page;
  private readonly map: ProductDetailMap;
  constructor(page: Page) {
    this.page = page
    this.map = new ProductDetailMap(page)
  }

  async specifyQuantityAndAddToCart(quantity: string) {
    await this.map.quantityInput.fill(quantity);
    await this.map.addToCartBtn.click();
  } 
}

class ProductDetailMap {
  private readonly page: Page;
  public readonly quantityInput: Locator; 
  public readonly addToCartBtn: Locator;
  constructor(page: Page) {
    this.page = page;
    this.quantityInput = page.locator(
      '.product-information input[type="number"]'
    );
    this.addToCartBtn = page.getByRole('button', { name: 'Add to cart' });
  }
}