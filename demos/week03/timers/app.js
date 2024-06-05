console.log("test");

//setTimeout() --> a method that takes two parameters
//the first parameter is a callback function, the second parameter is the time in milliseconds
//this task is performed ONLY ONCE

setTimeout(() => {
  document.body.style.backgroundColor = "peru";
  console.log("This happened after 5 seconds");
}, 5000);

//setInterval() --> a method with two parameters
//the first parameter is a callback function, the second parameter is the time in milliseconds
//this task is repeated after the time runs out --> it's like a loop!

// setInterval(function () {
//   console.log("I repeat myself after 3 seconds");
// }, 3000);

//a different way to write callback functions --> you can use it any time you would write a callback function

// function repeatMyself() {
//   console.log("I repeat myself after 3 seconds");
// }

// setInterval(repeatMyself, 3000);

//we can also stop the interval

let myInterval = setInterval(function () {
  console.log("I repeat myself after 3 seconds");
}, 3000);

//clearInterval stops the interval
// clearInterval(myInterval);

// function stopInterval() {
//   clearInterval(myInterval);
// }

// stopInterval();

//you can combine setTimeout and setInterval for the ultimate experience
//remember that you still need the anonymous function because otherwise the clearInterval will run immediately. Instead, the anonymous is running immendiately and the clear behaves as expected
function stopIntervalWithTimeout() {
  setTimeout(function () {
    clearInterval(myInterval);
  }, 10000);
}

stopIntervalWithTimeout();
