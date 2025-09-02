document.addEventListener('DOMContentLoaded', function() {

var wrapperButton = this.documentElement.querySelector('.wrapper-button-gravity');
var btn = document.querySelector('.button-gravity');
var shadowGravity = document.querySelector('.shadow-button-gravity');

wrapperButton.addEventListener('mousemove', (event)=> {
// Get the button's position and size information
const rect = btn.getBoundingClientRect();
console.log('rect=', rect);

const width = rect.width / 2;
const height = rect.height / 2;

// Calculate the x and y coordinates relative to the button's center
const x = event.clientX - rect.left - width;
const y = event.clientY - rect.top - height;
console.log('x=', x);
console.log('y=', y);

const tx = x;
const ty = y;

// Apply translation values ​​to the button's custom CSS properties (--tx and --ty)
btn.style.setProperty('--tx', `${tx}px`);
btn.style.setProperty('--ty', `${ty}px`);

shadowGravity.style.setProperty('--tx', `${-tx/2}px`);
shadowGravity.style.setProperty('--ty', `${-ty/2}px`);

});

// Event listener for when the mouse leaves the button
wrapperButton.addEventListener('mouseleave', (e) => {

// Reset the translation and opacity values ​​to their default values
console.log('ciao!')
btn.style.setProperty('--tx', '0px');
btn.style.setProperty('--ty', '0px');
shadowGravity.style.setProperty('--tx', `0px`);
shadowGravity.style.setProperty('--ty', `0px`);
btn.style.setProperty('--opacity', `${0.6}`);
shadowGravity.style.setProperty('--opacity', `${0}`);
});

});