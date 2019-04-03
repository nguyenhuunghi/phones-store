var app = angular.module('myApp', [
  'ngRoute',
  'login',
  'register',
  'camera',
  'slidebar',
]);

// app.run(function($locationProvider, $routeProvider, $httpProvider) {
//   $httpProvider.deafults.headers.common['Authorization'] = localStorage.token;
// });

app.config(['$locationProvider', '$routeProvider', '$httpProvider', function($locationProvider, $routeProvider, $httpProvider) {
  // $locationProvider.hashPrefix('!');
  $httpProvider.defaults.headers.common["Accept"] = "application/json";
  $httpProvider.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  $httpProvider.defaults.headers.common["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE";
  $httpProvider.defaults.headers.common["Access-Control-Allow-Headers"] = "Origin,X-Requested-With, Content-Type,Accept, Authorization, X-Custom-Header";
  $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
  $routeProvider
  .when("/login", {
    templateUrl: "/partials/login.html",
    controller: "authCtrl"
  })
  .when("/register", {
    templateUrl: "/partials/register.html",
    controller: "registerCtrl"
  })
  .when('/camera', {
    templateUrl: '/partials/camera.html',
    controller: 'cameraCtrl'
  })
  .when('/slidebar', {
    templateUrl: '/partials/slide_bar.html',
    controller: 'slidebarCtrl'
  })
  .otherwise('/login');
}]);

