'use strict';

let app = angular.module("App", ["ngRoute"])
.constant("FirebaseUrl", "https://todo-task-app.firebaseio.com");

let isAuth = (UserFactory) => {
  return new Promise ( (resolve, reject) => {
    UserFactory.isAuthenticated()
    .then( (userBoolean) => {
      if (userBoolean) {
      resolve();
        } else {
          reject();
        }
    });
  });
};

app.config( ($routeProvider) => {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html',
    controller: 'UserController'
  })
  .when('/profileform/view', {
    templateUrl: 'partials/profileform.html',
    controller: 'ProfileAddController'
  })
  .when('/food/view', {
    templateUrl: 'partials/food.html',
    controller: 'FoodController'
  })
  .when('/profileform/edit/:profileId', {
    templateUrl: 'partials/profileform.html',
    controller: 'EditProfileController'
  })
  .when('/profileview/view/:profileId', {
    templateUrl: 'partials/profileview.html',
    controller: 'ProfileController'
  })
  .when('/results/view', {
    templateUrl: 'partials/results.html',
    controller: 'FoodController'
  })
  .otherwise('/');
});