/**********************************************************************
Name of test : loginGetApiStructure.spec.ts
Description : Test to verify happy path and check payload structure of login functionality
Validation : To verify the payload variables and do assertions in login form
Created By : Janaki Venkatesh 30-06-2025
Last Modified By : NA
Last Modified Description : NA
***********************************************************************/

import { test, request, expect } from '@playwright/test';
import { ENV } from '../../utils/env';

//test to login and verify the successful login and its corresponding payload structure
test('Login API - Verify Successful login & Payload Structure', async () => {
  const apiContext = await request.newContext();

  const loginResponse = await apiContext.post('https://client-api.magine.com/api/login/v2/auth/email', {
    headers: {
      'Content-Type': 'application/json',
      'Magine-AccessToken': '6845a85f-0ce1-4ba9-a0a7-cdbfecf71cf6',
      'Mdm-Client-Name': 'web',
      'Mdm-Client-Version': '15.35.1'
    },
    data: {
      identity: ENV.validemail,
      accessKey: ENV.validpassword
    }
  });

  // Assert status is 200 OK
  expect(loginResponse.ok()).toBeTruthy();

  const body = await loginResponse.json();
  console.log('Login response:', body);

  // verify the payloads
  expect(body).toHaveProperty('token');
  expect(body).toHaveProperty('sessionId');
  expect(body).toHaveProperty('userId');
  expect(body).toHaveProperty('registered');

  // Assert their Type
  expect(typeof body.token).toBe('string');
  expect(typeof body.sessionId).toBe('string');
  expect(typeof body.userId).toBe('string');
  expect(typeof body.registered).toBe('boolean');
});