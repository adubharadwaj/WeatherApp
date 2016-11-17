(function() {

    'use strict';

    angular.module('weatherapp.controller', [])
        .controller('weatherappCtrl', weatherappCtrl);

    weatherappCtrl.$inject = ['weathermap', 'exampleLocations', 'ISO3166'];

    function weatherappCtrl(weathermap, exampleLocations, ISO3166) {
        var vm = this;

        vm.message = '';
        vm.hasState = '';

        vm.exampleLocations = exampleLocations;
        vm.iconBaseUrl = 'http://openweathermap.org/img/w/';

        vm.forecast = weathermap.queryForecastDaily({
            location: exampleLocations[0]
        });

        // Get forecast data for location as given in vm.location
        vm.getForecastByLocation = function() {

            if (vm.location == '' || vm.location == undefined) {
                vm.hasState = 'has-warning';
                vm.message = 'Please provide a location';
                return;
            }

            vm.hasState = 'has-success';

            vm.forecast = weathermap.queryForecastDaily({
                location: vm.location
            });
        };

        // Set $scope.location and execute search on API
        vm.setLocation = function(loc) {
            vm.location = loc;
            vm.getForecastByLocation();
        };

        // Get icon image url
        vm.getIconImageUrl = function(iconName) {
            return (iconName ? vm.iconBaseUrl + iconName + '.png' : '');
        };

    }
})();
