var imgBox = document.querySelector('.img-box');
var imgWrap = document.querySelector('.img-wrap');
var originalImg = document.getElementById('original-img');
var line = document.getElementById('line');

originalImg.style.width = imgBox.offsetWidth + 'px';
// The width of originalImg (an image element) is being set dynamically. It's being set to the offset width of the imgBox with the addition of the unit "px." This line effectively sets the image's width to match the width of its container.

var leftSpace = imgBox.offsetLeft;
// The offsetLeft property is used to determine the distance between the left edge of an element and the left edge of its closest positioned ancestor or the viewport. The offsetLeft property provides the distance from the left edge of the element to the left edge of its offset parent (an ancestor container).

imgBox.onmousemove = function (e) {
    var boxWidth = (e.pageX - leftSpace) + 'px';
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}
// sets up a function to be executed whenever a mousemove event occurs within the imgBox element. The e parameter represents the event object.

// var boxWidth = (e.pageX - leftSpace) + 'px';: calculate the boxWidth by subtracting the leftSpace from the current pageX coordinate of the mouse cursor. pageX is a property of the event object (e) that represents the X coordinate (horizontal position) of the mouse cursor within the viewport.

// imgWrap.style.width = boxWidth;: This line sets the width style property of the imgWrap element to the calculated boxWidth. This is used to change the width of the imgWrap element, potentially resizing an image or some other content.

// line.style.left = boxWidth;: Similarly, this line sets the left style property of the line element to the calculated boxWidth. This may be used to visually show a line or marker following the mouse cursor's position.