var pass = document.getElementById('pass');
var msg = document.getElementById('message');
var strength = document.getElementById('strength');


pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        // console.log(pass.value);
        // console.log(pass.value.length);
        msg.style.display = 'block';
    }
    else {
        msg.style.display = 'none';
    }
    if (pass.value.length < 4) {
        strength.innerHTML = "weak";
        pass.style.borderColor = '#ff5925';
        msg.style.color = '#ff5925';
    }
    else if (pass.value.length >= 4 && pass.value.length < 8) {
        strength.innerHTML = "medium";
        pass.style.borderColor = 'yellow';
        msg.style.color = 'yellow';
    }
    if (pass.value.length >= 8) {
        strength.innerHTML = "strong";
        pass.style.borderColor = 'green';
        msg.style.color = 'green';
    }
})