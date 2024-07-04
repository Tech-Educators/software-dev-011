//This the form component

export default function Form() {
  //we need state to save the formData
  //formData = {
  // key: value,
  // key: value
  // }

  //we do not need useEffect here!

  //a handle submit function
  //   function handleSubmit() {
  //something to prevent the default behaviour of the form
  //something that fetches the POST endpoint
  // fetch("url", {
  //     method:
  //     body:
  //     headers: {
  //         "Content/type": "application/json"
  //     }
  // })
  //   }

  //a function to handle the changes of the user input
  //   function handleChange() {
  //we need to add the values from the initial state
  //we need to set the properties for the new object
  //the key is the target name; the value is the target value
  //   }
  return (
    <>
      {/* you need to have a form here with two events: one to submit, one to track changes */}
      {/* remember to be consistent with how you name the name attribute!!!!
  the name attribute in your input should be the same as the database column where you are storing the data */}
      Form
    </>
  );
}
