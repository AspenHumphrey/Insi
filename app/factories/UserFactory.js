'use strict';

app.factory("UserFactory", function($q, $http, FirebaseUrl, FBCreds) {

  var config = {
    apiKey: FBCreds.key,
    authDomain: FBCreds.authDomain
  };

  firebase.initializeApp(config);

  let currentUser = null;

  let isAuthenticated = function() {
    console.log("isAuthenticated called");
    return new Promise( (resolve, reject) => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          currentUser = user.uid;
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  };

  let getUser = () => {
    return currentUser;
  };

  let createUser = (userObj) => {
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
    .then((userObj)=>{
      $http.post(`${FirebaseUrl}/users.json`, JSON.stringify(userObj));
    })
    .catch( (err) => {
      console.log("error", err.message);
    });
  };

  let loginUser = (userObj) => {
    console.log("user", userObj);
    return $q( (resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
      .then( (user) => {
        currentUser = user.uid;
        resolve(user);
      })
      .catch( (err) => {
        console.log("error", err.message);
      });
    });
  };

  let logoutUser = () => {
    return firebase.auth().signOut()
    .catch( (err) => {
      console.log("error", err.message);
    });
  };

  let updateProfileStatus = (profile) => {
    return $q( (resolve, reject) => {
      let profileId = profile.id;
      // PUT the entire obj to FB
      if (profileId) {
        $http.put(`${FirebaseUrl}/users/${profileId}.json`,
          angular.toJson(profile))
        .then( (data) => {
          resolve(data);
        })
        .catch( (err) => {
          reject(err);
        });
      } else {
        console.log("I'm burned out for the day. Go home");
      }
    });
  };

  return {isAuthenticated, getUser, createUser, loginUser, logoutUser, updateProfileStatus};
});

