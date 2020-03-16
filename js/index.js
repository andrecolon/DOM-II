// Your code goes here
// [] Using your[index.js file](js / index.js), create 10[unique event listeners]
// (https: //developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  
// Here are some unique events you could try to use: 
//         

let sigUpForm = document.querySelector(".btn");
console.log(sigUpForm)
sigUpForm.textContent = "Please press Here"

//[]`mouseover`
let bgHover = document.querySelector("body")
console.log(bgHover)
bgHover.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "#ece5e5"
})


//[]`keydown`

let refreshpage = document.addEventListener('keydown', () => {
    location.reload();
})


//[]`wheel`
function zoom(event) {

    event.preventDefault(); //Do not let browser take control of wheel action - which scrolls down on mousewheel
    scale += event.deltaY * -0.01;
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
}

let scale = 1;
let el = document.querySelector(".img-content");
el.onwheel = zoom;

//[]`drag / drop`


let dragMe = document.querySelectorAll("img");
console.log(dragMe)
for (let i = 0; i < dragMe.length; i++) {
    dragMe.forEach(function() {
        document.getElementsByTagName("img")[i].setAttribute("draggable", "true"); //Create new attributes to each node to be draggable
    })

}

// function onDragStart(event) {
//     event
//         .dataTransfer
//         .setData("text/plain", event.target.id);

//     event
//         .currentTarget
//         .style
//         .backgroundColor = 'yellow';
// }

// function onDragOver(event) {
//     event.preventDefault();
// }

// let dropZone = document.createElement("div");
// dropZone.classList.add("dropZone")
// let dropZnText = document.createTextNode("Drop Me Here!");

// dropZone.appendChild(dropZnText)
// document.getElementById("div").appendChild(dropZone)

// console.log(dropZone)


// function onDrop(event) {
//     const id = event
//         .dataTransfer
//         .getData('text');

//     const draggableElement = document.getElementsByClassName("dropZone");
//     const dropzone = event.target;

//     dropzone.appendChild(draggableElement);

//     event
//         .dataTransfer
//         .clearData();
// }

//[]`load` - Progress event - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/load_event
// Wait for all The load event is fired when an XMLHttpRequest transaction completes successfully. Node objects to be loaded then the callback function fires off

// document.addEventListener("load", () => {
//     //conosle.log()
// })

//[]`focus` 
function getfocus() {
    document.getElementsByClassName("nav-link").focus();
}

function losefocus() {
    document.getElementById("nav-link").blur();
}

//[]`resize` 
let busImg = document.getElementsByClassName("intro")[0];
window.addEventListener('resize', (event) => {
    busImg.src = "https://picsum.photos/1000/300"
    console.log(event.target)

})

//[]`scroll` 

window.addEventListener('scroll', function() {
    busImg.style.opacity = "0.5"
});


//[]`select` 
const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(title => {

    title.addEventListener('click', (event) => {
        event.preventDefault()
        event.target.style.color = "white"
        event.target.style.backgroundColor = "gray"
    })

})

//[]`dblclick`
let logo = document.querySelector('.logo-heading')
logo.addEventListener('dblclick', () => {
    logo.textContent = "Amazing bus!"
})

//[]`Prevent Default` 



// Using the 10 unique events, find ways to update the DOM in creative ways.
//For example you could change colors, animate objects, remove objects, etc.

// *[] Nest two similar events somewhere in the site and prevent the event propagation properly *

// [] Stop the navigation items from refreshing the page by using `preventDefault()`