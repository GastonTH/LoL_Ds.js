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
    CONSTRAINT key_user FOREIGN KEY (user_id) REFERENCES w_usuarios(id),
    PRIMARY KEY (id)
); 

CREATE TABLE w_inventario(
     id INT NOT NULL AUTO_INCREMENT,
     nombre VARCHAR(255) NOT NULL,
     ad INT(100) NOT NULL,
     ap INT(100) NOT NULL,
     hp INT(100) NOT NULL,
     intg INT(100) NOT NULL,
     cantidad INT(100) NOT NULL,
     descripcion VARCHAR(255) NOT NULL,
     PRIMARY KEY(id)
);

CREATE TABLE w_tiene(
     id_inventario INT,
     CONSTRAINT key_inventario FOREIGN KEY (id_inventario) REFERENCES w_inventario(id),
     id_ficha INT,
     CONSTRAINT key_ficha FOREIGN KEY (id_ficha) REFERENCES w_ficha(id),
     CONSTRAINT idInvIdFicha PRIMARY KEY (id_ficha, id_inventario)
);