PRAGMA foreign_keys = ON;

INSERT INTO users(username, email, password)
VALUES ('awdeorio', 'awdeorio@umich.edu', 'password'),
('jflinn', 'Jason Flinn', 'password'),
('michjc', 'Michael Cafarella', 'password'),
('jag', 'H.V. Jagadish', 'password');

INSERT INTO recipes(postid, name, owner)
VALUES (1, 'hotdog', 'awdeorio'),
(2, 'cookies', 'jflinn'),
(3, 'sandwich', 'awdeorio'),
(4, 'cake', 'jag');
