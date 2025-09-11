import { expect, Page, Locator } from "@playwright/test";
import { HeaderFragment } from "./HeaderFragment";

export class HomePage {
  readonly page: Page;
  readonly header: HeaderFragment;
  readonly productList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderFragment(page);
    this.productList = page.getByTestId("product-name");
  }

  async goto() {
    await this.page.goto('https://practicesoftwaretesting.com');
  }

  async openProduct(productName: string): Promise<void> {
    const product = this.productList.filter({ hasText: productName });
    await expect(product).toBeVisible();
    await product.click();

  }
}

