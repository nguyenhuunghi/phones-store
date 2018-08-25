var app = angular.module('myApp', [
  'ngRoute', 
  'login', 
  'register',
]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/login", {
    templateUrl: "/partials/login.html",
    controller: "loginCtrl"
  })
  .when("/register", {
    templateUrl: "/partials/register.html",
    controller: "registerCtrl"
  })
  .otherwise({
    redirect: "/login"
  });
});