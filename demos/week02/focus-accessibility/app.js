const elements = document.querySelectorAll("input, a, textarea, button");
console.log(elements); //all my elements are stored in an array

elements.forEach((element) => {
  element.addEventListener("focus", function (event) {
    console.log(`Element: ${event.target} is focused`);
    //you could have an announcer with an aria-live attribute that announces the element when focused
  });
});
