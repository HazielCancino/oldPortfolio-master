document.addEventListener('DOMContentLoaded', function() {

var wrapperButtons = this.documentElement.querySelectorAll('.wrapper-button-gravity');
// console.log('wrapper number', wrapperButtons.length)
var btns = document.querySelectorAll('.button-gravity');
// console.log('button number', btns.length)

// var shadowGravity = document.querySelector('.shadow-button-gravity');
wrapperButtons.forEach((wrapperButton, index) => {


wrapperButton.addEventListener('mousemove', (event)=> {
var btn = btns[index];
// console.log('index button=', index);

// Get position information and button size

const rect = btn.getBoundingClientRect();
// console.log('rect=', rect);

const width = rect.width / 2;
const height = rect.height / 2;

// Calculate the x and y coordinates relative to the center of the button
const x = event.clientX - rect.left - width;
const y = event.clientY - rect.top - height;
// console.log('x=', x);
// console.log('y=', y);

const tx = x;
const ty = y;
btn.style.setProperty('--tx', `${tx}px`);
btn.style.setProperty('--ty', `${ty}px`);

/// Apply the translation values ​​to the custom CSS properties (--tx and --ty) of the button
// btns.forEach((btn) => {

// // shadowGravity.style.setProperty('--tx', `${-tx/2}px`);
// // shadowGravity.style.setProperty('--ty', `${-ty/2}px`);
// });

});

// Event listener when the mouse leaves the button
wrapperButton.addEventListener('mouseleave', (e) => {
var btn = btns[index];

// Reset the translation and opacity values ​​to their default values

console.log('ciao!')
btn.style.setProperty('--tx', '0px');
btn.style.setProperty('--ty', '0px');
btn.style.setProperty('--opacity', `${0.6}`);
// shadowGravity.style.setProperty('--tx', `0px`);
// shadowGravity.style.setProperty('--ty', `0px`);
// shadowGravity.style.setProperty('--opacity', `${0}`);
});
});



});