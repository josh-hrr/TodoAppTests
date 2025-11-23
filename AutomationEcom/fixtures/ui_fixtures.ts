import { test as base } from '@playwright/test';
import { Home } from '../page_objects/Home';

type MyFixtures = {
  homePage: Home;
}

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new Home(page);
    await use(homePage); 
  },
});

export { expect } from '@playwright/test';