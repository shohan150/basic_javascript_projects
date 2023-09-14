let eyeIcon = document.getElementById('eyeicon');
let passWord = document.getElementById('password');

eyeIcon.onclick = function () {
    if (passWord.type == 'password') {
        passWord.type = 'text';
        eyeIcon.src = 'eye-open.png';
    } else {
        passWord.type = 'password';
        eyeIcon.src = 'eye-close.png';
    }
}