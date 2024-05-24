console.log("test");

//select the button
const myButton = document.querySelector("button");
console.log(myButton);

//my JS is expecting a user action on the page
//in my addEventListener method, I have two parameters:
//- the action
//- anonymous function --> we only want to use it once
myButton.addEventListener("click", function () {
  let time = "15:47";
  console.log(`The time is: ${time} `);
});

//you can add an event listener to any dom element

//examples
//a button to count from 0 to infinity and beyond!
const countingButton = document.querySelector("#counting-button");
// const countingButton = document.getElementById("counting-button");
console.log(countingButton);

//we declare this variable with global scope
let clicks = 0;

countingButton.addEventListener("click", function () {
  clicks = clicks + 1;
  console.log(clicks);
  countingButton.textContent = clicks;
});

//when we click the button, a DOM element appears on the page
const mainContainer = document.getElementById("main-container");
console.log(mainContainer);
const messageButton = document.querySelector("#message-button");
console.log(messageButton);

//this event is dynamically creating DOM elements
messageButton.addEventListener("click", function () {
  //create element to contain my message
  let newP = document.createElement("p");
  //add content to the p tag
  newP.textContent = "Welcome to my website!";
  newP.className = "message-p-tag";
  //add p tag to the div parent
  //parent.appendChild(child)
  mainContainer.appendChild(newP);
});
