console.log("test");

//Select the form from the DOM
const form = document.getElementById("customer-form");

//make my button submit the user input by adding an event to the form
form.addEventListener("submit", function (event) {
  //we need to stop the default behaviour of the submit event
  event.preventDefault();

  //handle the form data by creating a new object to store the values
  //creates a new object
  const formData = new FormData(form);
  //stores the input values in that object
  const formValues = Object.fromEntries(formData);

  console.log(formValues);
  //we can access the object properties with dot notation
  console.log(formValues.customerName);
});
