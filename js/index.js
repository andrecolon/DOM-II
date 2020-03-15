// Your code goes here
// [] Using your[index.js file](js / index.js), create 10[unique event listeners](https: //developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
//         
//[]`mouseover`
let sigUpForm = document.querySelector(".btn");
console.log(sigUpForm)
sigUpForm.textContent = "Please press Here"
    //[]`keydown`




//[]`wheel`
function zoom(event) {
    //event.preventDefault();

    scale += event.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);

    // Apply scale transform
    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector(".img-content");
el.onwheel = zoom;

//[]`drag / drop`

//[]`load` - Progress event - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/load_event
//Wait for all node objects to be loaded then the callback function fires off

document.addEventListener("load", () => {

    })
    //[]`focus` 

//[]`resize` 

//[]`scroll` 



//[]`select` 

//[]`dblclick`
const logo = document.querySelector('.logo-heading')
logo.addEventListener('click', () => {
    logo.textContent = "Amazing bus!"
})


// Using the 10 unique events, find ways to update the DOM in creative ways.For example you could change colors, animate objects, remove objects, etc.

// *[] Nest two similar events somewhere in the site and prevent the event propagation properly *

// [] Stop the navigation items from refreshing the page by using `preventDefault()`