'use strict';

app.controller("ProfileController", function($scope, $window, ProfileFactory, UserFactory){

    let profileArr = [];
    ProfileFactory.getProfile(UserFactory.getCurrentUser())
    .then( (profileList) => {
      $scope.userProfile = profileList;
    })
    .catch( (err) => {
      console.log("error!", err);
    });

  $scope.deleteProfile = (profileId) => {
    ProfileFactory.deleteProfile(profileId)
    .then( (data) => {
      $window.location.href = '#!/';
    });
  };

  $scope.updateProfile = (profileItem) => {
    ProfileFactory.updateProfile(profileItem)
    .then( (data) => {
      console.log("Updated completed status");
    });
  };

});