-- Create a table
CREATE TABLE IF NOT EXISTS biscuits (
    id SERIAL PRIMARY KEY,
    biscuit_name VARCHAR(255),
    description TEXT,
    crunchiness INT
  )
-- Insert data
  INSERT INTO biscuits (biscuit_name, description, crunchiness)
VALUES ('oreo', 'chocolate and fake cream', 5),
('Hobnob', 'A classic oaty biscuit', 4.5),
('best biscuits', 'Terrible', 1),
('Hobnob','A crunchy delight',5),
('pink wafers', 'pinkalicous', 2),
('Chocolate Hobnob', 'One GOATed biscuit', 5),
(
  'Custard Cream',
  'Nice classic',
  '5' 
),
('Manny Os', 'seagulls cant touch this', 4),
('Joe Minajs', 'cally b aint got nothing on me', 1)
-- Different ways of selecting data
SELECT * FROM biscuits 
SELECT * FROM biscuits WHERE id = 1
SELECT biscuit_name, crunchiness FROM biscuits WHERE id = 1
SELECT * FROM biscuits ORDER BY biscuit_name ASC
SELECT * FROM biscuits ORDER BY biscuit_name DESC
SELECT * FROM biscuits ORDER BY biscuit_name DESC LIMIT 3

-- Update data
-- make sure you have a condition WHERE
UPDATE biscuits SET crunchiness = 8 WHERE id = 1

-- Delete data
-- make sure you have a condition WHERE
DELETE FROM biscuits WHERE id = 4