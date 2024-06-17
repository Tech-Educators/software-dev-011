import { db } from "./server.js";

db.query(`CREATE TABLE IF NOT EXISTS Ramen(
    id SERIAL PRIMARY KEY,
    Flavour VARCHAR(255),
    Price NUMERIC,
    Spiciness NUMERIC,
    Time_To_Cook INTEGER
)`);

db.query(`INSERT INTO ramen (Flavour, Price, Spiciness, Time_To_Cook)
    VALUES
    ('Fake Pork', 0.99, 2, 120),
    ('Fake Beef', 1.99, 2, 180),
    ('Fake Chicken', 2.99, 2, 240),
    ('Fake Shrimp', 3.99, 2, 60)
`);
