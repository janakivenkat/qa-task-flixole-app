import { Page, Locator } from '@playwright/test'

export class MyAccountPage {
  private page: Page;

  // Locators for the My Account Page
  public MyAccount: Locator

  constructor(page: Page) {
    this.page = page;

    // Initialize locators
    this.MyAccount = page.getByRole('link', { name: 'MI CUENTA' })
    
  }
}