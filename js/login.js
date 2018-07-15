$("img").hide();

function func_new_account() {
  $("#main").load("/partials/register.html");
}

function func_login() {
  var my_form = new FormData(document.getElementById("myForm"));
  xhttp.onreadystatechange = function() {
    while (this.readyState == 4) {
      if (this.readyState == 4 && this.status == 200) {
        if (this.response) {
          window.alert("Login success");
          $("#main").load("/partials/home.html");
          get_user_login();
          return;
        }
      }else {
        alert("Login failed\n" + this.response);
        return;
      }
    }
  }
  xhttp.open("POST", local_api + "login", true);
  xhttp.send(my_form);
}

function get_user_login() {
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    while(this.readyState == 4) {
      if (this.readyState == 4 && this.status == 200) {
        name_user = JSON.parse(this.response);
        document.getElementById("name").innerHTML = name_user.data.email;
        return;
      }else {
        $("#main").load("/partials/login.html");
        return;
      }
    }
  }
  xhttp.open("GET", local_api + "login", true);
  xhttp.send();
}

// function click_checkbox(cb) {
//   if (cb.checked == true) {

//   }
// }
