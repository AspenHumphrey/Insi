'use strict';

app.controller('FoodController', function($scope, $q, $window, $routeParams, FoodFactory, ProfileFactory, UserFactory){

	$scope.search = "";
	$scope.item = 0;

	// gets the current profile
	let currentProfileArr = [];
  ProfileFactory.getProfile(UserFactory.getCurrentUser())
  .then( (profileData) => {
    currentProfileArr = profileData;
  });

	// setting the searched word entered to scope and calling the getFoodArr() to match the word 
	$scope.searchFood = () => {
		FoodFactory.getFoodData($scope.search)
		.then( (data) => {
			getFoodArr();
		});
	};

	// calling the food data from the api
	function getFoodArr() {
		FoodFactory.getFoodData($scope.search)
		.then( (foods) => {
			$scope.foodArr = [];
			$scope.food = foods.data.hits;
			angular.forEach($scope.food, function(data){
				$scope.foodArr.push(data);
			});
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
		$scope.carbs = $scope.foodArr[0].fields.nf_total_carbohydrate;
		$scope.quarter = Math.floor($scope.carbs * 0.25);
		return $scope.quarter;
	};

	$scope.selectAmountHalf = (foodArr) => {
		$scope.carbs = $scope.foodArr[0].fields.nf_total_carbohydrate;
		$scope.half = Math.floor($scope.carbs * 0.5);
		return $scope.half;
	};

	$scope.selectAmountWhole = (foodArr) => {
		$scope.carbs = $scope.foodArr[0].fields.nf_total_carbohydrate;
		return $scope.carbs;
	};

// uses insulin info from profile to calculate "meal"
// will plug into amount(s) for (each) food item
	$scope.meal = (carbs, selectedMeal) => {
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

// all things food/API search-amount/Profile Meals

// food search- (via API from FoodFactory) - gets: 
// food search (carbs)

// select meal from user profile
// breakfast lunch snack dinner

// select multiple foods to calculate 
// what if the person eats more than one "whole" 
// need to make a function that will calculate multi..

// calculator!