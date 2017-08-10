'use strict';

app.controller("NavController", function($scope, $window, ProfileFactory) {

  $scope.isLoggedIn = false;
  $scope.currentUser = null;

  firebase.auth().onAuthStateChanged(function(profile) {
    if (profile) {
      $scope.isLoggedIn = true;
      console.log("logged in t-f", $scope.isLoggedIn );
      $scope.currentUser = profile.uid;
      console.log("currentUser logged in?", profile.uid);
      $scope.$apply();
    } else {
      $scope.isLoggedIn = false;
      $scope.$apply();
      console.log("user logged in?", $scope.isLoggedIn);
      $window.location.href = "#!/";
    }
  });

  $scope.logout = () => {
    console.log("logout clicked");
    ProfileFactory.logoutUserProfile();
  };

});