module.exports = function(config){
    config.set({
    basePath : '../OpenWeatherApp/',

    //preprocessors: {
      //'**/*.html': ['ng-html2js']
    //},

    files : [
      'app/lib/angular/angular.js',
      'app/lib/angular-*/angular-*.js',
      'app/lib/iso-3166-country-codes-angular/src/iso-3166-country-codes-angular.js',
      'test/lib/angular-mocks/angular-mocks.js',
      'app/js/**/*.js',
      'app/views/**/*.html',
      'test/unit-test/*.spec.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-jasmine'       
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit-test'
    }

})}