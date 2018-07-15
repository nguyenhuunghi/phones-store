var xhttp = null;
if(window.XMLHttpRequest) {
  xhttp = new XMLHttpRequest();
}else {
  xhttp = new ActiveXObject('Microsoft.XMLHTTP');
}
var phones_store_api = "https://phones-store-api.herokuapp.com/";
var local_api = "http://127.0.0.1:5000/";
var str_phones = "";
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var phones = JSON.parse(this.response);
    for (var i = 0; i < phones.length; i++) {
      str_phones += phones[i] + '<br>';
    }
    document.getElementById("phones").innerHTML = str_phones;
  }
}
xhttp.open("GET", phones_store_api + "phones", true);
xhttp.send()

