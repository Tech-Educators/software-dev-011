console.log("test");

//select the form from the DOM
const form = document.querySelector("#profile-form");
console.log(form);

//add an event listener to interact with our submit button
form.addEventListener("submit", function (event) {
  //I need to prevent the default form action
  event.preventDefault();
  //I want to create a template object to store my form data
  const formData = new FormData(form);
  //I want to add the data to the object
  const formValues = Object.fromEntries(formData);
  console.log(formValues);

  //I want to store the formValues in local storage
  //Step 1: STRINGIFY
  const stringifiedForm = JSON.stringify(formValues);

  //Step 2: setItem()
  localStorage.setItem("form", stringifiedForm);
});

//select the form container
const formContainer = document.getElementById("form-container");

//I want to display the form data from local storage on the page
function displayFormData() {
  //get the data from local storage
  //Step 3: getItem() using the key
  const retrievedForm = localStorage.getItem("form");

  //Step 4: parse the data back into an object
  const parsedForm = JSON.parse(retrievedForm);
  console.log(parsedForm);
  //I am going to create DOM elements to contain the form data
  const formUsername = document.createElement("p");
  const formLocation = document.createElement("p");
  const formBiography = document.createElement("p");

  //I want to give content to the p tags
  formUsername.textContent = parsedForm.username;
  formLocation.textContent = parsedForm.location;
  formBiography.textContent = parsedForm.biography;

  //I want to append the p tags in the DOM
  //use append() for multiple children
  formContainer.append(formUsername, formLocation, formBiography);
}

displayFormData();
