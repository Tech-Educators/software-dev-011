//A seed file is used for testing our database with sql queries
//Creating our tables
//Inserting test data

//import db from server.js --> I have destructured the db element
import { db } from "./server.js";

//a sql in the seed file --> we need to write our sql in backticks and inside the query method
//IF NOT EXISTS adds a condition to the CREATE TABLE query
db.query(`CREATE TABLE IF NOT EXISTS biscuits (
    id SERIAL PRIMARY KEY ,
    name VARCHAR(255),
    price NUMERIC,
    calories INTEGER,
    flavour TEXT,
    crunchiness INTEGER
)`);

//a sql query to insert data into my biscuits table
db.query(`INSERT INTO biscuits (name, price, calories, flavour, crunchiness)
    VALUES ('Mannys', 2, 0, 'chocolate', 7),
    ('Oreo', 45, 300, 'chocolate and fake cream', 5),
    ('Hobnobs', 3, 150, 'oaty', 3),
    ('Jaffa Cake', 6, 32, 'orange', 0)`);
