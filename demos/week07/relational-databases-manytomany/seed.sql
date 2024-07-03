//CREATE
CREATE TABLE biscuits (
    id SERIAL PRIMARY KEY,
    biscuit_name VARCHAR(255),
    src TEXT,
    description VARCHAR(255),
    crunchiness INTEGER,
     user_id INTEGER REFERENCES users(id)
);

CREATE TABLE flavours (
    id SERIAL PRIMARY KEY,
    flavour_name VARCHAR(255)
);

CREATE TABLE biscuits_flavours (
    flavour_id INTEGER REFERENCES flavours(id),
    biscuit_id INTEGER REFERENCES biscuits(id),
    PRIMARY KEY (flavour_id, biscuit_id)
);

//Extra
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    
);

//INSERT
INSERT INTO flavours (flavour_name) VALUES ('chocolate'), ('oaty'), ('vanilla')
INSERT INTO biscuits_flavours (flavour_id, biscuit_id) VALUES (1,2), (3,3), (2,4), (2,5), (1,6)
INSERT INTO biscuits (biscuit_name, src, description, crunchiness) 
VALUES ('Bourbon', 'https://images.unsplash.com/photo-1603194556500-bdd4c947a952?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 6),
('Custard Cream', 'https://avatars.githubusercontent.com/u/144026692?v=4', 'Mouth-watering piece of heaven', 5 ),
('Hobnob', 'https://upload.wikimedia.org/wikipedia/commons/9/95/Hobnobs.jpg', 'Mouth-watering piece of heaven', 4),
('Ginger Nuts', 'https://images.unsplash.com/photo-1557089706-68d02dbda277?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 4 ),
('Chocolate Cookies', 'https://images.unsplash.com/photo-1589988802149-7f9cb13a468e?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Delicious cookie with scrumptious chocolate', 4);

//JOINS
//Shows biscuits table and junction table

SELECT * FROM biscuits
JOIN biscuits_flavours ON biscuits.id = biscuits_flavours.biscuit_id

//Shows the whole list of biscuits and flavours
//Order matters! I need to join biscuits_flavours before I can use it in the JOIN flavours line
SELECT biscuits.biscuit_name AS name, 
biscuits.description,
flavours.flavour_name 
FROM biscuits
JOIN biscuits_flavours ON biscuits_flavours.biscuit_id = biscuits.id
JOIN flavours ON flavours.id = biscuits_flavours.flavour_id