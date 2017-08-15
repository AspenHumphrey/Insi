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
app.controller('FoodController', function($scope, $q, $window, $routeParams, FoodFactory, ProfileFactory, UserFactory){

	$scope.search = "";
	$scope.item = 0;

	let currentProfileArr = [];
  console.log("Fetch called");
  ProfileFactory.getProfile(UserFactory.getCurrentUser())
  .then( (profileData) => {
  	console.log("profile Data", profileData);
    currentProfileArr = profileData;
  });

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

	$scope.carbs = null;
	$scope.quarter = null;
	$scope.half= null;

	$scope.selectAmountQuarter = (foodArr) => {
		console.log("foodArr", foodArr);
		$scope.carbs = $scope.foodArr[0].fields.nf_total_carbohydrate;
		console.log("carbsQuarter", Math.floor($scope.carbs * 0.25));
		$scope.quarter = Math.floor($scope.carbs * 0.25);
		return $scope.quarter;
	};

	$scope.selectAmountHalf = (foodArr) => {
		$scope.carbs = $scope.foodArr[0].fields.nf_total_carbohydrate;
		console.log("carbsHalf", Math.floor($scope.carbs * 0.5));
		$scope.half = Math.floor($scope.carbs * 0.5);
		return $scope.half;
	};

	$scope.selectAmountWhole = (foodArr) => {
		$scope.carbs = $scope.foodArr[0].fields.nf_total_carbohydrate;
		console.log("carbsWhole", $scope.carbs);
		return $scope.carbs;
	};

// uses insulin info from profile to calculate "meal"
// will plug into amount(s) for (each) food item
	$scope.meal = (carbs, selectedMeal) => {
		console.log("carbs", carbs);
		let savedProfile = currentProfileArr;
		let meal = savedProfile[selectedMeal];

		if ($scope.quarter){
			let mealQuarter = Math.floor($scope.quarter / meal);
			$window.location.href = `#!/results/view/${mealQuarter}`;
		}
		else if ($scope.half) {
			let mealHalf = Math.floor($scope.half / meal);
			$window.location.href = `#!/results/view/${mealHalf}`;
		}
		else {
			let mealWhole = Math.floor($scope.carbs / meal);
			$window.location.href = `#!/results/view/${mealWhole}`;
		}

	};

});