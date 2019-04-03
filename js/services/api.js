angular.module('myApp', [])
  .factory('myapi', function($http){
    var myapi = {}
    myapi.get = function(url) {
      $http.get(localapi + url).then((response)=> {
        if (response) {
          return response.data;
        }
      }).catch((err)=> {
        return err;
      })
    };

    myapi.post = function(url, data) {
      $http.post(localapi + url, data).then((response)=> {
        if (response) {
          return response.data;
        }
      }).catch((err)=> {
        return err;
      })
    }

    myapi.put = function(url, data) {
      $http.put(localapi + url, data).then((response)=> {
        if (response) {
          return response.data;
        }
      }).catch((err)=> {
        return err;
      })
    }

    myapi.delete = function(url) {
      $http.delete(localapi + url).then((response)=> {
        if (response) {
          return response.data;
        }
      }).catch((err)=> {
        return err;
      })
    }
    return myapi;
  })