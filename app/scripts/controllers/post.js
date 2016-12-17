'use strict';

/**
 * @ngdoc function
 * @name ngresourceExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngresourceExampleApp
 */
angular.module('ngresourceExampleApp')
  .controller('MainCtrl', function ($scope, $resource, PostResource) {

  	$scope.posts = PostResource.query();
  	
  	$scope.removePost = function(post){
  		PostResource.delete({id: post.id}, function(data){
  			console.log(data);
  			console.log("se elimino");
  			//$window.location.href='';
  		});
  		$scope.posts = $scope.posts.filter(function(element){
  			return element.id !== post.id;
  		});
  	}
  })
  .controller('DetailPostCtrl', function ($scope, $resource, PostResource, $routeParams, $location) {
  	$scope.post = PostResource.get({id: $routeParams.id});
  	
  })
  .controller('NewPostCtrl', function ($scope, $resource, PostResource, $location) {
  	console.log("entreoo");
  	$scope.post = {};
  	$scope.title = "Crear post";
  	$scope.savePostNew = function(){
  		PostResource.save({data: $scope.post }, function(data){
  			console.log(data);
  			$location.path("/")
  		});
  	}
  })
	.controller('EditPostCtrl', function ($scope, $resource, PostResource, $routeParams, $location) {
	  	$scope.title = "Editar post";
	  	$scope.post = PostResource.get({id: $routeParams.id});
	  	$scope.savePostEdit = function(){
	  		PostResource.update({id: $scope.post.id}, {data: $scope.post }, function(data){
	  			console.log(data);
	  			$location.path("/posts/"+$scope.post.id)
	  		});
	  	}
	  	
	  })


