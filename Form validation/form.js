var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('number-error');
var emailError = document.getElementById('email-error');
var msgError = document.getElementById('msg-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        //This regular expression checks if the name string consists of two words separated by a single space. 
        // ^: Asserts the start of the string.
        // [A - Za - z] *: Matches zero or more uppercase or lowercase letters(the * means zero or more occurrences). If * is not used. a single letter will be allowed by sides of the space.
        //\s{ 1 }: Matches a single space character. 1 indicates that a single space is allowed.
        // [A - Za - z] *: Matches zero or more uppercase or lowercase letters again.
        //$: Asserts the end of the string.
        nameError.innerHTML = "Write Full Name";
        return false;
    }
    nameError.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}
function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone is required';
        return false;
    }
    if (phone.length !== 11) {
        phoneError.innerHTML = 'Please submit all digits';
        return false;
    }
    if (!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = "Only digits allowed";
        return false;
    }
    phoneError.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}
function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z0-9.-_]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Email invalid";
        return false;
    }
    emailError.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}
function validateMsg() {
    var msg = document.getElementById('contact-msg').value;
    var required = 30;
    var left = required - msg.length;

    if (left > 0) {
        msgError.innerHTML = left + 'more characters needed';
        return false;
    }
    msgError.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMsg()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix the error.";
        setTimeout(function () {
            submitError.style.display = "none";
        }, 2000);
        return false;
    }
}