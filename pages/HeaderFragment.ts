import { expect, Page, Locator } from "@playwright/test";

export class HeaderFragment {
  readonly page: Page;
  readonly navMenu: Locator;
  readonly cartQuantity: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navMenu = page.getByTestId("nav-menu");
    this.cartQuantity = page.getByTestId("cart-quantity");
  }

  async expectUserNameVisible(expectedName: string) {
    await expect(this.navMenu).toContainText(expectedName);
  }

  async expectCartQuantity(expectedQty: string) {
    await expect(this.cartQuantity).toHaveText(expectedQty);
  }
}