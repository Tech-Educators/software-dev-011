let ingredients = ["eggs", "flour", "sugar", "water"];

//how can I destructure this array?
let [firstIngredient, secondIngredient, thirdIngredient, fourthIngredient] =
  ingredients;

//you can leave gaps in between commas to destructure very particular items
let [IngredientOne, , IngredientThree] = ingredients;

//you can also use the slice method to extract portions of the array

//Examples
let deliveryTeam = ["Manny", "Joe", "Jez"];
let [teach, , notTeach] = deliveryTeam;
let [nameOne, nameTwo, nameThree] = deliveryTeam;

let test = ["one", "two", "three"];
let [numbeOne, numberTwo, numberThree] = test;
let [num1, num2, num3] = test;

let countEspanol = ["uno", "dos", "tres"];
let [firstNumber, secondNumber, thirdNumer] = countEspanol;

let alexRage = ["fire", "water", "bomb"];
let [, secondWeapon, thirdWeapon] = alexRage;
console.log(secondWeapon, thirdWeapon);

let [first, , third] = alexRage;
console.log(first, third);
