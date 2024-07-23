CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  title TEXT,
  author VARCHAR (255)
)

CREATE TABLE IF NOT EXISTS genres (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
)

CREATE TABLE books_genres (
  book_id BIGINT REFERENCES books(id),
  genre_id BIGINT REFERENCES genres(id)
)

INSERT INTO books (title, author) VALUES
('The Hobbit', 'JRR Tolkien'),
('Tiny Habits' , 'BJ Fogg' ),
('The Lord of the Rings', 'JRR Tolkien'),
('The Silmarillion', 'JRR Tolkien'),
('Misery', 'Stephen King'),
('The Lion, the Witch and the Wardrobe', 'C.S.Lewis'),
('Steal Like An Artist', 'Austin Kleon'),
('1984', 'George Orwell');

INSERT INTO genres (name) VALUES
('chilren'),
('fantasy'),
('dystopian'),
('thriller'),
('horror'),
('fiction'),
('non-fiction'),
('art'),
('self help');

INSERT INTO books_genres (book_id, genre_id) VALUES
('1','1'),
('1','2'),
('1','6'),
('5','4'),
('5','6'),
('6','1'),
('6','2');

SELECT books.author, books.title, ARRAY_AGG(genres.name) AS genre
FROM books
JOIN books_genres ON books.id = books_genres.book_id
JOIN genres ON books_genres.genre_id = genres.id
GROUP BY books.title, books.author