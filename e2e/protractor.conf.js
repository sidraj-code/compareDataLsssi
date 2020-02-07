// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

      //const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/Filters.Feature'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  //baseUrl: 'http://localhost:4200/',
  baseUrl: 'http://ursa-ui-dev.app.wtcdev1.paas.fedex.com/ursaCompare/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  /*framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },*/
  cucumberOpts: {
    // tags: ['@Regression and @RegionLevel'],
    //format: "json:"+require('path').join(__dirname, './Reports/CucumberReport.json'),
    require: ['./src/steps/**/*.steps.ts'],
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    //jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};