'use strict';

/* jasmine specs for controllers go here */

describe('Weather App controller', function() {
    beforeEach(module('weatherapp'));
    beforeEach(module('weatherapp.controller'));
    beforeEach(module('weatherapp.services'));
    beforeEach(module('iso-3166-country-codes'));

    describe('weatherappCtrl', function() {
        var $scope, ctrl, $httpBackend;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('http://api.openweathermap.org/data/2.5').
            respond([{ forecast: { city: { name: 'Chicago' } } }]);

            $scope = $rootScope.$new();
            ctrl = $controller('weatherappCtrl', { $scope: $scope });
        }));
    });
});
