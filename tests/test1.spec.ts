import * as dotenv from 'dotenv';
dotenv.config();

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/HomePage';


test('login page loads correctly', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await expect(page.getByTestId("login-submit")).toBeVisible();

  await loginPage.performLogin(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);

  await expect(page).toHaveURL('/account');

  await expect(page.getByTestId('page-title')).toContainText('My account');

  await expect(page.getByTestId("nav-menu")).toContainText(process.env.USER_NAME!);
});



    


test('User can view Combination Pliers product details', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();

  const productPage = await homePage.openProduct('Combination Pliers');
  await productPage.waitForLoad();
  await productPage.expectProductName('Combination Pliers');
  await productPage.expectPrice('14.15');
  await productPage.expectAddToCartVisible();
  await productPage.expectAddToFavoritesVisible();
});



  

  test('user can add product to cart', async ({ page }) => {
    await page.goto('/'); 

    const product = page.getByTestId('product-name').filter({ hasText: 'Slip Joint Pliers' });
    await expect(product).toBeVisible(); 
    await product.click(); 

    await expect(page.getByTestId("product-name")).toHaveText('Slip Joint Pliers');
  
    await expect(page.getByTestId('unit-price')).toHaveText('9.17');
  
    await expect(page.getByTestId("add-to-cart")).toBeVisible();

    await (page.getByTestId("add-to-cart")).click();

    await expect(page.locator("#toast-container").getByText('Product added to shopping')
    ).toBeVisible();

    await expect(page.locator('#toast-container')).toHaveText('Product added to shopping cart.');
  
    await expect(page.locator('#toast-container')).toBeHidden({ timeout: 8000 });

    await expect(page.getByTestId("cart-quantity")).toHaveText('1');

    await page.getByTestId('cart-quantity').click();

    await page.goto('/checkout');

    await expect(page.getByTestId("product-quantity")).toHaveValue('1');

    await expect(page.getByTestId("product-title")).toHaveText('Slip Joint Pliers');

    await expect(page.getByTestId("proceed-1")).toBeVisible();


});
