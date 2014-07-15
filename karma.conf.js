// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'app/vendor/angular/angular.js',
      'app/vendor/angular-cookies/angular-cookies.js',
      'app/vendor/angular-sanitize/angular-sanitize.js',
      'app/vendor/angular-route/angular-route.js',
      'app/vendor/angular-animate/angular-animate.js',
      'app/vendor/angular-mocks/angular-mocks.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'test/unit/**/*.js',
      'app/vendor/underscore/underscore.js',
      'app/vendor/Latest-Strophe.js/strophe.js',
      'app/scripts/modules/config.js',
      'app/scripts/modules/underscore.js',
      'app/scripts/modules/strophe.js',
      'app/scripts/factories/profile.js',
      'app/scripts/services/auth.js',
      'app/scripts/services/chatService.js',
      'app/scripts/controllers/login.js',
      'app/scripts/controllers/main.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
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
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
