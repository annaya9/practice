import { expect, Page, Locator } from "@playwright/test";
import { HeaderFragment } from "./HeaderFragment";

export class AccountPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly header: HeaderFragment; 

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByTestId("page-title");
    this.header = new HeaderFragment(page);  
  }

  async waitForLoad(): Promise<void> {
    await expect(this.pageTitle).toBeVisible();
  }

  async getPageTitleText(): Promise<string | null> {
    return this.pageTitle.textContent();
  }

  async expectOnAccountPage(): Promise<void> {
    await expect(this.page).toHaveURL(/\/account/);
  }

  async expectPageTitle(expected: string): Promise<void> {
    await expect(this.pageTitle).toContainText(expected);
  }
}

