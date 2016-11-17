(function() {
    'use strict';

    angular.module('weatherapp.filters', [])
        .filter('placeholder', placeholder);

    function placeholder() {
        return function(input, phvalue) {
            return (angular.isUndefined(input) || input == '') ? phvalue : input;
        }
    }

})();
