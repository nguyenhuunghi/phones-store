var register = angular.module('register',[]);
register.controller('registerCtrl', function($scope, $rootScope, $http){
  $scope.html_url = html_url;
  var check_email = false;
  var check_pass = false;
  $scope.check_image = function(){
    if ($("#_avatar img").length > 0){
      $("#_avatar img").remove();
      $("#avatar").val("");
      $("#_avatar .middle").show();
      $("#_avatar").css('border', '1px solid');
      $('.progress').hide();
    }
  }
  function check_email_map() {
    var email = document.getElementById("email");
    var re_email = document.getElementById("re_email");
    email_address = email.value.split("@");
    re_email_address = re_email.value.split("@");
    $("#s_email").css("color", "red");
    for (var i in email_address) {
      if (email.value && re_email.value) {
        if (email_address[i] != re_email_address[i] && re_email_address[i] != '') {
          $("#s_email").show();
          return false;
        }else {
          $("#s_email").hide();
        }
      }else {
        $("#s_email").hide();
      }
    }
  }
  function check_pass_map() {
    var pass = document.getElementById("pass");
    var re_pass = document.getElementById("re_pass");
    $("#s_pass").css("color", "red");
    if (pass.value && re_pass.value) {
      if (pass.value !== re_pass.value){
        $("#s_pass").show();
        return false;
      }else {
        $("#s_pass").hide();
      }
    }else {
      $("#s_pass").hide();
    }
  }
  $scope.avatar = null;
  $(document).ready(function() {
    $("#_avatar").hover(function(){
      if ($("#_avatar img").length > 0){
        $("#_avatar .removeimage").show();
        $("#_avatar .removeimage label").show();
      }else {
        $("#_avatar .removeimage").hide();
      }
    });
    $("#avatar").change(function(e) {
      var curFiles = document.getElementById('avatar').files[0];
      var image = document.createElement("img");
      if (curFiles){
        image.src = window.URL.createObjectURL(curFiles);
        image.style = "width: 100px; height:100px; border-radius: 50%";
        $("#_avatar").append(image);
        $("#_avatar .middle").hide();
        $("#_avatar").css('border', '0px solid');
        var reader = new FileReader();
        reader.onloadend = function() {
          $scope.avatar = reader.result;
        }
        reader.readAsDataURL(curFiles);
      }else{
        alert("Something wrong!");
      }
    });
    $("#email").change(function(e) {
      check_email = check_email_map();
    });
    $("#re_email").change(function(e) {
      check_email = check_email_map();
    });
    $("#pass").change(function(){
      check_pass = check_pass_map();
    });
    $("#re_pass").change(function(e) {
      check_pass = check_pass_map();
    });
  });
  $scope.register = function() {
    var file = document.getElementById('avatar').files[0];
    // if (file) {
    //   var width = 0;
    //   var id = null;
    //   $scope.progress= 0;
    //   $('.progress').show();
    //   var ele = document.getElementById("progress_bar");
    //   image = { 'image': $scope.avatar }
    //   $http({
    //     url: local_api + 'assets',
    //     method: 'POST',
    //     data: image,
    //     eventHandlers: {
    //       progress: function(e) {
    //         width = 100;
    //         frame();
    //       }
    //     },
    //     uploadEventHandlers: {
    //       progress: function(e) {
    //         id = setInterval(frame, 500);
    //       }
    //     }
    //   })
    //   function frame() {
    //     if (width >= 100) {
    //       ele.style.width = width + '%';
    //       ele.innerHTML = width + '%';
    //       clearInterval(id);
    //     } else {
    //       width +=5;
    //       ele.style.width = width + '%';
    //       ele.innerHTML = width + '%';
    //     }
    //   }
    // }
    if (check_email == false || check_pass == false) return;
    var date = new Date();
    var form_data = {
      'full_name': $('#full_name')[0].value,
      'email': $('#email')[0].value,
      'password': $('#pass')[0].value,
    }
    $http.post(local_api + 'user', form_data).then(function(data) {
      if (data) {
        alert('OK');
      }
    }, function(error){
      alert(error.data.message);
    });
  }
});
