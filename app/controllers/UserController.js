'use strict';

app.controller("UserController", function($scope, $window, UserFactory) {

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
      console.log("userData", userData);
      $window.location.href = '#!/register/view';
    });
  };

  $scope.login = () => {
    UserFactory.loginUser($scope.account)
    .then( (userData) => {
      console.log("userData", userData);
      $window.location.href = '#!/food/view';
    });
  };

  $scope.createProfile = "Create Your User Profile";
  $scope.userProfile = {
    firstName: "",
    lastName: "",
    age: "",
    weight: "",
    height: "",
    breakfast: "",
    lunch: "",
    snack: "",
    dinner: "",
    ecName: "",
    ecRelationship: "",
    ecPhone: "",
    uid: UserFactory.getUser()
  };

  $scope.saveProfile = () => {
      console.log("userProfile", $scope.userProfile);
    UserFactory.postNewProfile($scope.userProfile)
    .then( (data) => {
      console.log("new register data", data);
      $window.location.href = '#!/food/view';
    });
  };

});