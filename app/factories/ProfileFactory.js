'use strict';

app.factory("ProfileFactory", function($q, $http, FirebaseUrl, FBCreds) {

  let currentProfile = {};
  let getCurrentProfile = () => {
    return currentProfile;
  };

   let getProfile = (profileId) => {
    console.log("userId", profileId);
    return $q( (resolve, reject) => {
      $http.get(`${FirebaseUrl}/profiles.json?orderBy="uid"&equalTo="${profileId}"`)
      .then( (profileData) => {
        let dataKey;
        for (let key in profileData.data) {
          profileData.data[key].id = key;
          dataKey = key;
          }
          currentProfile = profileData.data[dataKey];
        resolve(currentProfile);
      })
      .catch( (err) => {
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
      console.log("profile", profile);
      // PUT the entire obj to FB
      if (profile) {
        $http.put(`${FirebaseUrl}/profiles/${profile.id}.json`,
          angular.toJson(profile))
        .then( (data) => {
          console.log("data", data);
          resolve(data);
        })
        .catch( (err) => {
          reject(err);
        });
      }
    });
  };

  let deleteProfile = (profileId) => {
    return $q( (resolve, reject) => {
      if (profileId) {
        $http.delete(`${FirebaseUrl}profiles/${profileId}.json`)
        .then( (data) => {
          resolve(data);
        })
        .catch( (err) => {
          reject(err);
        });
      }
    });
  };

  return { 
          getProfile, 
          postNewProfile, 
          updateProfile,
          deleteProfile,
          getCurrentProfile
  };
});

