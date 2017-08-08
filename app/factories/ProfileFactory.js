// 'use strict';

// app.factory("ProfileFactory", function($q, $http, FirebaseUrl) {

//   let getUser = (userId) => {
//     console.log("userId", userId);
//     return $q( (resolve, reject) => {
//       $http.get(`${FirebaseUrl}/users.json?orderBy="uid"&equalTo="${userId}"`)
//       .then( (profileData) => {
//         resolve(profileData);
//       })
//       .catch( (err) => {
//         console.log("oops", err);
//         reject(err);
//       });
//     });
//   };

//   let patchUserProfile = (newUser) => {
//     return $q( (resolve, reject) => {
//       $http.patch(`${FirebaseUrl}/users.json`,
//         angular.toJson(newUser))
//       .then( (newUserData) => {
//         resolve(newUserData);
//       })
//       .catch( (err) => {
//         reject(err);
//       });
//     });
//   };

//   // let updateProfileStatus = (profile) => {
//   //   return $q( (resolve, reject) => {
//   //     let profileId = profile.id;
//   //     // PUT the entire obj to FB
//   //     if (profileId) {
//   //       $http.put(`${FirebaseUrl}/users/${profileId}.json`,
//   //         angular.toJson(profile))
//   //       .then( (data) => {
//   //         resolve(data);
//   //       })
//   //       .catch( (err) => {
//   //         reject(err);
//   //       });
//   //     } else {
//   //       console.log("I'm burned out for the day. Go home");
//   //     }
//   //   });
//   // };

//   let deleteProfile = (profileId) => {
//     return $q( (resolve, reject) => {
//       if (profileId) {
//         $http.delete(`${FirebaseUrl}/users/${profileId}.json`)
//         .then( (data) => {
//           resolve(data);
//         })
//         .catch( (err) => {
//           reject(err);
//         });
//       } else {
//         console.log("No id passed in");
//       }
//     });
//   };

//   return {getUser, patchUserProfile, deleteProfile };
// });
