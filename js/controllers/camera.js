var camera = angular.module('camera', []);
camera.controller('cameraCtrl', function($scope, $rootScope, $http){
  navigator.getUserMedia({audio: true, video: {width: 720, height: 480}},
    function(stream) {
      var video = document.querySelector('video');
      video.srcObject = stream;
      video.onloadedmetadata = function(e) {
        video.play();
      };
    },
    function(err) {
      console.log(err.name);
    }
  )
});