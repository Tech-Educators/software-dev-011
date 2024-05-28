//we used node app to run this code in the terminal

//variables to store ONE value
let myVariable = "value";
let mySecondVariable = "second value";

//arrays --> a way to store more than one value!!!!
//we declare arrays similar to variables
//we use square brackets
let myArray = ["value", "second value", "third value"];
console.log(myArray); //node.js runs JS in the terminal

//.length property --> how many items I have in my array
console.log(myArray.length);

//index --> a number that tells me the position of an item inside the array
console.log(myArray[0]); //first item in the array
console.log(myArray[1]); //second item in the array
console.log(myArray[myArray.length - 1]); //index of the last item in my array

console.log(myArray[myArray.length - 1]);
//length --> the total number of items
//index starts from 0
//if I subtract 1 from the length, I get the last index in the array

//array methods --> functions that work with arrays
//pop()
//slice()

//adding a new item to my array using the index
myArray[3] = "fourth value";
console.log(myArray);

//arrays can store different data types
let quirkyArray = ["Manny", 87, true, ["value", "more value"]];
