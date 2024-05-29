//complex object

let biscuit = {
  flavour: "chocolate",
  crunchiness: 7,
  hasChocolateChips: true,
  dunkingRate: "5 seconds",
  size: "20cm",
  colour: "brown",
  allergyInfo: ["dairy", "nuts"], //we can use an array to store multiple values
  caloriesPerServing: 100,
  brand: {
    //we can use an object as value
    brandName: "Manny's",
    brandColours: ["purple", "salmon"],
    inSupermarkets: false,
  },
};

//access the properties inside my object

//access flavour property
console.log(biscuit.flavour);

//access the dairy in allergyInfo
console.log(biscuit.allergyInfo[0]);

//access the value salmon in the brandColours in brand in biscuit
console.log(biscuit.brand.brandColours[1]);

//complex objects --> document object
console.dir(document);
