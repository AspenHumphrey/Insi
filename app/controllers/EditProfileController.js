'use strict';
app.controller("EditProfileController", function($scope, $window, $routeParams, ProfileFactory, UserFactory){

$scope.formTitle = "Edit Your Profile!";

ProfileFactory.getProfile($routeParams.profileId)
.then( (data) => {
	$scope.userProfile = data;
});

$scope.saveProfile = () => {
    ProfileFactory.updateProfile($scope.userProfile)
    .then( (data) => {
      $window.location.href = `#!/profileview/view/${data.data.id}`;
    });
  };
});