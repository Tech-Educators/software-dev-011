console.log("Test");

//primitive data types
let myVariable = "variable"; //string
let mySecondVariable = 5; //integer or number
let myThirdVariable = false; //boolean

console.log(myVariable + mySecondVariable + myThirdVariable);
console.log(`${myVariable} ${mySecondVariable} ${myThirdVariable}`);

//typeof operator
console.log(typeof myVariable);
console.log(typeof mySecondVariable);

//mathematical operators
// + //add
// - //minus, subtraction
// * //multiply, times
// / // divide
// % //modulo, remainder

let myNumber = 5;
let mySecondNumber = 7;

console.log(myNumber % mySecondNumber);

let myComparison = myNumber > mySecondNumber; //greater than
let myNextComparison = myNumber < mySecondNumber; //less than
let myFollowingcomparison = myNumber == mySecondNumber; // equal to

// == --> if the value is equal
// === --> if the value and type is equal

//the value is the same, so this is true
console.log(1 === 1);

//the value is the same, but the data type is different, so this is false
console.log("1" == 1);

//other data types

// undefined
let variable;
console.log(variable);

//null
let blankVariable = null;
console.log(blankVariable);
