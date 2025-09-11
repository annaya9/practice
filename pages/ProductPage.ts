import { expect, Page, Locator } from "@playwright/test";

export class ProductPage {
  readonly page: Page;
  readonly productName: Locator;
  readonly unitPrice: Locator;
  readonly addToCartButton: Locator;
  readonly addToFavoritesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productName = page.getByTestId("product-name");
    this.unitPrice = page.getByTestId("unit-price");
    this.addToCartButton = page.getByTestId("add-to-cart");
    this.addToFavoritesButton = page.getByTestId("add-to-favorites");
  }

  async waitForLoad(): Promise<void> {
    await expect(this.productName).toBeVisible();
  }

  async expectProductName(expected: string) {
    await expect(this.productName).toHaveText(expected);
  }

  async expectPrice(expected: string) {
    await expect(this.unitPrice).toHaveText(expected);
  }

  async expectAddToCartVisible() {
    await expect(this.addToCartButton).toBeVisible();
  }

  async expectAddToFavoritesVisible() {
    await expect(this.addToFavoritesButton).toBeVisible();
  }
}
