'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing



describe('myUsers Application', function() {

  describe('usersList', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should delete one selected user from the list', function() {
      var usersList = element.all(by.repeater('user in users'));
      var query = element(by.model('$ctrl.query'));

      expect(usersList.delete()).toBe(6);

    });

  });

});
