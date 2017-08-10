'use strict';
app.controller("EditProfileController", function($scope, $window, $routeParams, ProfileFactory, UserFactory){

ProfileFactory.getProfile($routeParams.profileId)
.then( (data) => {
	console.log("data from edit contrl", data);
	$scope.userProfile = data;
	console.log("scope user profile", $scope.userProfile);
});

$scope.saveProfile = () => {
    ProfileFactory.updateProfile($scope.userProfile)
    .then( (data) => {
      console.log("edited data", data);
      $window.location.href = '#!/profileview/view';
    });
  };
});