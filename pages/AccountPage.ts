import { expect, Page, Locator } from "@playwright/test";

export class AccountPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly navMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByTestId("page-title");
    this.navMenu = page.getByTestId("nav-menu");
  }

  async waitForLoad(): Promise<void> {
  await expect(this.pageTitle).toBeVisible();
}
  async getPageTitleText() {
    return await this.pageTitle.textContent();
  }

  async getNavMenuText() {
    return await this.navMenu.textContent();
  }
  async expectOnAccountPage(): Promise<void> {
  await expect(this.page).toHaveURL(/\/account/);
}

async expectPageTitle(expected: string): Promise<void> {
  await expect(this.pageTitle).toContainText(expected);
}

async expectUserNameVisible(expectedName: string): Promise<void> {
  await expect(this.navMenu).toContainText(expectedName);
}

}
