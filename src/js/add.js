var people = [];

function validate() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var submit_button = document.getElementById('submit_button');
    var alert = document.getElementById("alert");
    if (name.length > 0) {
        var name_validated = true;
    }

    var patt_email = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    var res_email = patt_email.test(email);
    if (email.length > 0 && res_email) {
        var email_validated = true;
    }

    var patt_phone = new RegExp("^(6)([0-9]{8})$");
    var res_phone = patt_phone.test(phone);
    if (phone.length > 0 && res_phone) {
        var phone_validated = true;
        alert.style.display = 'none'
    } else {
      alert.style.display = 'inline'
    }


    if (email_validated && name_validated && phone_validated) {
        submit_button.disabled = false;
        submit_button.style.background = 'blue'
    } else {
        submit_button.style.background = 'red'
        submit_button.disabled = true;
    }

}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener('submit', subscribe);
});

function subscribe(evento) {
    evento.preventDefault();
    document.getElementById("submit_button")
    submit_button.style.background = 'red'

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    var person = {
        "name": name,
        "email": email,
        "phone": phone
    }

    people.push(person);
  
    var name = document.getElementById('name').value = '';
    var email = document.getElementById('email').value = '';
    var phone = document.getElementById('phone').value = '';

    write();
}


function write() {
    var text_area = document.getElementById('text-area');

    text_area.innerHTML = ''

    for (var i = 0; i < people.length; i++) {

        text_area.innerHTML += "<div class='col-md-6 col-lg-4 mt-2'><div class='card'><div class='card-body' id='area-name'><strong>Name:</strong> "
        + people[i].name + "<br><strong>Email:</strong>: " 
        + people[i].email + "<br><strong>Phone:</strong> " 
        + people[i].phone + "<br></div></div></div>";
    
    }
    
}

