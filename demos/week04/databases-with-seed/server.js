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

//initialise our database (I used export, so my db is available in the seed.js)
export const db = new pg.Pool({
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

//create an endpoint to READ data from the biscuits table
//I need to add async and await because Supabase is an API and we don't know how long it will take to respond.
app.get("/biscuits", async (req, res) => {
  //write a sql query that SELECTS data from the database
  const result = await db.query(`
    SELECT * FROM biscuits
    `);
  console.log(result);
  //parse the result into json and wrangle the data from the result object
  res.json(result.rows);
});

//create an endpoint to READ specific data from the database
app.get("/somebiscuits", async function (request, response) {
  //write a sql query that SELECTS specific data from the database
  //we are using parameter placeholders $1, $2, $3... for security purposes
  //we can concatenate conditions using AND
  const result = await db.query(
    `
  SELECT * FROM biscuits WHERE name = $1 
  `
  );
  //parse the result into json and wrangle the data from the result object
  response.json(result.rows);
});

//to store my secrets, I created a .env file to keep them safe
//my .env file has been ignored!!!!
//to store data in the .env file, we use variables
//DATABASE_PASSWORD=password
