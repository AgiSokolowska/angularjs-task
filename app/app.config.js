angular.
module('myUsers').
config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/users', {
      template: '<users-list></users-list>'
    }).
    otherwise('/users');
  }
]);
