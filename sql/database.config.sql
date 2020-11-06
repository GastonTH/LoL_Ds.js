drop database if exists wor_bot_db;
CREATE DATABASE wor_bot_db;

USE wor_bot_db;

CREATE TABLE w_usuarios(
     id INT(10) NOT NULL,
     username VARCHAR(255) NOT NULL,
     password VARCHAR(255) NOT NULL,
     PRIMARY KEY (id)
);

CREATE TABLE w_ficha(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    nivel INT(255) NOT NULL,
    experiencia INT(255) NOT NULL,
    fuerza INT(100) NOT NULL,
    armadura INT(100) NOT NULL,
    resistencia_magica INT(100) NOT NULL,
    vitalidad INT(100) NOT NULL,
    inteligencia INT(100) NOT NULL,
    destreza INT(100) NOT NULL,
    user_id INT, 
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT key_user FOREIGN KEY (user_id) REFERENCES Usuarios(id),
    PRIMARY KEY (id)
); 