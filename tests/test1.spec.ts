

import { test, expect } from '@playwright/test';

test('login page loads correctly', async ({ page }) => {
   
    await page.goto('/auth/login');
    
    await page.getByTestId("email").fill('customer@practicesoftwaretesting.com');

    await page.getByTestId("password").fill('welcome01');

    await expect(page.getByTestId("login-submit")).toBeVisible();

    await page.getByTestId("login-submit").click();

    await expect(page).toHaveURL('/account');

    await expect(page.locator('h1')).toContainText('My account');

    await expect(page.locator('.navbar')).toContainText('Jane Doe'); 
});


    

test('User can view Combination Pliers product details', async ({ page }) => {
    await page.goto('/');
  
    await page.locator('text=Combination Pliers').click();

    await expect(page).toHaveURL(/\/product/);
    
    await expect(page.getByTestId("product-name")).toHaveText('Combination Pliers');
  
    await expect(page.locator('text=14.15')).toBeVisible();
  
    await expect(page.getByTestId("add-to-cart")).toBeVisible();
  });

  

  test('user can add product to cart', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com'); 

    await page.locator('text=Slip Joint Pliers').click();

    await expect(page.getByTestId("product-name")).toHaveText('Slip Joint Pliers');
  
    await expect(page.locator('text=9.17')).toBeVisible();
  
    await expect(page.getByTestId("add-to-cart")).toBeVisible();

    await (page.getByTestId("add-to-cart")).click();

    await expect(page.locator("#toast-container").getByText('Product added to shopping')
    ).toBeVisible();

    await expect(page.locator('#toast-container')).toHaveText('Product added to shopping cart.');
  
    await expect(page.locator('#toast-container')).toBeHidden({ timeout: 8000 });

    await expect(page.getByTestId("cart-quantity")).toHaveText('1');

    await page.getByTestId('cart-quantity').click();

    await page.goto('https://practicesoftwaretesting.com/checkout');

    await expect(page.getByTestId("product-quantity")).toHaveValue('1');

    await expect(page.getByTestId("product-title")).toHaveText('Slip Joint Pliers');

    await expect(page.getByTestId("proceed-1")).toBeVisible();


});
