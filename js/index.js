// Your code goes here
// [] Using your[index.js file](js / index.js), create 10[unique event listeners]
// (https: //developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  
// Here are some unique events you could try to use: 
//         


//[]`mouseover`
let bgHover = document.querySelector("body")
console.log(bgHover)
bgHover.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "#ece5e5"
})


//[]`keydown`

let refreshpage = document.addEventListener("keydown", () => {
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


//[]`load` - Progress event - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/load_event
// Wait for all The load event is fired when an XMLHttpRequest transaction completes successfully. Node objects to be loaded then the callback function fires off

// document.addEventListener("load", () => {
//     //conosle.log()
// })

//[]`focus` -- Does what it says- sets the target to the element chosen to be ready for an event e.g. input field, link, checkbox etc
function getfocus() {
    document.getElementsByTagName("button").focus();
}


//[]`resize` 
let busImg = document.querySelector("img");
window.addEventListener("resize", (event) => {
    busImg.src = "https://picsum.photos/1000/300"
    console.log(event.target)

})

//[]`scroll` 

window.addEventListener("scroll", function() {
    busImg.style.opacity = "0.5"
});


//[]`select` 

let inputEl = document.createElement("input")
let chooseEl = document.querySelector("nav")
chooseEl.append(inputEl)
console.log(inputEl)

//[]`dblclick`
let logo = document.querySelector(".logo-heading")
logo.addEventListener("dblclick", () => {
    logo.textContent = "Amazing bus!"
})


// Using the 10 unique events, find ways to update the DOM in creative ways.
//For example you could change colors, animate objects, remove objects, etc.

// *[] Nest two similar events somewhere in the site and prevent the event propagation properly *
let destinGroup = document.querySelector(".content-pick");
destinGroup.addEventListener("click", (event) => {
    destinGroup.style.backgroundColor = "seagreen";
    console.log("middle")
});

let destinationDiv = document.querySelector(".destination");
destinationDiv.addEventListener("click", (event) => {
    destinationDiv.style.backgroundColor = "hotpink";
    event.stopPropagation();
    console.log("start")
});

// [] Stop the navigation items from refreshing the page by using `preventDefault()`
let navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach(title => {

    title.addEventListener("click", (event) => {
        event.preventDefault()
        event.target.style.color = "white"
        event.target.style.backgroundColor = "gray"
    })

})