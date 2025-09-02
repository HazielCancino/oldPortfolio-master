function replaceCursorWithSVG(svgRight, svgLeft) {
// Create the container for the cursor SVG
const cursorContainer = document.createElement('div');
cursorContainer.setAttribute('id', 'cursor-container');
cursorContainer.style.position = 'fixed';
cursorContainer.style.pointerEvents = 'none';
document.body.appendChild(cursorContainer);

// Create the <img> element for the right cursor SVG
const cursorRight = document.createElement('img');
cursorRight.setAttribute('src', svgRight);
cursorRight.style.display = 'none';
cursorContainer.appendChild(cursorRight);

// Create the <img> element for the left cursor SVG
const cursorLeft = document.createElement('img');
cursorLeft.setAttribute('src', svgLeft);
cursorLeft.style.display = 'none';
cursorContainer.appendChild(cursorLeft);

// Add an event listener to detect mouse movements
document.addEventListener('mousemove', function(event) {
const x = event.clientX;
const midScreen = window.innerWidth / 2;

// Display the right cursor SVG if the mouse is on the right side of the screen
if (x > midScreen) {
cursorRight.style.display = 'block';
cursorLeft.style.display = 'none';
cursorContainer.style.left = x + 'px';
}
// Display the left cursor SVG if the mouse is on the left side of the screen
else {
cursorRight.style.display = 'none';
cursorLeft.style.display = 'block';
cursorContainer.style.left = x + 'px';
}
});
} 

replaceCursorWithSVG('images/cursor-right.svg', 'images/cursor-left.svg');




// draggable carousel: 

// var draggable = new Draggable(stage, { 
// type: "rotate", 
//throwProps:true, 
// inertia: true, 

// onDragStart: function() { 

// // Disable box animation during drag and drop 
// boxes.each(function(index, element) { 
// TweenLite.killTweensOf(element); 
// }); 
// }, 
// onDrag: function() { 
// stage.css("transform", "rotate(0)"); 
// var rotation = draggable.rotation; 


// if (preRotation < rotation){ 
// boxes.each(function(index, element) { 
// TweenLite.set(element, { rotationY:"-=2" }); 
// }); 
// }else{ 
// boxes.each(function(index, element) { 
// TweenLite.set(element, { rotationY:"+=2" }); 

// }); 
// } 
// preRotation = rotation; 

// }, 

// onDragEnd: function() { 


// } 
// });