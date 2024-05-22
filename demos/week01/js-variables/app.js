console.log("Hello World!");

//naming conventions
// myName--> camel case for JS
// main-container --> kebab case for CSS and classnames or ids

//declaring variables
//let --> we can assign new values
let myName = "Manny"; //we declare variables just once
myName = "Joe";
console.log(myName);

//const --> we can't change the original value
const myConstName = "Manny";
// myConstName = "Joe"; //this errors because I can't give a new value to a const
console.log(myConstName);

//var
//we DON'T use var because the scope is unpredictable and we can't control the value like we do with let and const

//concatenation --> easy mode
console.log(myName + " " + myConstName + 1);

//template literals --> hard mode `${}`
console.log(`${myName}  ${myConstName} "1"`);

//template literals and concatenation
console.log(`${myName} ${myConstName}` + " asd");
