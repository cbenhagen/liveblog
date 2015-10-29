'use strict';

exports.config = {
    allScriptsTimeout: 30000,
    baseUrl: 'http://localhost:9090',
    params: {
        baseBackendUrl: 'http://localhost:5000/api/',
        username: 'admin',
        password: 'admin'
    },
    specs: ['tests/performance/**/*[Ss]pec.js'],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--no-sandbox']
        }
    },
    directConnect: true,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 300000
    },
    /* global jasmine */
    onPrepare: function() {
        var setup = require('./app/scripts/bower_components/superdesk/client/spec/helpers/setup');
        var PerfRunner = require('./node_modules/protractor-perf');
        var perfRunner = new PerfRunner(browser.params.perf);
        setup({fixture_profile: 'test'});
        require('jasmine-reporters');
        jasmine.getEnv().addReporter(
            new jasmine.JUnitXmlReporter('e2e-test-results', true, true)
        );
    }
};
