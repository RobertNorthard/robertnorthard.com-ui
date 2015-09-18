'use strict';

app.controller('blogViewController', function($routeParams, $scope, BlogService){

	$scope.message = 'Blog';
    	
	BlogService.findById($routeParams.id).success(function(data){
		$scope.post = data;
	});
});