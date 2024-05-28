//basic function
function myFunction(a, b) {
  console.log(a + b);
}

myFunction(2, 4);
// let a = 2;
// let b = 4;
//I have two parameters (a, b) and two arguments (2, 4)
//parameters are variables and arguments are the values stored in the parameters

//callback functions
//a function as a parameter --> the value is the function call, which does an action

function doAction() {
  console.log("Action done");
}
// doAction();

function doAnotherAction() {
  console.log("Another action done");
}
// doAnotherAction();

//you can combine callback functions and regular parameters
function doManyActions(myFunctionParameter, myParameter) {
  console.log("Doing some actions...");
  myFunctionParameter();
  console.log(myParameter);
}

doManyActions(doAction, 6);
doManyActions(doAnotherAction, 5);
//myFunctionParameter is a callback function

//you can call other functions inside a function
function doManyActions() {
  console.log("Doing some actions...");
  doAction();
  doAnotherAction();
}
doManyActions();

//callback functions in event listeners
button.addEventListener("mouseover", function () {
  //action
});

//simplify how we write functions --> arrow functions
button.addEventListener("mouseover", () => {
  //action
});

//callback function in methods
let array = [1, 2, 3];
array.forEach((item) => {
  //action
});
