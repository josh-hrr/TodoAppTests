import { Page, Locator } from '@playwright/test';

export class HomePage {
  private readonly page: Page;
  private readonly map: HomeMap;

  constructor(page: Page) { 
    this.page = page;
    this.map = new HomeMap(page);
  }

  async getHomeTitle() {
    return await this.page.title();
  }
  async clickOnProductsPage() {
    await this.map.headerProductsBtn.click();
  }
  async clickOnCartPage() {
    await this.map.headerCartBtn.click();
  }
  async clickOnSignupLoginPage() {
    await this.map.headerSignupLoginBtn.click();
  }
  async clickOnContactUsPage() {
    await this.map.headerContactUsBtn.click();
  }
}

class HomeMap {
  private readonly page: Page;
  public readonly headerHomeBtn: Locator;
  public readonly headerProductsBtn: Locator;
  public readonly headerCartBtn: Locator;
  public readonly headerSignupLoginBtn: Locator;
  public readonly headerContactUsBtn: Locator;
  constructor(page: Page) {
    this.page = page;
    this.headerHomeBtn = this.page.getByRole('link', {
      name: 'Home',
      exact: true,
    });
    this.headerProductsBtn = this.page.getByRole('link', {
      name: 'Products' 
    });
    this.headerCartBtn = this.page.getByRole('link', {
      name: 'Cart',
      exact: true,
    });
    this.headerSignupLoginBtn = this.page.getByRole('link', {
      name: 'Signup / Login',
      exact: true,
    });
    this.headerContactUsBtn = this.page.getByRole('link', {
      name: 'Contact us',
      exact: true,
    });
  }
}


