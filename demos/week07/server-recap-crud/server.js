// import my packages
// const express = require("express"); //commonjs dialect
import express, { response } from "express"; //ES6 dialect
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

//package configs

// express config
const app = express();
app.use(express.json());

//cors config
app.use(cors());

//dotenv config
dotenv.config();

//pg config
//connection string --> we store it in the .env / the value is in the Supabase connect section
const connectionString = process.env.DATABASE_URL;
//set up a pool
const db = new pg.Pool({ connectionString: connectionString });

//endpoint for the root route
//If you are not going to use the request parameter, you can write an underscore instead to keep the space
app.get("/", (_, res) => {
  res.json({ message: "This is the root route. How roude!" });
});

//GET endpoint from one table
app.get("/biscuits", async (req, res) => {
  //to get biscuit_name and description from biscuits table
  const result = await db.query(
    `SELECT biscuit_name, description FROM biscuits`
  );
  res.json(result.rows);
});

//GET endpoint joining two tables
app.get("/userbiscuits", async (req, res) => {
  //to get biscuit_name and username joining biscuits and users
  const result = await db.query(
    `SELECT biscuits.biscuit_name AS "biscuit name", users.username AS user 
    FROM biscuits
    JOIN users ON biscuits.user_id = users.id;
    `
  );
  res.json(result.rows);
});

body: {
  username: "Jez";
}
//POST endpoint
app.post("/newuser", async (req, res) => {
  // client sends this --> body: {username: "Jez"}
  // const username = req.body.username;
  const { username } = req.body;
  //$1 is a parameter and username is the argument
  const result = await db.query(`INSERT INTO users (username) VALUES ($1);`, [
    username,
  ]);
  res.json(result.rows);
});

//PUT endpoint
//DELETE endpoint

//set up the server port
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
