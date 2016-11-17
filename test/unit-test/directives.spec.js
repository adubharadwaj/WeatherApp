'use strict';

/* jasmine specs for directives go here */

describe('Directives', function() {
	beforeEach(module('weatherapp.directives'));

    describe('directives', function() {
        var $httpBackend;        

        beforeEach(inject(function($injector) {
            $httpBackend = $injector.get('$httpBackend');
            $httpBackend.whenGET('views/forecast.html').respond(200, '');
        }));
    });
});
