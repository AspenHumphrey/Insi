 'use strict';

 app.controller("UserController", function($scope, $window, UserFactory){


 $scope.account = {
    email: "",
    password: ""
  };

  $scope.register = () => {
    console.log("you clicked register");
    UserFactory.createUser($scope.account)
    .then( (userData) => {
      console.log("New User!", userData);
      $scope.registerLogin();
    });
  };

   $scope.registerLogin = () => {
    UserFactory.loginUser($scope.account)
    .then( (userData) => {
      console.log("userData1", userData);
      $window.location.href = '#!/profileform/view';
    });
  };

  $scope.login = () => {
    UserFactory.loginUser($scope.account)
    .then( (userData) => {
      console.log("userData2", userData);
      $window.location.href = '#!/food/view';
    });
  };

});