const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelector('input-box');   //try using const. const dile notun note kore entry dao. refresh. gone. 2 ta notun entry diye 1 ta delete dao. refresh. oi 1 ta ache. karon code dekhlei bujhte parba. delete r paragraphn on key er store korar code alada. 2nd ta running code e notes k update korte chai jeta const e possible na. But still I need to clear the concept more. 

createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');  //used let in tutorial
    let img = document.createElement('img');  //used let in tutorial
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = 'delete.png';
    notesContainer.appendChild(inputBox).appendChild(img);
})

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();

function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML)
}


notesContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    }
    // sets up an event listener for a click event on an element with the id "notesContainer" (presumably a container for notes or elements). When a click event occurs within this container, the code checks if the target of the click event is an IMG (image) element. If it is, it removes the parent element of the image, effectively removing the image.

    // .addEventListener('click', function (e) { ... }): This code adds a click event listener to the "notesContainer" element. When a click event occurs within this container, the function inside the event listener is executed. The e parameter represents the event object.

    // if (e.target.tagName === 'IMG') { ... }: Inside the event listener, it checks if the target of the click event (e.target) is an IMG element. The tagName property of the target element returns its tag name in uppercase.

    // e.target.parentElement.remove();: If the target element is an IMG, it accesses its parent element (the element that contains the image), and then it calls the remove method on the parent element. This effectively removes the parent element (and consequently, the image) from the DOM, effectively deleting it.

    else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box'); //querySelector is used to select the first element that matches a given CSS selector. querySelectorAll is used to select all elements that match a given CSS selector.
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
            //onkeyup is an event handler attribute in HTML and JavaScript. It is used to define a function that should be executed when a keyboard key is released after being pressed while an element (typically an input element or a textarea) has focus. In other words, the onkeyup event is triggered when a key is released after being pressed down within an input field.
        })
    }
})

document.addEventListener('keydown', event => {
    if (event.key === "ENTER") {
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
    // When a key is pressed down, the event handler checks if the pressed key is the "ENTER" key (usually the "Enter" or "Return" key on the keyboard).

    // If the "ENTER" key is detected, the code executes two actions:

    // document.execCommand('insertLineBreak'): This line invokes the execCommand method with the argument 'insertLineBreak.' This command is used to insert a line break at the current cursor position. In essence, it simulates pressing the "Enter" key, which would create a new line in a text input or textarea.

    // event.preventDefault(): This line prevents the default behavior of the "ENTER" key, which is typically to submit a form or move to the next input field in a form. By calling event.preventDefault(), you prevent this default behavior from occurring.

    // This code is often used in scenarios where you want the "ENTER" key to insert a line break (newline) within a textarea or content-editable element, rather than submitting a form or navigating to the next input field. It's a way to control the behavior of the "ENTER" key in custom text editing contexts.
})