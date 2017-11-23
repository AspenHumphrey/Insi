 'use strict';

 app.controller("UserController", function($scope, $window, UserFactory){

// setting the current logged in user to scope for use throughout the application 
 $scope.account = {
    email: "",
    password: ""
  };

  $scope.register = () => {
    UserFactory.createUser($scope.account)
    .then( (userData) => {
      $scope.registerLogin();
    });
  };

   $scope.registerLogin = () => {
    UserFactory.loginUser($scope.account)
    .then( (userData) => {
      $window.location.href = '#!/profileform/view';
    });
  };

  $scope.login = () => {
    UserFactory.loginUser($scope.account)
    .then( (userData) => {
      $window.location.href = '#!/food/view';
    });
  };

});