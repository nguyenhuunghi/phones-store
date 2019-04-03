var auth = angular.module('auth', []);
auth.controller('authCtrl',['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
  $scope.$watch();
  $scope.html_url = html_url;
  $('#remember')[0].checked = JSON.parse(localStorage.checked);

  $scope.func_login = function() {
    form_data = {
      'email': $('#email')[0].value,
      'password': $('#password')[0].value
    }
    $http.post(local_api + 'login', form_data).then((data) => {
      if (data) {
        localStorage.token = 'Bearer ' + data.data.token;
        window.location.href = html_url + 'slidebar';
      }
    }).catch((err) => {
      alert(err);
    });
  }

  $scope.click_checkbox = function() {
    if ($('#remember')[0].checked === true) {
      localStorage.checked = true;
    } else {
      localStorage.checked = false;
    }
  }

}]);
