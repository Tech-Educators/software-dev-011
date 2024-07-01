import { useState } from "react";

export default function TestiesForm() {
  //we need just ONE state with multiple properties to represent the different inputs
  //we are writing our own formValues object here (before, we had the FormData object)
  const [formValues, setFormValues] = useState({
    username: "",
    testimonial: "",
  });

  //this function controls the onSubmit event
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formValues);
  }

  //this function controls ALL the input changes with the onChange event
  function handleInputChange(event) {
    //we are setting the formValues object to be a merge between the initial value of the formValues state, and the new values that the user is adding.
    //we use event.target.name (name, as in, name attribute in the form) to be the key of the property and event.target.value to be the value (as in, the value attribute in the form) of the input
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  return (
    <>
      <h1>Form</h1>
      {/* we add the handleSubmit to the form in an onSubmit event */}
      <form onSubmit={handleSubmit}>
        {/* our classic for attribute is now called htmlFor. They are the same thing */}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          //! name is the MOST important attribute here!
          name="username"
          //we have updated the value because username is now a property inside the formValues object
          value={formValues.username}
          placeholder="Write your name"
          required
          //   we added the onChange event, so when the user types, the handleChange updates the value of the corresponding state variable
          onChange={handleInputChange}
        />
        <label htmlFor="testimonial">Testimonial</label>
        <input
          type="text"
          //! name is the MOST important attribute here!
          name="testimonial"
          //we have updated the value because testimonial is now a property inside the formValues object
          value={formValues.testimonial}
          placeholder="Write your testimonial"
          required
          //   we added the onChange event, so when the user types, the handleChange updates the value of the corresponding state variable
          onChange={handleInputChange}
        />
        <button type="submit">Submit your testimonial</button>
      </form>
      <p>Current value of username: {formValues.username}</p>
      <p>Current value of testimonial: {formValues.testimonial}</p>
    </>
  );
}
