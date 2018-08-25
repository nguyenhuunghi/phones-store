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

  $(document).ready(function() {
    $("#_avatar").hover(function(){
      if ($("img").length > 0){
        $("#_avatar .removeimage").show();
        $("#_avatar .removeimage label").show();
      }else {
        $("#_avatar .removeimage").hide();
      }
    });
    $("#avatar").change(function(e){
      var curFiles = document.getElementById('avatar').files[0];
      var image = document.createElement("img");
      if (curFiles){
        image.src = window.URL.createObjectURL(curFiles);
        image.style = "width: 100px; height:100px; border-radius: 50%";
        $("#_avatar").append(image);
        $("#_avatar .middle").hide();
      }else{
        alert("Something wrong!");
      }
    });
    $("#email").change(function(e){
      check_email = check_email_map();
    });
    $("#re_email").change(function(e){
      check_email = check_email_map();
    });
    $("#pass").change(function(){
      check_pass = check_pass_map();
    });
    $("#re_pass").change(function(e){
      check_pass = check_pass_map();
    });
  });

  $scope.register = function(){
    if (check_email == false || check_pass == false) {
      return;
    }
    var curDate = new Date();
    curDateStamp = Date.parse(curDate);
    var register_form = new FormData(document.getElementById("register_form"));
    // var xhttp_register_form = new XMLHttpRequest();
    // xhttp_register_form.onreadystatechange = function() {
    //   while(this.readyState == 4) {
    //     if (this.status == 200) {
    //       alert("Create a acount success!");
    //       return;
    //     }else {
    //       alert(this.response);
    //       return;
    //     }
    //   }
    // }
    // xhttp_register_form.open("POST", local_api + "user", true);
    // xhttp_register_form.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // xhttp_register_form.send(register_form);
  }
});
