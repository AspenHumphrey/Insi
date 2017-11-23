
'use strict';

app.controller("ProfileAddController", function($scope, $window, ProfileFactory, UserFactory) {

  $scope.formTitle = "Create Your Profile!";
  $scope.userProfile = {
    firstName: "",
    lastName: "",
    age: "",
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
    ProfileFactory.postNewProfile($scope.userProfile)
    .then( (data) => {
      $window.location.href = '#!/food/view';
    });
  };

});