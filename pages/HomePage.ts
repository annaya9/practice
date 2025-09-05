import { expect, Page, Locator } from "@playwright/test";
import { ProductPage } from './ProductPage';
import { HeaderFragment } from './HeaderFragment';  

export class HomePage {
  readonly page: Page;
  readonly productList: Locator;
  readonly header: HeaderFragment;

  constructor(page: Page) {
    this.page = page;
    this.productList = page.locator('[data-test="product-name"]');
    this.header = new HeaderFragment(page); 
  }

  async openProduct(productName: string): Promise<ProductPage> {
    const product = this.productList.getByText(productName);
    await expect(product).toBeVisible();
    await product.click();
    return new ProductPage(this.page);
  }

  async goto() {
    await this.page.goto('https://practicesoftwaretesting.com');
  }
}

