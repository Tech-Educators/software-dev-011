//we can run this on the terminal with node app or ion the browser

//we use curly braces to declare an object
//we have key-value pairs
let myObject = {
  propertyOne: "valueOne",
  propertyTwo: "valueTwo",
  propertyThree: "valueThree",
};

//example
let city = {
  cityName: "Nottingham",
  country: "UK",
  population: 331000,
  size: "74.61 square kilometres",
  area: "Nottinghamshire",
  mainExport: "beer",
  hasPubs: true,
  language: "English",
  hasSchools: true,
  hasHospitals: true,
  elevation: 100,
  ranking: "",
};

let favouriteColour = "blue";
let student = {};
student.name = "Richard";
student.location = "Norwich";
student.favouriteColour = favouriteColour;

console.log(student);

//how to access individual properties
//dot notation
console.log(city.cityName);
console.log(city.language);
console.log(city.hasPubs);

//bracket notation
city["cityName"];

console.log(city["cityName"]);

//dot notation and bracket notation are used to access individual properties. The syntax is different, but the result is the same.

// console.log();
// document.body.style.backgroundColor;

//adding new properties --> we use dot notation and the new key-value pair

city.ranking = 32;

console.log(city);

let myArray = ["one", "two"];
myArray[0]; // "one"
