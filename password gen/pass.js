const passwordBox = document.getElementById('password');
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = '0123456789';
const symbol = "!@#$%&*/";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = '';
    // password += upperCase[Math.floor(Math.random() * upperCase.length)];
    // password += lowerCase[Math.floor(Math.random() * upperCase.length)];
    // password += number[Math.floor(Math.random() * number.length)];
    // password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

function copyPassword() {
    password.select(); // Select the text in the input element with the id "password". The select() method is a built-in method for input elements. When called, it selects the text inside the input element, making it ready for copying.
    document.execCommand('copy'); // copies the selected text to the clipboard. In this case, it copies the text that was previously selected using the select() method.
}
