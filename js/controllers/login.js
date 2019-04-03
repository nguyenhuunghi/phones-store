var login = angular.module('login', []);

// the probably simplest one
login.service('serviceTest', function() {
  this.say = function() {
    return 'Hello service!';
  }
});

// factory style, more involved but more 
login.factory('factoryTest', function() {
  return {
    say: function() {
      return 'Hello factory!'
    }
  }
});

// provider style
login.provider('providerTest', function() {
  this.name = 'default';
  this.$get = function() {
    var name = this.name;
    return {
      say: function() {
        return 'Hello' + name
      }
    }
  }
  this.setName = function(name) {
    this.name = name
  }
});

login.controller('loginCtrl',['$scope', '$rootScope', '$http', 'serviceTest', 'factoryTest', function($scope, $rootScope, $http, serviceTest , factoryTest) {
  
}]);
