const { config } = require('./wdio.conf');

config.capabilities = [
    {
        'browserstack.debug': true,
        app: process.env.BROWSERSTACK_APP_ID || 'bs://aa683dbafe4a4238d6566b4671fd0e61ec95eb78',
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
config.user = process.env.BROWSERSTACK_USER || 'devdev39';
config.key = process.env.BROWSERSTACK_ACCESS_KEY || 'zXKZDJiV4JBVv8sZt4xo';
config.services = ['browserstack'];

// This port was defined in the `wdio.shared.conf.js`
delete config.port;

exports.config = config;
