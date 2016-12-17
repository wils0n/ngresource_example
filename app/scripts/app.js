'use strict';

/**
 * @ngdoc overview
 * @name ngresourceExampleApp
 * @description
 * # ngresourceExampleApp
 *
 * Main module of the application.
 */
angular
  .module('ngresourceExampleApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/posts/:id', {
        templateUrl: 'views/post.html',
        controller: 'DetailPostCtrl',
      })
      .when('/post/new', {
        templateUrl: 'views/post_form_new.html',
        controller: 'NewPostCtrl',
      })
      .when('/posts/edit/:id', {
        templateUrl: 'views/post_form_edit.html',
        controller: 'EditPostCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
      
  });
