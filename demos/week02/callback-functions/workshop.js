function myAwesomeFunction(onSuccessCallback, onFailureCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");

  // randomly choose if success is true or false
  const success = Math.random() > 0.5;
  if (success) {
    onSuccessCallback({
      message: "This is the message of success",
    });
  } else {
    onFailureCallback();
  }
}

//two functions to be used as arguments
function successMessage(data) {
  console.log("It was successful: ", data.message);
}

function failureMessage() {
  console.log("It failed :(");
}

//function call
myAwesomeFunction(successMessage, failureMessage);
