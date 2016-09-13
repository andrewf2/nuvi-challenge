'use strict';

  var requires = [
	  "ngResource",
	  "ngRoute"
  ];

  // mount on window for testing
  window.app = angular.module('nuviChallenge',requires);
  
  window.app.constant('BaseURL', 'https://nuvi-challenge.herokuapp.com');

  
  
  
  window.app.run(function($rootScope,$location,ActivityService,$q){
    
    
    
  })
  
  window.app.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "../views/_landing.html",
      controller: "ActivityController"
     
    }
  ).when("/activities/:provider",
    {
      templateUrl: "../views/_activities.html",
      controller:"ProviderController"
    }
  ).otherwise('/');
  

});
