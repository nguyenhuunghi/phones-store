var auth = angular.module('login', []);
auth.factory('AuthenticationService', ['Base64', '$http', '$rootScope', '$cookieStore', function (Base64, $http, $rootScope, $cookieStore) {
  var service = {}
  service.Login = function (email, pass, callback) {
    $http.post(local_api + 'login', {'email': email, 'password': pass}).then((data) => {
      if (data) {
        callback(data);
      }
    })
  };

  service.SetCridentials = function (email, pass) {
    var authdata = Base64.encode(email + ':' + pass);
    $rootScope.globals = {
      currentUser: {
        email: email,
        password: pass
      }
    };
    $http.deafults.headers.common['Authorization'] = 'Basic' + authdata;
    $cookieStore.put('globals', $rootScope.globals);
  };

  service.ClearCritials = function () {
    $rootScope.globals = {};
    $cookieStore.remove('globals');
    $http.deafults.headers.common.Authorization = 'Basic';
  };

  service.CreateSession = function (_newToken) {
    if (_newToken) {
      $cookieStore.put('token', _newToken);
      $rootScope.token = _newToken;
    }
  };

  return service
}]);
