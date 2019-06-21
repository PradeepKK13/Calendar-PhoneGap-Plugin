const { config } = require('./wdio.shared.conf');
// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        deviceName: 'Android',
        appPackage: 'com.outsystemsenterprise.enmobiledev.CalendarSampleApp', // Path to your app package
        appActivity: 'com.outsystemsenterprise.enmobiledev.CalendarSampleApp.MainActivity', // Path to your activity
        noReset: true
    },
];

exports.config = config;
