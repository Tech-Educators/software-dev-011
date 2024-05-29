let biscuit = {
  flavour: "chocolate",
  crunchiness: 7,
  hasChocolateChips: true,
  dunkingRate: "5 seconds",
  size: "20cm",
  colour: "brown",
  allergyInfo: ["dairy", "nuts"],
  caloriesPerServing: 100,
  brand: {
    brandName: "Manny's",
    brandColours: ["purple", "salmon"],
    inSupermarkets: false,
  },
  //I added a property, and the value is a function: this is a method
  saySlogan: function () {
    console.log("Manny's are munchable!");
  },
  sayHiToCustomer: function (customer) {
    console.log(`Hello ${customer}! Thank you for trusting Manny's`);
  },
  getColour: function () {
    return biscuit.colour;
  },
  //method with arrow function
  getCrunchiness: () => {
    return biscuit.crunchiness;
  },
};

//access the method inside the saySlogan property
//we use brackets to call the function
biscuit.saySlogan();
// console.log(biscuit.saySlogan());
biscuit.sayHiToCustomer("Theo");
console.log(biscuit.getColour());
console.log(biscuit.getCrunchiness());

//console object
let console = {
  property: "value",
  property: "value",
  log: function () {
    //write data in console
  },
};

//document object
let document = {
  property: "value",
  getElementById: function () {
    //connect a DOM element by using the ID
  },
};
