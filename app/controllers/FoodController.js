'use strict';

// all things food/API search-amount/Profile Meals

// food search- (via API from FoodFactory) - gets: 
// food search (carbs)

// select meal from user profile
// breakfast lunch snack dinner



// select multiple foods to calculate 
// what if the person eats more than one "whole" 
// need to make a function that will calculate multi..


// calculator!
app.controller('FoodController', function($scope, $q, $window, $routeParams, FoodFactory){

$scope.search = "";
$scope.item = 0;

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

// amount btns linked to food.html
// takes selected food amt from foodArr and multiplies it by decimal amt

$scope.selectAmountQuarter = (foodArr) => {
	let carbs = $scope.foodArr[0].fields.nf_total_carbohydrate;
	console.log("carbsQuarter", Math.floor(carbs * 0.25));
	return Math.floor(carbs * 0.25);
};

$scope.selectAmountHalf = (foodArr) => {
	let carbs = $scope.foodArr[0].fields.nf_total_carbohydrate;
	console.log("carbsHalf", Math.floor(carbs * 0.5));
	return Math.floor(carbs * 0.5);
};

$scope.selectAmountWhole = (foodArr) => {
	let carbs = $scope.foodArr[0].fields.nf_total_carbohydrate;
	console.log("carbsWhole", carbs);
	return carbs;
};

// uses insulin info from profile to calculate "meal"
// will plug into amount(s) for (each) food item

$scope.breakfast = () => {
	let breakfast  = $scope.userProfile.breakfast;
	console.log("breakfast", Math.floor(breakfast * carbs));
	return Math.floor(breakfast * carbs);
};

// $scope.lunch = () => {
// 	$scope.userProfile.lunch
// };

// $scope.snack = () => {
// 		$scope.userProfile.snack

// };

// $scope.dinner = () => {
// 	$scope.userProfile.dinner

// };


});