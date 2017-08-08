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
  .when('/login/view', {
    templateUrl: 'partials/profile.html',
    controller: 'ProfileController'
  })
  .otherwise('/');
});