'use strict';
// calculator!
app.controller('FoodController', function($scope, $q, $window, $routeParams, FoodFactory){

$scope.search = "";
$scope.item = 0;
// $scope.userProfile = data;


	$scope.searchFood = () => {
		FoodFactory.getFoodData($scope.search)
		.then( (data) => {
			getFoodArr();
		// console.log("data", data);
		});
	};

	function getFoodArr() {
		FoodFactory.getFoodData($scope.search)
		.then( (foods) => {
			console.log("foods", foods.data);
			$scope.foodArr = [];
			$scope.food = foods.data.hits;
			console.log("scope.food", $scope.food);
			angular.forEach($scope.food, function(data){
				$scope.foodArr.push(data);
			});
			console.log("$scope.foodArr", $scope.foodArr);
		})
		.catch( (err) => {
			console.log("err", err);
		});
	}



});

// $scope.breakfast = () => {
// 	$scope.userProfile.breakfast
// };

// $scope.lunch = () => {
// 	// $scope.userProfile.lunch
// };

// $scope.snack = () => {
// 		// $scope.userProfile.snack

// };

// $scope.dinner = () => {
// 	// $scope.userProfile.dinner





// $scope.selectAmount = () => {
//  if ()

// };



// });
// all things food/API search-amount/Profile Meals

// food search- (via API from FoodFactory) - gets: 
// food search (carbs)

// amount buttons- 1/4c 1/2c 1c

// select meal from user profile
// breakfast lunch snack dinner



// select multiple foods to calculate