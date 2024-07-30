//we are going to create a class to build some object instances
//class names are capitalised by convention
//the structure of the class is similar to an object
class Biscuit {
  //we need to build the template for our objects
  //the parameters are the placeholder for the actual values of the object instances
  constructor(
    biscuitName,
    biscuitCrunchiness,
    biscuitFlavour,
    biscuitBrand,
    biscuitDunkability
  ) {
    //I need to give my object instances a context
    (this.name = biscuitName),
      (this.crunchiness = biscuitCrunchiness),
      (this.flavour = biscuitFlavour),
      (this.brand = biscuitBrand),
      (this.dunkability = biscuitDunkability);
  }
  //this is a custom method
  description() {
    console.log(
      `The ${this.name} has a flavour of ${this.flavour} and a dunkability of ${this.dunkability}. You can always trust ${this.brand}`
    );
  }
}

//we are going to build an instance of a Biscuit
const custardCream = new Biscuit(
  "custard cream",
  6,
  "vanilla",
  "Manny's Biscuits",
  4
);

console.log(custardCream);

const bourbon = new Biscuit("bourbon", 7, "chocolate", "Manny's Biscuits", 5);

console.log(bourbon.name);
bourbon.description();
custardCream.description();

// name: biscuitName,
// crunchiness: biscuitCrunchiness,
// flavour: biscuitFlavour,
// brand: biscuitBrand,
// dunkability: biscuitDunkability

//Let's build a sub-class that inherits the properties from Biscuit
//!The idea is that your super class contains the properties that will be used by all the sub-classes, and each sub-class will have those properties plus their own custom properties.

class Cookie extends Biscuit {
  constructor(
    biscuitName,
    biscuitCrunchiness,
    biscuitFlavour,
    biscuitBrand,
    biscuitDunkability,
    biscuitPrice
  ) {
    //the super operator uses the same properties I specified above in Biscuit
    super(
      biscuitName,
      biscuitCrunchiness,
      biscuitFlavour,
      biscuitBrand,
      biscuitDunkability
    );
    //this method deletes a property from the super class
    delete this.crunchiness;
    this.price = biscuitPrice;
  }

  slogan() {
    console.log(
      `The ${this.name} are the best in the world! Always trust ${this.brand}`
    );
  }
}

//This is an instance of Cookie
const chocolateChip = new Cookie(
  "chocolate chip cookies",
  null,
  "chocolate",
  "Manny's Biscuits",
  5,
  1.5
);

console.log(chocolateChip);
chocolateChip.slogan();

//the sub-class has access to the Biscuit method, but it has to contain all the properties necessary to work
chocolateChip.description();
