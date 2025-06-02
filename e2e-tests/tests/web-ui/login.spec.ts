/**********************************************************************
Name of test : login.spec.ts
Description : Test to verify happy path,error path and edge case of login functionality
Validation : To verify the success message in happy path and edge case and error message in error path test cases
Created By : Janaki Venkatesh 30-06-2025
Last Modified By : NA
Last Modified Description : NA
***********************************************************************/

import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { HomePage } from '../../pages/homePage';
import { MyAccountPage } from '../../pages/myAccountPage';
import { ENV } from '../../utils/env';

//before each block to navigate to login form page
test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  const homePage = new HomePage(page);
  //launch the url and navigate to flixole homepage
  await homePage.fnNavigateToHomePage();
  //verify the landing page 
  await expect(page).toHaveURL('https://ver.flixole.com/');
  //click on the login button to login to application
  await expect(login.loginButton).toBeVisible();
  await login.fnGotoLogin();
});

//verify login successful with valid credentials - positive case
test('Login - valid user can log in successfully', async ({ page }) => {
  const login = new LoginPage(page);
  const myAccountPage = new MyAccountPage(page);
  //enter the credentials and click submit
  await login.fnLogin(ENV.validemail, ENV.validpassword);
  //verify successful login and check my account is visible
  await expect(myAccountPage.MyAccount).toBeVisible()
});

//verify login error message with invalid credentials - negative case
test('Login - Invalid user cannot login and throw error', async ({ page }) => {
  const login = new LoginPage(page);
  //enter the credentials and click submit
  await login.fnLogin(ENV.invalidemail, ENV.validpassword);
  //verify the error message for invalid email
  await expect(login.ErrMsg).toBeVisible()
});

//verify login successful with valid credentials and whitespaces in email - edge case
test('Login - Edge case to login successfully with whitespace for email and password', async ({ page }) => {
  const login = new LoginPage(page);
  //enter the credentials and click submit
  await login.fnLogin(`  ${ENV.validemail}  `, `  ${ENV.validpassword}  `);
  //verify successful login and check my account is visible
  await expect(login.MyAccount).toBeVisible()
});