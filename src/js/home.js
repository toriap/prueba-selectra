var contador = 0;
function escribe(){
  escribir = document.getElementById("subscribed")
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class","people");
  // myName = "<span>" + document.rellenar.name.value + "</span>"
  // myEmail = "<span>" + document.rellenar.email.value + "</span>"
  // myPhone = "<span>" + document.rellenar.phone.value + "</span>"
  myName =  document.rellenar.name.value 
  myEmail = document.rellenar.email.value
  myPhone = document.rellenar.phone.value 
  newDiv.append(myName + myEmail + myPhone);
  //escribir.innerHTML = myName + myEmail + myPhone
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
window.onload = function(){
  document.rellenar.subscription.onclick= escribe
}