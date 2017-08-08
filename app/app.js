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
    controller: 'ProfileController'
  })
  .when('/profileform/view', {
    templateUrl: 'partials/profileform.html',
    controller: 'ProfileController'
  })
  .when('/food/view', {
    templateUrl: 'partials/food.html',
    controller: 'FoodController'
  })
  .otherwise('/');
});