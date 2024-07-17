//declaring a variable
//we add the type next to the variable name using : and the data type --> this is atype annotation
const myName: string = "Manny";
let myAge: number = 98;
let isBritish: boolean = false;
//the any type is used so the value can have any data type
let favThings: any = "sun";

//declaring array types
let myArray: number[] = [1, 2, 3];
let myLongerTypeArray: Array<number> = [1, 2, 3];

let myOtherArray: string[] = ["one", "two", "three"];
let myOtherLongerTypeArray: Array<string> = ["one", "two", "three"];

//declaring object types
//we added the type object as a type annotation in the real object
let myIdentity: IdentityTypes = {
  name: "Manny",
  age: 98,
  isBritish: false,
  isAnHonoraryBrit: true,
  favBiscuits: ["custard cream", "bourbon", "hobnob"],
  favThings: ["sun", 45, "eggs-cream"],
  // workplace: {
  //   name: "Tech Ed",
  //   location: "Norwich",
  // },
};

//we are going to have a type annotation object!
//this is reusable!
//the keyword is type
type IdentityTypes = {
  name: string;
  age: number;
  isBritish: boolean;
  isAnHonoraryBrit: boolean;
  favBiscuits: Array<string>; //string[]
  //we use the pipe | to add multiple types
  favThings: (string | number)[];
  //optional chaining ? --> in case the workplace property is missing in the object
  workplace?: {
    name: string;
    location: string;
  };
};

//array of objects

let myArrayOfObjects: ArrayObjectsType = [
  {
    name: "Joe",
    location: "Norwich",
  },
  {
    name: "Cordelia",
    location: "Liverpool",
  },
];

type ArrayObjectsType = [
  {
    name: string;
    location: string;
  },
  {
    name: string;
    location: string;
  }
];

//function with parameters
function add(a: number, b: number) {
  return a + b;
}

add(2, 5);

//! typescript will infer a data type, if you have not specified the type with an annotation
let number = 5;
let string = "string";

//TS assumes the data type is number, and errors when we change it
let variable = 6;

variable = "something";

//TS assumes type any because we didn't add a value initially
let emptyVariable;
emptyVariable = 8;
emptyVariable = "string";
