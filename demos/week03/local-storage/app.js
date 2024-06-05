//variables, arrays, objects

//the object I want to store in local storage
//you could store the formData object in local storage
const egg = {
  cookingMethods: [
    "boil",
    "scramble",
    "fry",
    "poach",
    "microwave",
    "drop",
    "deviled",
  ],
  eggParent: [
    "duck",
    "chicken",
    "rubber duck",
    "ostrich",
    "alligator",
    "tortoise",
  ],
  colour: ["white", "brown", "eggshell", "yellow", "blue"],
  veganAlternatives: "silken tofu",
};

//Step 1: convert the object into strings (json)
const stringifiedEgg = JSON.stringify(egg);

//Step 2: put the data into local storage
//setItem needs two parameters: the key and the value
localStorage.setItem("egg", stringifiedEgg);

//Step 3: read the data from local storage
//I am getting the item using the key
const retrievedEgg = localStorage.getItem("egg");
console.log(retrievedEgg);

//Step 4: convert the data back to a regular object
const parsedEgg = JSON.parse(retrievedEgg);
console.log(parsedEgg);

//access the colour white in property colour
console.log(parsedEgg.colour[0]);

//access the ostrich in eggParent
console.log(parsedEgg.eggParent[3]);

//added a new property with a new value to parsedEgg --> this replaces the previous values of the key egg
localStorage.setItem("egg", (parsedEgg.test = "test"));

console.log(parsedEgg);

//the data you get from local storage is more up to date than the original data that you stored

// let counter = 0
// localStorage.setItem("counter", counter)
// setInterval(//changes the value of counter, 1000)
// localStorage.getItem("counter") //the value here is different, it is not zero anymore
//state has updated
