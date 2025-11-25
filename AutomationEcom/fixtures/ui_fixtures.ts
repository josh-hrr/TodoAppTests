import { test as base } from '@playwright/test';
import { HomePage } from '../page_objects/HomePage';
import { ProductsPage } from '../page_objects/ProductsPage'
import { ProductDetailPage } from '../page_objects/ProductDetailPage';
import { CartPage } from '../page_objects/CartPage';

type MyFixtures = {
  homePage: HomePage;
  productsPage: ProductsPage;
  productDetailPage: ProductDetailPage;
  cartPage: CartPage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page))
  },
  productDetailPage: async ({ page }, use) => {
    await use(new ProductDetailPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page))
  }
});

export { expect } from '@playwright/test';