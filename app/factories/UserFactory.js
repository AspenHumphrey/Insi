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
      $http.post(`${FirebaseUrl}/users.json`, JSON.stringify(userObj.uid));
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

   let getProfile = (profileId) => {
    console.log("userId", profileId);
    return $q( (resolve, reject) => {
      $http.get(`${FirebaseUrl}/users.json?orderBy="uid"&equalTo="${profileId}"`)
      .then( (profileData) => {
        resolve(profileData);
      })
      .catch( (err) => {
        console.log("oops", err);
        reject(err);
      });
    });
  };

    let postNewProfile = (newProfile) => {
    return $q( (resolve, reject) => {
      $http.post(`${FirebaseUrl}/users.json`,
        angular.toJson(newProfile))
      .then( (newProfileData) => {
        resolve(newProfileData);
      })
      .catch( (err) => {
        reject(err);
      });
    });
  };

  let updateProfile = (profile) => {
    return $q( (resolve, reject) => {
      let profileId = profile.id;
      console.log("profileId", profileId);
      // PUT the entire obj to FB
      if (profileId) {
        $http.put(`${FirebaseUrl}/users/${profileId}.json`,
          angular.toJson(profile))
        .then( (data) => {
          console.log("data", data);
          resolve(data);
        })
        .catch( (err) => {
          reject(err);
        });
      } else {
        console.log("Go home");
      }
    });
  };

  return {isAuthenticated, getUser, createUser, loginUser, logoutUser, postNewProfile, updateProfile};
});

