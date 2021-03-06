'use strict';
app.factory("UserFactory", function($q, $http, FirebaseUrl, FBCreds){
  var config = {
      apiKey: FBCreds.key,
      authDomain: FBCreds.authDomain
    };

  firebase.initializeApp(config);

  let currentUser = null;

  let isAuthenticated = function() {
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

  let getCurrentUser = () => {
    return currentUser;
  };


    let createUser = (userObj) => {
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
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

  return {
    isAuthenticated,
    getCurrentUser,
    loginUser,
    logoutUser,
    createUser
  };


});