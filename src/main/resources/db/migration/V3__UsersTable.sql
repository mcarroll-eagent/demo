CREATE TABLE users
(
    user_id    bigserial primary key,
    username  TEXT NOT NULL,
    password TEXT NOT NULL,
    unique (username)
);