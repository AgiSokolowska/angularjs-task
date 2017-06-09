'use strict';

describe('myUsers Application', function() {

  describe('usersList', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should be 7 users on the list', function() {
      var usersList = element.all(by.repeater('user in users'));
      expect(usersList.count()).toBe(7);

    });
    it('should redirect `index.html` to `index.html#!/users', function() {
      browser.get('index.html');
      expect(browser.getLocationAbsUrl()).toBe('/users');
    });

  });
});
