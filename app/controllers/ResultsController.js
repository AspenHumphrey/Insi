'use strict';

app.controller('ResultsController', function($scope, $window, $routeParams, ProfileFactory, UserFactory){
	// gets the current users first name
	$scope.name = ProfileFactory.getCurrentProfile().firstName;
	// 
	$scope.breakfast = $routeParams.results;
});