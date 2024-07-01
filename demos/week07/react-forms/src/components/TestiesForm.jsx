import { useState } from "react";

export default function TestiesForm() {
  //declare useState to track the input value
  //the initial value is an empty string because the type of the inputs is text
  const [username, setUsername] = useState("");
  const [testimonial, setTestimonial] = useState("");

  //this function controls the onSubmit event
  function handleSubmit(event) {
    event.preventDefault();
  }
  //I want to write a form with two inputs: username and testimonial
  return (
    <>
      <h1>Form</h1>
      {/* we add the handleSubmit to the form in an onSubmit event */}
      <form onSubmit={handleSubmit}>
        {/* our classic for attribute is now called htmlFor. They are the same thing */}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Write your name"
          required
        />
        <label htmlFor="testimonial">Testimonial</label>
        <input
          type="text"
          name="testimonial"
          placeholder="Write your testimonial"
          required
        />
        <button type="submit">Submit your testimonial</button>
      </form>
    </>
  );
}
