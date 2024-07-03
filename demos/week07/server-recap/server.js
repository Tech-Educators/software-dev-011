// import my packages
// const express = require("express"); //commonjs dialect
import express from "express"; //ES6 dialect
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

//set up the server port
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
