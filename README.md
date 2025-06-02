
## Flixole Cross Platform App tests

## Project Overview
This project contains automated tests for the FlixOlé app covering Web, Mobile (Android/iOS), and API testing. The tests are built using tools like Playwright, Appium with TypeScript and Mocha.

The tests cover the following test cases:
- **Login functionality**: Test that verifies successful login, error path and edge case functionality.
- **watchlist functionality**: Tests logs in and adds a movie to watchlist and verify the list added.

## Pre-requisites

Before running the tests, make sure you have the following installed:
- **Node.js** (v16+ recommended)
- **Java** (for Appium)
- **Appium** server installed and running (for mobile tests)
- **Android** Studio and/or Xcode setup (for emulator/simulator)
- **adb** command-line tool for Android device/emulator interaction
- **GitHub** account and repo configured with Actions enabled

## Installation

1. Clone the repository:

```bash
git clone https://github.com/janakivenkat/qa-task-flixole-app.git
```

2. Navigate to the project directory:

```bash
cd qataskflixoleapp
```

3. Install the dependencies:

```bash
npm install
```

This will install playwright,appium webdriver io and all other required packages.

## Running Tests Locally

**Web UI Tests** (Playwright)

```bash
npm run test:web
```
**API Tests** (Playwright)

```bash
npm run test:web
```
**Mobile UI Tests** (Appium + WebdriverIO)
Make sure Appium server is running and emulator/device is connected:

```bash
appium
```
Run mobile UI tests:
```bash
npm run test:mobile
```
## Test Structure

- **login.spec.ts**: Tests to check successful login with valid credentials and with whitespaces and check error with invalid credentials
- **loginGetApiStructure.spec.ts**: Tests for logging in with valid credentials and verify the payloads and do assertions
- **watchListTest.spec.ts**: Tests for logging in with valid credentials and adding a movie to watchlist and viewing it

## Folder Structure

```
  /e2e
    /tests
      /api-test
        - loginGetApiStructure.spec.ts      // Api Login and verify payloads
      /mobile-ui
        - watchListTest.spec.ts   // test flow to login and add to watchlist // currently only pseduocode
      /web-ui
        -login.spec.ts   //web login for positive, negative and edge cases
  
    /pages  
      - homePage.ts     //Objects in home page  
      - loginPage.ts         // Objects in the login page
      - myAccountPage.ts   //objects of my account page where movies are listed
      - watchListPage.ts    // Objects in watchlist page

    /utils
      - env.ts      // environment file to read credentials
    /allure-results //contains results from allure reports
    /test-report  //playwright report
      -index.html
    /test-results //playwright results
      -last-run.json
    .env   // contains credentials
    /package-lock.json
    /package.json
    /.github
      /workflow
        /ci.yml  // contains github workflow for ci/cd
    /playwright.config.ts   //contains playwright configuration
    /tsconfig.json    //contains typescript configuration
    /wdio.conf.ts   //contains webdriver configuration
```
## Allure reporting (Add-ons)
Tests generate Allure reports saved to the allure-results directory. To generate and open reports locally:
```bash
allure generate ./allure-results --clean -o ./allure-report
allure open ./allure-report

```

## GitHub Actions CI Setup
The GitHub Actions workflow (.github/workflows/ci.yml) is configured to:
- Run tests automatically on push and pull request events
- Use ubuntu-latest VM runner
- Run your Web, Mobile, and API tests in parallel or sequence as configured

**How to Test Your GitHub Actions Workflow**
- Push your code to GitHub:
- Ensure your .github/workflows/ci.yml and tests are committed.
- Push to a branch like main or your feature branch.

**Check GitHub Actions:**
- Go to your repo on GitHub.

**Click the Actions tab.**
- You should see a workflow triggered for your recent push.
- Click into the workflow to see logs and progress.

**Force a workflow run (optional):**
- Make a trivial commit (e.g., add a comment to README.md) and push.
Or open a Pull Request to trigger the workflow.
- If workflow_dispatch trigger is set, manually trigger from the Actions UI.

**Debug Failures:**
- Review logs in the failed steps for errors.
- Add debug logs or echo commands in your workflow file if needed.
- Fix issues and push again to re-run.


## Troubleshooting
 - Appium errors: Ensure Appium server is running and your emulator/device is connected.
 - Playwright navigation errors: Check that baseURL is correctly set in config.
 - GitHub Actions not triggering: Verify .yml file is in .github/workflows and triggers match your branch/event.
 - Permission errors with Allure: Adjust PowerShell policy with:
    ```bash
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

  ```
    
## Notes 
- This project consist of non executable mobile test and just the pesudocode for test case add to watchlist.
- Reason being the system gets hanged on when emulator is opened 
- The page objects and the test file can be refractored when things are smooth and accessible. The selectors are placed out of assumptions and the flow is according to the mobile app.
- Intention is to make use of credentials from common .env file and also we can create a json file for other test data if needed and use same page classes across all platforms, common allure reporting and github ci integration for continous feedback.
