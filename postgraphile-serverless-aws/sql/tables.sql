-- Tables
--
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    email text NOT NULL UNIQUE,
    password text NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    content text NOT NULL,
    published BOOLEAN NOT NULL DEFAULT FALSE,
    author_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE
);
