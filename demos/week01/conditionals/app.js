console.log("Test");

//basic structure
// if (condition uses operators) {
//     action
// }

let apples = 6;
let pears = 3;

//if the condition is false, my code doesn't run
if (apples === pears) {
  console.log("Apples and pears are equal");
}

//if the condition is true, my code runs
if (apples > pears) {
  console.log("I have more apples than pears");
}

//this operator means NOT equal
if (apples !== pears) {
  console.log("Apples are not equal to pears");
}

//multiple if statements
if (apples < pears) {
  console.log("Apples is less than pears");
} else if (apples === pears) {
  console.log("I have more apples than pears");
} else {
  console.log("Eat more fruit!");
}

//change the background colour based on user input
let colourQuestion = prompt("What's your favourite colour?");

if (colourQuestion === "blue") {
  document.body.style.backgroundColor = "blue";
} else if (colourQuestion === "red") {
  document.body.style.backgroundColor = "red";
} else {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}
console.log(document.body.style.backgroundColor);
