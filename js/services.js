angular.module('myApp', [])
  .factory('myApi', function ($http, $q) {
    var myApi = {}
    myApi.get = function (_url) {
      return $http.get(base_url + _url).
        then(function (response) {
          return response.data;
        }, function (error) {
          return error;
        });
    };

    myApi.post = function (_url, data) {
      return $http.post(base_url + _url, data).
        then(function (response) {
          return response.data;
        }, function (error) {
          return error;
        });
    }

    myApi.put = function (_url, data) {
      return $http.put(base_url + _url, data).
        then(function (response) {
          return response.data;
        }, function (error) {
          return error;
        });
    }

    return myApi;
  });