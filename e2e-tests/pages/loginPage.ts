import { Page, Locator, expect } from '@playwright/test'

export class LoginPage {
  private page: Page;

  // Locators for the Login Page
  public emailField: Locator
  public passwordField: Locator
  public loginButton: Locator
  public submitButton: Locator
  public MyAccount: Locator
  public ErrMsg: Locator

  constructor(page: Page) {
    this.page = page;

    // Initialize locators
    this.emailField = page.locator('input[type="email"]')
    this.passwordField = page.locator('input[type="password"]')
    this.loginButton = page.getByRole('link', { name: 'INICIAR SESIÓN' })
    this.submitButton = page.locator('button[type="submit"]')
    this.MyAccount = page.getByRole('link', { name: 'MI CUENTA' })
    this.ErrMsg = page.locator('text=La dirección de correo electrónico o contraseña que has escrito no es válida. Vuelve a intentarlo.')
  }

  //fn to navigate to home page
  async fnNavigateToHomePage() {
    await this.page.goto('/');
  }

  //fn to assert  loginform if ready
  async assertLoginFormIsReady() {
    await expect(this.emailField).toBeEnabled();
    await expect(this.passwordField).toBeEnabled();
    await expect(this.submitButton).toBeEnabled();
  }

  //fn to navigate to login
  async fnGotoLogin() {
    await this.loginButton.click();
    //verify fields are enabled 
    await this.assertLoginFormIsReady();
  }

  //fn to login
  async fnLogin(email: string, password: string) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.submitButton.click();
  }

  //fn to verify error 
  async isLoginErrorVisible(): Promise<boolean> {
    return this.page.locator('.error-message').isVisible();
  }
}