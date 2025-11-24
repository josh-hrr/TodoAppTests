import { test as base } from '@playwright/test';
import { HomePage } from '../page_objects/HomePage';
import { ProductsPage } from '../page_objects/ProductsPage'

type MyFixtures = {
  homePage: HomePage;
  productsPage: ProductsPage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page))
  }
});

export { expect } from '@playwright/test';