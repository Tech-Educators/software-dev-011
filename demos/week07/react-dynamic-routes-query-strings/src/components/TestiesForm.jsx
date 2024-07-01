import { useState } from "react";

export default function TestiesForm() {
  //declare useState to track the input value
  //the initial value is an empty string because the type of the inputs is text
  //we need to link the state variables to the corresponding input using the value attribute
  const [username, setUsername] = useState("");
  const [testimonial, setTestimonial] = useState("");

  //this function controls the onSubmit event
  function handleSubmit(event) {
    event.preventDefault();
  }

  //these functions control the input changes with the onChange event
  function handleUsernameChange(event) {
    setUsername(event.target.value);
    console.log(event.target.value);
  }

  function handleTestimonialChange(event) {
    setTestimonial(event.target.value);
    console.log(event.target.value);
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
          value={username}
          placeholder="Write your name"
          required
          //   we added the onChange event, so when the user types, the handleChange updates the value of the corresponding state variable
          onChange={handleUsernameChange}
        />
        <label htmlFor="testimonial">Testimonial</label>
        <input
          type="text"
          name="testimonial"
          value={testimonial}
          placeholder="Write your testimonial"
          required
          //   we added the onChange event, so when the user types, the handleChange updates the value of the corresponding state variable
          onChange={handleTestimonialChange}
        />
        <button type="submit">Submit your testimonial</button>
      </form>
      <p>Current value of username: {username}</p>
      <p>Current value of testimonial: {testimonial}</p>
    </>
  );
}
