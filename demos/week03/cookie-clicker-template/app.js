console.log("test");

//I need a global variable to store the value of the cookies and cps
let cookieCounter = 0;
let cps = 0;

//DOM manipulation:
//cookie count
//cps (cookies per second)
//image to click on
//select these elements from DOM or create these elements with JS

//a way to store the shop items that we get from the API
let shopItems = [];

//fetch the items from the API (async, await)
function getShopItems() {
  //fetch the shop items from the API
  //turn the data into json --> .json()
  //push the items in the shopItems array
}

//an event listener for clicking our cookie
//select the cookie img or button
//write an event listener
addEventListener("click", function () {
  //when I click the button, the value of cookieCounter goes up by one
  //increment operator(one idea)
});

//have all the game information in one function
//you need to check if there is any values stored in local storage(cookieCounter, cps)
//load the game --> load() calls the game function
//fetch the shop items
//render the shop items --> display the shop items on the page

//we need a timer to increase the cookies we get every second
setInterval(function () {
  //increase the value of cookieCounter by one every second
  //I want update the value displayed on the page (or you could have this in a separate function that you call inside the interval, for example, updateDisplay())
  //I want to update the value in local storage (or you could have this in a separate function that you call inside the interv, for example, saveLocalStorage())
}, 1000);

//extra tools, if you want to use them to separate different tasks into functions

function updateDisplay() {
  //update the DOM element containing the value of cookieCounter
  //update the content value of cookies from local storage (current total)
}

function saveLocalStorage() {
  //a method to turn your data into strings
  //a method to set the items using key and value in local storage
}

function renderShop() {
  //create DOM elements to diplay your shop items
  //you can use a for loop or an array method
  shopItems.forEach(() => {});
}
