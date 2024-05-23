console.log("Test");
console.dir(document);

//selecting HTML elements on JS --> always the first step
const mainTitle = document.getElementById("main-title");
console.log(mainTitle);

const mainContainer = document.querySelector(".main-container");
console.log(mainContainer);

const h2 = document.querySelector("h2");
console.log(h2);

//selecting multiple items --> querySelectorAll

//adding a new HTML element
const newImg = document.createElement("img");
console.log(newImg);

//we gave atributes and values to those atributes
newImg.src =
  "https://static.independent.co.uk/2023/01/19/12/Red%20bird%20of%20paradise.jpg?width=1200&height=900&fit=crop";

newImg.alt = "bird of paradise";

//we need to append our image to the DOM (only for nodes)
mainContainer.appendChild(newImg);

//delete an element
newImg.remove();
mainContainer.remove();

//change background colour
const bgColour = (document.body.style.backgroundColor = "blue");
console.log(bgColour);

//change font family
const fontFamily = (document.body.style.fontFamily = "monospace");
