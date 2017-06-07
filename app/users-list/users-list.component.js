angular.
module('usersList').
component('usersList', {
  templateUrl: 'users-list/users-list.template.html',
  controller: ['$scope', '$http', function usersController($scope, $http) {
    $http.get('users/users.json').then(function(response) {
      $scope.users = response.data;
    });
    $scope.editUser = false;

    $scope.deleteUser = function($index) {
      $scope.users.splice($index, 1);
    };

    $scope.editSelected = function() {

    }


  }]
});
