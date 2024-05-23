//function structure
// function functionName() {
//     action
// }

//function declaration --> your function is NOT running
function sayHello() {
  console.log("Hello!");
}

//invoke or call the function --> now my function is running
sayHello();

//function declaration --> your function is NOT running
//we added two parameters
function sayHello(username, age) {
  console.log("Hello " + username + " .Your age is " + age);
}

//invoke or call the function --> now my function is running
//we gave our parameters the value of the arguments below
sayHello("Manny", 68);

//function with return --> the value added after return is accessible outside the function scope
function add(a, b) {
  return a + b;
}

console.log(add(6, 7));

//selecting a DOM elements by id
const mainContainer = document.getElementById("main-container");

//function that adds a new image
function createImg() {
  let newImg = document.createElement("img");
  newImg.src =
    "https://www.pbs.org/wnet/nature/files/2021/09/catherine-merlin-qeGHu5Jdy5s-unsplash-scaled-e1631640316457.jpg";
  mainContainer.appendChild(newImg);
}

createImg();
