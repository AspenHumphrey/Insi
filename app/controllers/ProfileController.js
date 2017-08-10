'use strict';

app.controller("ProfileController", function($scope, $window, ProfileFactory, UserFactory){

function fetchProfile() {
    let profileArr = [];
    console.log("Fetch called");
    ProfileFactory.getProfile(UserFactory.getCurrentUser())
    .then( (profileList) => {
      console.log("profile Data", profileList);
      let profileData = profileList.data;
      Object.keys(profileData).forEach( (key) => {
        profileData[key].id = key;
        profileArr.push(profileData[key]);
      });
      $scope.todos = profileArr;
    })
    .catch( (err) => {
      console.log("error!", err);
    });
  }

  $scope.deleteProfile = (profileId) => {
    console.log("delete called", profileId);
    ProfileFactory.deleteProfile(profileId)
    .then( (data) => {
      console.log("removed item", data);
      $window.location.href = '#!/';
    });
  };

  $scope.updateProfile = (profileItem) => {
    console.log("profile updated");
    ProfileFactory.updateProfile(profileItem)
    .then( (data) => {
      console.log("Updated completed status");
    });
  };

});