exports.config = {
    services: ['appium'],
    port: 4723,
    runner: 'local',
    specs: [
        './test_cases/**/*.js'
    ],
    capabilities: [{
        maxInstances: 1,
        appiumVersion: '1.20.0',
        platformName: 'Android',
        platformVersion: '11',
        deviceName: 'emulator-5554',
        app: 'apps/app-debug.apk',
        automationName: 'UiAutomator2'
    }],
    logLevel: 'trace',
    bail: 0,
    waitforTimeout: 50000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
