'use strict';

app.controller("NavController", function($scope, $window, ProfileFactory, UserFactory) {

  $scope.isLoggedIn = false;
  $scope.currentUser = null;

  firebase.auth().onAuthStateChanged(function(profile) {
    if (profile) {
      $scope.isLoggedIn = true;
      $scope.currentUser = profile.uid;
      $scope.$apply();
    } else {
      $scope.isLoggedIn = false;
      $scope.$apply();
      $window.location.href = "#!/";
    }
  });

  $scope.logout = () => {
    UserFactory.logoutUser();
  };

});