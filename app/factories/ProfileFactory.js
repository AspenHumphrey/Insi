'use strict';

app.factory("ProfileFactory", function($q, $http, FirebaseUrl, FBCreds) {

  var config = {
    apiKey: FBCreds.key,
    authDomain: FBCreds.authDomain
  };

  firebase.initializeApp(config);

  let currentProfile = null;

  let isAuthenticated = function() {
    console.log("isAuthenticated called");
    return new Promise( (resolve, reject) => {
      firebase.auth().onAuthStateChanged(function(profile) {
        if (profile) {
          currentProfile = profile.uid;
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  };

  let getCurrentProfile = () => {
    return currentProfile;
  };

  let createProfile = (profileObj) => {
    return firebase.auth().createUserWithEmailAndPassword(profileObj.email, profileObj.password)
    .then((profileObj)=>{
      $http.post(`${FirebaseUrl}/profiles.json`, JSON.stringify(profileObj.uid));
    })
    .catch( (err) => {
      console.log("error", err.message);
    });
  };

  let loginUserProfile = (profileObj) => {
    console.log("user", profileObj);
    return $q( (resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(profileObj.email, profileObj.password)
      .then( (profile) => {
        currentProfile = profile.uid;
        resolve(profile);
      })
      .catch( (err) => {
        console.log("error", err.message);
      });
    });
  };

  let logoutUserProfile = () => {
    return firebase.auth().signOut()
    .catch( (err) => {
      console.log("error", err.message);
    });
  };

   let getProfile = (profileId) => {
    console.log("userId", profileId);
    return $q( (resolve, reject) => {
      $http.get(`${FirebaseUrl}/profiles.json?orderBy="uid"&equalTo="${profileId}"`)
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
      $http.post(`${FirebaseUrl}/profiles.json`,
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
        $http.put(`${FirebaseUrl}/profiles/${profileId}.json`,
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

  return {isAuthenticated, 
          getCurrentProfile, 
          createProfile, 
          loginUserProfile, 
          logoutUserProfile, 
          getProfile, 
          postNewProfile, 
          updateProfile
  };
});

