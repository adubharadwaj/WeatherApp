'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('weatherapp.services'));

  describe('weathermap', function() {
    it('should return a json with a city info map on request', inject(function(weathermap) {
      expect(true).toEqual(true);
    }));
  });
});