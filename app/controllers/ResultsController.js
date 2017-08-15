'use strict';

app.controller('ResultsController', function($scope, $window, $routeParams, ProfileFactory, UserFactory){
	$scope.name = ProfileFactory.getCurrentProfile().firstName;
	console.log("name ResultsController", ProfileFactory.getCurrentProfile().firstName);
	$scope.breakfast = $routeParams.results;
});