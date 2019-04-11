const passwordField = document.getElementById('password');
const signUpForm = document.getElementById('signUpForm');
const email = document.getElementById('email');
const submitButton = document.getElementById('submitButton');

email.addEventListener('keyup', function (event) {
    isValidEmail = email.checkValidity();

    if ( isValidEmail ) {
        document.getElementById("email_error").innerHTML = "";
    } else {
        document.getElementById("email_error").innerHTML = "Please enter a valid Email Address";
    }
});


passwordField.addEventListener('keyup', function (event) {
    var str = passwordField.value;
    isValidPassword = pwdCheck(str);
    if ( isValidPassword ) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

submitButton.addEventListener('click', function (event) {
    signUpForm.submit();
});

//password checker//

var pwdCheck = (str) => {
    var upper = /[A-Z]/g,
    numbers = /[0-9]/g,
    lower = /[a-z]/g,
    special = /[!@#$%^&*(),.?":{}|<>]/g;
    maxLength = 8;

    // length//
    if(str.length >= maxLength) {
        length_character.classList.remove("invalid");
        length_character.classList.add("valid");
    } else {
        length_character.classList.remove("valid");
        length_character.classList.add("invalid");
    }
    //uppercase//
    if(str.match(upper)){
        uppercase.classList.remove("invalid");
        uppercase.classList.add("valid");
    } else {
        uppercase.classList.remove("valid");
        uppercase.classList.add("invalid");
    }
    // Numbers //
    if(str.match(numbers)) {
        numeric.classList.remove("invalid");
        numeric.classList.add("valid");
    } else {
        numeric.classList.remove("valid");
        numeric.classList.add("invalid");
    }
    // lowercase //
    if(str.match(lower)) {
        lowercase.classList.remove("invalid");
        lowercase.classList.add("valid");
    } else {
        lowercase.classList.remove("valid");
        lowercase.classList.add("invalid");
    }
    // special character //
    if(str.match(special)) {
        special_char.classList.remove("invalid");
        special_char.classList.add("valid");
    } else {
        special_char.classList.remove("valid");
        special_char.classList.add("invalid");
    }
    if(str.length >= maxLength && str.match(upper) && str.match(numbers) && str.match(lower) && str.match(special)){
        return true;
    }
}