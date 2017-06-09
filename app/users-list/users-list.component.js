angular.
module('usersList').
component('usersList', {
  templateUrl: 'users-list/users-list.template.html',
  controller: ['User', '$scope',
    function usersController(User, $scope) {
      $scope.users = User.query();

      $scope.deleteUser = function($index) {
        $scope.users.splice($index, 1);
      };

      $scope.editSelected = function() {
        angular.forEach($scope, function($scope) {
          $scope.push(user.editUser);
        })
      };


    }
  ]
});
