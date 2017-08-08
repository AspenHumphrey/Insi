'use strict';

app.controller("ProfileController", function($scope, $window, ProfileFactory) {

  $scope.account = {
    email: "",
    password: ""
  };

  $scope.register = () => {
    console.log("you clicked register");
    ProfileFactory.createProfile($scope.account)
    .then( (profileData) => {
      console.log("New User!", profileData);
      $scope.registerLogin();
    });
  };

   $scope.registerLogin = () => {
    ProfileFactory.loginUserProfile($scope.account)
    .then( (profileData) => {
      console.log("profileData1", profileData);
      $window.location.href = '#!/profileform/view';
    });
  };

  $scope.login = () => {
    ProfileFactory.loginUserProfile($scope.account)
    .then( (profileData) => {
      console.log("profileData2", profileData);
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
    uid: ProfileFactory.getCurrentProfile()
  };

  $scope.saveProfile = () => {
      console.log("userProfile", $scope.userProfile);
    ProfileFactory.postNewProfile($scope.userProfile)
    .then( (data) => {
      console.log("new register data", data);
      $window.location.href = '#!/food/view';
    });
  };

});