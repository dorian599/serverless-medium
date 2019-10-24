-- Data
--
INSERT INTO users (name, email, password) VALUES ('Peter', 'peter@example.com', '');
INSERT INTO users (name, email, password) VALUES ('Kike', 'mike@example.com', '');
INSERT INTO users (name, email, password) VALUES ('Maria', 'maria@example.com', '');

INSERT INTO posts (author_id, title, content, published) VALUES (1, 'The truth about All', 'A lot of lines', true);
INSERT INTO posts (author_id, title, content, published) VALUES (2, '7 Things about me', 'Too much content', true);
INSERT INTO posts (author_id, title, content, published) VALUES (2, 'Peter is the best', 'my draft', false);
INSERT INTO posts (author_id, title, content, published) VALUES (3, 'I bought new shoes and new shirt', 'more than 100 lines', true);
