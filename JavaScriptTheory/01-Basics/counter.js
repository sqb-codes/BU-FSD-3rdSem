// Event Binding
// - we attach the events with some elements and bind with functions
// - so when event gets triggered then function gets executed

// window.addEventListener("load", function() {
//     counter = 0;
//     span = document.getElementById("counter");
// });

// callback functions
window.addEventListener("load", initEvents);

function initEvents() {
    console.log("Init events called...");
    counter = 0;
    span = document.getElementById("counter");
    document.getElementById("btn-1").addEventListener("click", incCounter);
    document.getElementById("btn-2").addEventListener("click", decCounter);
}

// document.write("This is coming from JS");

function incCounter() {
    console.log("Inc counter executed...");
    counter++;
    // document.getElementsByTagName()
    span.innerText = counter;
}

function decCounter() {
    console.log("Dec counter executed...");
    counter--;
    span.innerText = counter;
}