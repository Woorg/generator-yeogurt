// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
'use strict';

module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: [<% if (testFramework === 'jasmine') { %>'jasmine'<% } else if (testFramework === 'mocha') { %>'mocha', 'chai'<% } %>],

        // list of files / patterns to load in the browser
        files: [
            'client/bower_components/jquery/dist/jquery.js',<% if (jsFramework === 'backbone' || jsFramework === 'react') { %>
            'client/bower_components/lodash/dist/lodash.js',
            'client/bower_components/backbone/backbone.js',<% if (jsFramework === 'react') { %>
            'test/helpers/phantomjs-shims.js',<% } %><% } %><% if (jsTemplate === 'handlebars') { %>
            'client/bower_components/handlebars/handlebars.runtime.js',<% } else if (jsTemplate === 'jade') { %>'client/bower_components/jade/runtime.js',<% } %><% if (useBootstrap) { %>'client/bower_components/<% if (cssOption === 'sass') { %>bootstrap-sass-official/assets/javascripts/bootstrap/<% } else if (cssOption === 'less' || cssOption === 'css') { %>bootstrap/js/<% } %>affix.js',
            'client/bower_components/<% if (cssOption === 'sass') { %>bootstrap-sass-official/assets/javascripts/bootstrap/<% } else if (cssOption === 'less' || cssOption === 'css') { %>bootstrap/js/<% } %>alert.js',
            'client/bower_components/<% if (cssOption === 'sass') { %>bootstrap-sass-official/assets/javascripts/bootstrap/<% } else if (cssOption === 'less' || cssOption === 'css') { %>bootstrap/js/<% } %>button.js',
            'client/bower_components/<% if (cssOption === 'sass') { %>bootstrap-sass-official/assets/javascripts/bootstrap/<% } else if (cssOption === 'less' || cssOption === 'css') { %>bootstrap/js/<% } %>carousel.js',
            'client/bower_components/<% if (cssOption === 'sass') { %>bootstrap-sass-official/assets/javascripts/bootstrap/<% } else if (cssOption === 'less' || cssOption === 'css') { %>bootstrap/js/<% } %>collapse.js',
            'client/bower_components/<% if (cssOption === 'sass') { %>bootstrap-sass-official/assets/javascripts/bootstrap/<% } else if (cssOption === 'less' || cssOption === 'css') { %>bootstrap/js/<% } %>dropdown.js',
            'client/bower_components/<% if (cssOption === 'sass') { %>bootstrap-sass-official/assets/javascripts/bootstrap/<% } else if (cssOption === 'less' || cssOption === 'css') { %>bootstrap/js/<% } %>modal.js',
            'client/bower_components/<% if (cssOption === 'sass') { %>bootstrap-sass-official/assets/javascripts/bootstrap/<% } else if (cssOption === 'less' || cssOption === 'css') { %>bootstrap/js/<% } %>scrollspy.js',
            'client/bower_components/<% if (cssOption === 'sass') { %>bootstrap-sass-official/assets/javascripts/bootstrap/<% } else if (cssOption === 'less' || cssOption === 'css') { %>bootstrap/js/<% } %>tab.js',
            'client/bower_components/<% if (cssOption === 'sass') { %>bootstrap-sass-official/assets/javascripts/bootstrap/<% } else if (cssOption === 'less' || cssOption === 'css') { %>bootstrap/js/<% } %>tooltip.js',
            'client/bower_components/<% if (cssOption === 'sass') { %>bootstrap-sass-official/assets/javascripts/bootstrap/<% } else if (cssOption === 'less' || cssOption === 'css') { %>bootstrap/js/<% } %>popover.js',
            'client/bower_components/<% if (cssOption === 'sass') { %>bootstrap-sass-official/assets/javascripts/bootstrap/<% } else if (cssOption === 'less' || cssOption === 'css') { %>bootstrap/js/<% } %>transition.js',<% } %><% if (useFoundation) { %>'client/bower_components/foundation/js/vendor/fastclick.js',
            'client/bower_components/foundation/js/vendor/jquery.cookie.js',
            'client/bower_components/foundation/js/vendor/placeholder.js',
            'client/bower_components/foundation/js/foundation/foundation.js',
            'client/bower_components/foundation/js/foundation/foundation.abide.js',
            'client/bower_components/foundation/js/foundation/foundation.accordion.js',
            'client/bower_components/foundation/js/foundation/foundation.alert.js',
            'client/bower_components/foundation/js/foundation/foundation.clearing.js',
            'client/bower_components/foundation/js/foundation/foundation.dropdown.js',
            'client/bower_components/foundation/js/foundation/foundation.equalizer.js',
            'client/bower_components/foundation/js/foundation/foundation.interchange.js',
            'client/bower_components/foundation/js/foundation/foundation.joyride.js',
            'client/bower_components/foundation/js/foundation/foundation.magellan.js',
            'client/bower_components/foundation/js/foundation/foundation.offcanvas.js',
            'client/bower_components/foundation/js/foundation/foundation.orbit.js',
            'client/bower_components/foundation/js/foundation/foundation.reveal.js',
            'client/bower_components/foundation/js/foundation/foundation.slider.js',
            'client/bower_components/foundation/js/foundation/foundation.tab.js',
            'client/bower_components/foundation/js/foundation/foundation.tooltip.js',
            'client/bower_components/foundation/js/foundation/foundation.topbar.js',<% } %><% if (jsFramework === 'backbone') { %>
            'test/scripts/templates.js',<% } %><% if (jsOption === 'requirejs') { %>
            {
                pattern: 'client/bower_components/**/*.js',
                included: false
            }, {
                pattern: 'client/scripts/**/*.js',
                included: false
            }, {
                pattern: 'test/**/*-spec.js',
                included: false
            },
            'node_modules/requirejs/require.js',
            'node_modules/karma-requirejs/lib/adapter.js',
            'test/test-main.js',<% } else if (jsOption === 'browserify') { %>
            'test/scripts/bundle.js'<% } else { %>
            'client/scripts/*.js',
            'test/**/*-spec.js'<% } %>
        ],

        // list of files to exclude
        exclude: [<% if (jsOption === 'requirejs') { %>
            'client/scripts/main.js'
        <% } %>],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress'],

        // web server port
        port: 9011,

        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // If browser does not have any activity for given timeout [ms], kill it
        browserNoActivityTimeout: 100000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
