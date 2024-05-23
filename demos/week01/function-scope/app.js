//global scope
let myCity = "Norwich";

function sayMyCity() {
  myCity = "London";
  console.log(myCity);
}

sayMyCity();
console.log(myCity); // this is London here

//function scope --> any variables declared here are invisible to the rest of the code
function sayMyName() {
  myCity = "Leicester";
  let myName = "Walter";
  console.log(myName);
  return myName;
}

sayMyName();

console.log(myName); //this is a reference error, not defined
console.log(myCity); //the value is now Leicester because we updated it in different functions
