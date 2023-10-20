// let imgBox = document.getElementById('imgBox');
let qrImg = document.getElementById('qrimg');
let qrText = document.getElementById('qr_text');

const api_uri = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';


function generateQR() {
    if (qrText.value.length > 0) {
        qrImg.src = api_uri + qrText.value;
        console.log(qrImg.src);
        console.log(qrText.value);

        // .innerHTML: It is typically used with elements that can contain HTML content, such as <div>, <span>, or any element with content between opening and closing tags. .innerHTML allows you to get or set the HTML content (including child elements and text) within an element.

        // .value is used primarily with form elements that accept user input, such as <input>, <textarea>, and <select>. .value allows you to get or set the current value of form elements. This property deals with the user's input data, which is typically text-based.
        qrImg.style.margin = '25px 0px';
    }
}