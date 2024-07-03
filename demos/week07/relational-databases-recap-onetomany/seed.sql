-- CREATE
CREATE TABLE biscuits (
    id SERIAL PRIMARY KEY,
    biscuit_name VARCHAR(255),
    src TEXT,
    description VARCHAR(255),
    crunchiness INTEGER,
     user_id INTEGER REFERENCES users(id)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
);

-- INSERT
INSERT INTO users (username, user_id) VALUES ('Manny', 1),('Joe', 2), ('Tim', 3);
INSERT INTO biscuits (biscuit_name, src, description, crunchiness) 
VALUES ('Bourbon', 'https://images.unsplash.com/photo-1603194556500-bdd4c947a952?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 6),
('Custard Cream', 'https://avatars.githubusercontent.com/u/144026692?v=4', 'Mouth-watering piece of heaven', 5 ),
('Hobnob', 'https://upload.wikimedia.org/wikipedia/commons/9/95/Hobnobs.jpg', 'Mouth-watering piece of heaven', 4),
('Ginger Nuts', 'https://images.unsplash.com/photo-1557089706-68d02dbda277?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 4 ),
('Chocolate Cookies', 'https://images.unsplash.com/photo-1589988802149-7f9cb13a468e?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Delicious cookie with scrumptious chocolate', 4);

-- JOINS
-- STEP 1: Select the column(s) that you want from table 1 and 2
SELECT users.username, biscuits.biscuit_name FROM biscuits
--STEP 2: Join table 2
JOIN users
-- STEP 3: we need to write the connection between the two tables
ON biscuits.user_id = users.id 

-- SELECT username, biscuit_name FROM users AND biscuits

