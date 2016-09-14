'use strict';

  var requires = [
	  "ngResource",
	  "ngRoute"
  ];

  // mount on window for testing
  window.app = angular.module('nuviChallenge',requires);
  window.app.constant('BaseURL', 'https://nuvi-challenge.herokuapp.com');
  window.app.constant('companyColorMap', {
    facebook:"#3b5998",
    twitter:"#11C1FF",
    tumblr:"#3D5A70",
    instagram:"#C20094"
  })
  window.app.constant('companyLogoMap',{
    facebook:"../assetts/fb.png",
    twitter:"../assetts/twitter.png",
    tumblr:"../assetts/tumblr.png",
    instagram:"../assetts/instagram.jpg"
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
  ).when("/activity/:id",
    {
      templateUrl: "../views/_activity.html",
      controller: "ResponseController"
    }
  ).otherwise('/');
  

});
