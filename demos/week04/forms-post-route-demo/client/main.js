//select the form from the DOM
const form = document.getElementById("profile-form");
// const form = document.querySelector("#profile-form");

//I need an event listener to listen to the submit button
form.addEventListener("submit", handleSubmit);
// I do not use brackets because I am not calling the function here. I want the function run when the submit event happens.

//a function to handle the submit event
function handleSubmit(event) {
  //I need to stop the default behaviour of the form
  event.preventDefault();
  //I need to create a template object to contain my form data
  const formData = new FormData(form);
  //I need to give the formData object the form data
  //There are two ways of doing this --> the functionality is the same
  const formValues = Object.fromEntries(formData);
  //   const formValues = formData.get("user data");

  //I need to POST the formValues to the server using fetch
  //Our fetch has a second parameter, which is an object to specify the reason why we are fetching.
  fetch("http://localhost:8080/userdata", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  console.log(formValues);
}
