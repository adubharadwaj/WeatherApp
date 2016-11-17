'use strict';

// End to End testing JS file

describe('Weather App', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should automatically redirect to /weather-forecast when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/weather-forecast");
  });


  describe('Weather Forecast view', function() {

    beforeEach(function() {
      browser().navigateTo('#/weather-forecast');
    });

    it('should render forecast when user navigates to /weather-forecast', function() {
      expect(element('[ng-view] form button[type="submit"]').text()).toMatch(/Search!/);
    });

    it('should map the value of an "instant city forecast" button to the input field', function() {
      element('[ng-view] form .btn-group > button:first-child').click();
      expect(element('[ng-view] form input#location').attr('value')).toBe('Chicago');
    });
  });
});