const dotenv = require('dotenv');
dotenv.config();
const { config } = require('./wdio.conf');

config.capabilities = [
    {
        'browserstack.debug': true,
        app: process.env.BS_APP_ID,
        device: 'Google Pixel 3',
        os_version: '9.0',
        project: 'driver-app-test-project',
        build: 'android',
        name: 'test-app'
    },
];

// =============================
// Browserstack specific config
// =============================
config.user = process.env.BS_USERNAME;
config.key = process.env.BS_ACCESS_KEY;
config.services = ['browserstack'];

// This port was defined in the `wdio.shared.conf.js`
delete config.port;

exports.config = config;
