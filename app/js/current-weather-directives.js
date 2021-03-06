(function() {
    'use strict';

    angular.module('weatherappCurrent.directives', [])
        .directive('currentPanel', currentPanel);

    function currentPanel() {

        var directive = {
            restrict: 'EA',

            scope: {
                useDayForecast: '=showEntry',
                forecast: '=weatherPanel'
            },

            templateUrl: 'views/weather-panel-detail.html',

            link: function(scope, element, attrs) {
                // Get icon image url
                scope.getIconImageUrl = function(iconName) {
                    return (iconName ? 'http://openweathermap.org/img/w/' + iconName + '.png' : '');
                };

                scope.parseDate = function(time) {
                    return new Date(time * 1000);
                };
            }
        }
        return directive;

    }

})();
