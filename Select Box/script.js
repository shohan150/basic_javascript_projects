var selectField = document.getElementById('select-field');
var selectText = document.getElementById('select-text');
var list = document.getElementById('list');
var arrowIcon = document.getElementById('arrow-icon');

var options = document.getElementsByClassName('options');

selectField.onclick = function () {
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate-arrow');
}
for (option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;
        list.classList.add('hide');
        arrowIcon.classList.toggle('rotate-arrow');
    }
}