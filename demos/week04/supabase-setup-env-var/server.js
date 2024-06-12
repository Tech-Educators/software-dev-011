//we import express and cors to use them in this file
import express from "express";
import cors from "cors";

//import dotenv to use our .env file
import dotenv from "dotenv";

//configure dotenv
dotenv.config();

//import pg to connect our database to the server
import pg from "pg";

//import our database connection string
//we need to use the keywords process.env to import the value of our environment variables
const dbConnectionString = process.env.DATABASE_URL;

//initialise our database
const db = new pg.Pool({
  connectionString: dbConnectionString,
});

//initialise our express app
const app = express();

//set my app to read json data
app.use(express.json());

//initialise cors policies
app.use(cors());

//set up a PORT for my server (number is irrelevant, unless it's a reserved port)
const PORT = 8080;

//what do we do with the port now? We have to listen to the PORT, so our server has a location to use
app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});

//create an endpoint for our root route to READ data
app.get("/", (request, response) => {
  response.json({ message: "This is the root route. How roude!" });
});

//to store my secrets, I created a .env file to keep them safe
//my .env file has been ignored!!!!
//to store data in the .env file, we use variables
//DATABASE_PASSWORD=password
