-- can you write a sql query to create a table called coasterrollers with the columns id, name, country, height?
CREATE TABLE IF NOT EXISTS coasterrollers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  country TEXT,
  height INTEGER
)


-- insert data into the table
INSERT INTO coasterrollers (name, height, country) VALUES
('Kingda Ka', 139, 'USA'),
('Steel Dragon 2000', 97, 'Japan'),
('Top Thrill Dragster', 128, 'USA'),
('Red Force', 112, 'Spain'),
('Fury 325', 99, 'USA');