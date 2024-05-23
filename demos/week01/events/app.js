console.log("test");

//select the button
const myButton = document.querySelector("button");
console.log(myButton);

//my JS is expecting a user action on the page
myButton.addEventListener("click", function () {
  let time = "15:47";
  console.log(`The time is: ${time} `);
});

//you can add an event listener to any dom element
