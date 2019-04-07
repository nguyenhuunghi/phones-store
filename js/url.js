var app = angular.module('myApp', [
  // 'ui-router'
  'ngRoute', 
  'login',
  // 'register',
]);
app.config(function($locationProvider, $routeProvider, $httpProvider, $stateProvider) {
  $locationProvider.hashPrefix('!');
  $locationProvider.html5Mode(true);
  $httpProvider.defaults.headers.common["Accept"] = "application/json";
  $httpProvider.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  $httpProvider.defaults.headers.common["Access-Control-Allow-Methods"] = "GET, POST, PATCH, PUT, DELETE, OPTIONS";
  $httpProvider.defaults.headers.common["Access-Control-Allow-Headers"] = "Origin,X-Requested-With, Content-Type,Accept, Authorization, X-Custom-Header";
  $httpProvider.defaults.headers.common["Content-Type"] = "application/json'";
  $routeProvider
  .when("/login", {
    templateUrl: "/partials/login.html",
    controller: "loginCtrl"
  })
  .when("/register", {
    templateUrl: "/partials/register.html",
    controller: "registerCtrl"
  }).
  otherwise('/login');
  // $stateProvider
  //   .state('unauth', {
  //     url: '',
  //     abstract: true,
  //     template: '',
  //     resolve: {
  //       User: function(myApi, $rootScope, $q) {
  //         return myApi
  //       }
  //     }
  //   })
  //   .state('unauth.login', {
  //     url: '/login',
  //     template: '/partials/login.html',
  //     controller: 'loginCtrl',
  //   });
});