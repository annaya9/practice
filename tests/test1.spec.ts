
import * as dotenv from 'dotenv';
dotenv.config();

import { test, expect } from '@playwright/test';

test('login page loads correctly', async ({ page }) => {
   
    await page.goto('/auth/login');
    
    await page.getByTestId("email").fill(process.env.USER_EMAIL!);

    await page.getByTestId("password").fill(process.env.USER_PASSWORD!);

    await expect(page.getByTestId("login-submit")).toBeVisible();

    await page.getByTestId("login-submit").click();

    await expect(page).toHaveURL('/account');

    await expect(page.getByTestId('page-title')).toContainText('My account');

    await expect(page.getByTestId("nav-menu")).toContainText(process.env.USER_NAME!);

});


    

test('User can view Combination Pliers product details', async ({ page }) => {
    await page.goto('/');
  
    const product = page.getByTestId('product-name').filter({ hasText: 'Combination Pliers' });
    await expect(product).toBeVisible(); 
    await product.click(); 

    await expect(page).toHaveURL(/\/product/);
    
    await expect(page.getByTestId("product-name")).toHaveText('Combination Pliers');
  
    await expect(page.getByTestId('unit-price')).toHaveText('14.15');
  
    await expect(page.getByTestId("add-to-cart")).toBeVisible();

    await expect(page.getByTestId("add-to-favorites")).toBeVisible();

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
