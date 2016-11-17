(function() {

    'use strict';

    angular.module('weatherapp', ['ngRoute', 'iso-3166-country-codes', 'weatherapp.controller', 'weatherapp.services', 'weatherapp.directives', 'weatherappCurrent.directives', 'weatherapp.filters'])
        .config(config);

    function config($routeProvider) {
         $routeProvider.otherwise("/weather-forecast");
        $routeProvider
            .when('/current-weather', {
                templateUrl: 'views/current-weather.html',
                controller: 'weatherappCtrl',
                controllerAs: 'vm'
            })
            .when('/weather-forecast', {
                templateUrl: 'views/forecast.html',
                controller: 'weatherappCtrl',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/weather-forecast' });
    }
})();
