import { Page, Locator } from '@playwright/test'

export class CartPage {
  private readonly page: Page;
  private readonly map: CartPageMap;
  constructor(page: Page) {
    this.page = page
    this.map = new CartPageMap(page)
  }
  async getQuantityOfSpecifiedProduct() { 
    await this.map.productQuantityInput.nth(0).waitFor();
    const quantity = await this.map.productQuantityInput.nth(0).innerText();
    return quantity;
  }
}

class CartPageMap {
  private readonly page: Page;
  public readonly productQuantityInput: Locator;
  constructor(page: Page) {
    this.page = page;
    this.productQuantityInput = page.locator('.cart_quantity button');
  }

}