export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    
    specs: ['./tests/mobile-ui/*.spec.ts'],
    exclude: [],

    maxInstances: 10,

    capabilities: [{
        platformName: 'Android',
        browserName: 'Chrome',
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'com.flixole.android',
        'appium:appActivity': '.ui.main.MainActivity',
        'appium:noReset': true,
    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
};
