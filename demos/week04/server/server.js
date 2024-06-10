//import the express folder from node_modules
import express from "express"; //ES6

//initialise an express app
const app = express();

//tell our app to use json data
app.use(express.json());

//add a local host port to our server (capitals are irrelevant)
const PORT = 8080;

//tell our app to listen to this port (you can write the port number directly here)
app.listen(PORT, function () {
  console.log(`Server is running in port ${PORT}`);
});

//create an endpoint for my root (ruuuuuuuut) route (raaaaaaut)
//we use the GET method to READ data
//two parameters: parameter 1 is the endpoint, parameter 2 is a callback function
app.get("/", function (request, response) {
  //we use request to handle the data that comes from the client
  response.json({ message: "This is the root route. How roude!" });
});

app.get("/comments", function (req, res) {
  res.json({ message: "Comments received" });
});

//create an endpoint to CREATE data
//we use the POST method to CREATE
//we can't see our POST endpoint in the browser, because browsers just READ data
app.post("/comments", function (request, response) {
  //when we handle data from the client, we will use request.body
  response.json({ message: "Data sent successfully" });
});

//to test the POST endpoint, we use Postman or Thunder Client
