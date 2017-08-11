
'use strict';

app.controller("ProfileAddController", function($scope, $window, ProfileFactory, UserFactory) {

  $scope.formTitle = "Create Your Profile!";
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
    uid: UserFactory.getCurrentUser()
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