console.log("test");

let myVariable = 56;

function countToTen() {
  //for loop --> I know how many times I want the loop to iterate
  for (let i = 1; i <= 10; i++) {
    console.log(i);
    // debugger; //this will stop the code from running after each iteration
    //we use the debugger mainly to check variable values
  }
}
// countToTen();

function add(a, b) {
  let sum = a + b;
  console.log(sum);
  debugger; //we can see that our parameters are undefined, unless we give them arguments in the call
}

//add()
