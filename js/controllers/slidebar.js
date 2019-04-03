angular.module('myApp', [])
  .controller('slidebarCtrl', function($scope, $rootScope, $http, $routeParams) {
    $rootScope.list_task = [];
    $rootScope.list_field = [];
    // function get_task() {
    //   $http.get(local_api + 'task').then((data)=> {
    //     $rootScope.list_task = data.data.task;
    //   }).catch((err)=> {
    //     console.log(err);
    //   });
    // }

    // function get_field() {
    //   $http.get(local_api + 'field').then((data)=> {
    //     $rootScope.list_field = data.data.field;
    //   }).catch((err)=> {
    //     console.log(err);
    //   });  
    // }
    
    // get_task();
    // get_field();
    // myapi.get('field').then((data) => {
    //   console.log(data);
    // });
    
    $rootScope.make_listing = function(_url) {
      $http.get(local_api + _url).then((data)=> {
        if (_url == 'task') {
          $rootScope.list_task = data.data.task;
        } else if (_url == 'field') {
          $rootScope.list_field = data.data.field;
        }
      }).catch((err)=> {
        alert('Wrong');
      })
    };

    $scope.add_field = function () {
      var form_data = {
        'field': $('#name_of_field')[0].value,
      }
      $http.post(local_api + 'field', form_data).then((data)=> {
        if (data) {
          $rootScope.make_listing('field');
          $(".popup, .popup-content").removeClass("active");
        }
      }).catch((err)=> {
        alert('Wrong');
      });
    };

    $scope.add_task = function () {
      var form_data = {
        'task': $('#name_of_task')[0].value,
        'name': 'task'
      };
      $http.post(local_api + 'task', form_data).then((data)=> {
        if (data) {
          $rootScope.make_listing('task');
          $(".popup, .popup-content").removeClass("active");
        }
      }).catch((err)=> {
        alert('Wrong');
      });
    };

    document.addEventListener('dragover', function(ev) {
      ev.preventDefault();
      // Set the dropEffect to move
      ev.dataTransfer.dropEffect = 'Move';
    });

    document.addEventListener('drop', function(ev) {
      var data = ev.dataTransfer.getData("text/plain");
      if (ev.target.className == 'field') {
        ev.target.appendChild(document.getElementById(data));
        var form_data = {
          'task': data,
          'field': ev.target.id
        }
        $http.put(local_api + 'task', form_data).then((data)=> {
          if (data) {
            $rootScope.make_listing('task');
          }
        }).catch((err)=> {
          alert('Error');
        });
      }
    });

    $(".open").on("click", function(){
      $(".popup, .popup-content").addClass("active");
    });

    $(".add_field").on("click", function(){
      $(".popup, .popup-content").addClass("active");
    });
    
    $(".close, .popup").on("click", function(){
      $(".popup, .popup-content").removeClass("active");
    });
  });
