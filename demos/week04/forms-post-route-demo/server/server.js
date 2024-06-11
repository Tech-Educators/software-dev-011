import express from "express";
import cors from "cors";
//we need start our app with express
const app = express();

//we need to tell our server what data we are handling
app.use(express.json());
//we need to allow for our server to communicate with clients
app.use(cors());

// let express = {
//     json: function (){
//parse data into json
//     }
// }

//assign a port to our app
const PORT = 8080;

//I need my app to listen to the port
app.listen(PORT, function () {
  console.log(`Server is running using port ${PORT}`);
});

//I want to build a test endpoint in my root route
//I want to READ data in this route --> GET method
app.get("/", function (request, response) {
  response.json({ message: "This is the root route. How roude!" });
});

//I want to build an endpoint to collect form data
//I want to CREATE data in a database --> POST method
app.post("/userdata", function (request, response) {
  //I want to assign the value of the data to a property
  console.log(request.body); //body represents the user data
  response.json({ message: "User data received" });
});

//I want to build an endpoint to send form data back from the database to client
//I want to READ data from the database --> GET method
