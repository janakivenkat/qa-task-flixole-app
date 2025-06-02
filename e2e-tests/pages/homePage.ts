import { Page } from '@playwright/test'

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
 }

  //fn to navigate to home page
  async fnNavigateToHomePage() {
    await this.page.goto('/');
  }
}