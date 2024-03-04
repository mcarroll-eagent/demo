CREATE TABLE user_role_junction (
    user_id INT NOT NULL,
    role_id INT NOT NULL ,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (role_id) REFERENCES roles(role_id)

)