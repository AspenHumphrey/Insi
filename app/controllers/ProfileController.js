'use strict';

app.controller("ProfileController", function($scope, $window, UserFactory) {

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
    UserFactory.updateProfileStatus($scope.userProfile)
    .then( (data) => {
      console.log("new profile data", data);
      $window.location.href = '#!/login/view';
    });
  };

});