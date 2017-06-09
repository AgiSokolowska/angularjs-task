'use strict';

angular.
module('core.user').
factory('User', ['$resource',
  function($resource) {
    return $resource('users/users.json', {}, {
      query: {
        method: 'GET',
        isArray: true
      }
    });
  }
]);
