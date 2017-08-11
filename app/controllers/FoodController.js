'use strict';
// calculator!
app.controller('FoodController', function($scope, $q, $window, $routeParams, FoodFactory){

$scope.search = "";
// $scope.userProfile = data;


$scope.calculate = () => {
	FoodFactory.getFoodData($scope.search)
	.then( (data) => {
		// console.log("data", data);
	});
};

});




// $scope.selectAmount = () => {
//  if ()

// };

// $scope.selectMeal = () => {
// // {{data.breakfast}} data.lunch data.snack data.dinner
// };


// });
// all things food/API search-amount/Profile Meals

// food search- (via API from FoodFactory) - gets: 
// food search (carbs)

// amount buttons- 1/4c 1/2c 1c

// select meal from user profile
// breakfast lunch snack dinner

// calculate function

// select multiple foods to calculate