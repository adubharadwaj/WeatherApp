(function() {
    'use strict';

    angular.module('weatherapp.services', ['ngResource'])

    .value('exampleLocations', ['Chicago', 'London', 'New York', 'Bangalore'])

    .factory('weathermap', weathermap);

    weathermap.$inject = ['$resource'];

    function weathermap($resource) {

        // API key is currently unused (work either with or without key)
        var apiKey = 'd90d543115edec973c51e509bfd3d953';
        var apiBaseUrl = 'http://api.openweathermap.org/data/2.5/';

        return $resource(apiBaseUrl + ':path/:subPath?q=:location', {
            APPID: apiKey,
            mode: 'json',
            callback: 'JSON_CALLBACK',
            units: 'imperial',
            lang: 'en'
        }, {
            queryWeather: {
                method: 'JSONP',
                params: {
                    path: 'weather'
                },
                isArray: false,
                headers: {
                    'x-api-key': apiKey
                }
            },
            queryForecast: {
                method: 'JSONP',
                params: {
                    path: 'forecast'
                },
                isArray: false,
                headers: {
                    'x-api-key': apiKey
                }
            },
            queryForecastDaily: {
                method: 'JSONP',
                params: {
                    path: 'forecast',
                    subPath: 'daily',
                    cnt: 10
                },
                isArray: false,
                headers: {
                    'x-api-key': apiKey
                }
            }
        })
    };
})();
