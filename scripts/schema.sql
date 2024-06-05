CREATE DATABASE sps_practica;

USE sps_practica;

CREATE TABLE participante (
	id INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(32) NOT NULL,
	apellido_1 VARCHAR(32) NOT NULL,
	apellido_2 VARCHAR(32) NOT NULL,
	fecha DATETIME NOT NULL,
	fotografia TEXT,
	PRIMARY KEY (id)
);

CREATE TABLE habilidad (
	id INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(32) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE participante_habilidad (
	id INT NOT NULL AUTO_INCREMENT,
	participante_id INT NOT NULL,
	habilidad_id INT NOT NULL,
	PRIMARY KEY (id),
	CONSTRAINT FOREIGN KEY (participante_id) REFERENCES participante (id),
	CONSTRAINT FOREIGN KEY (habilidad_id) REFERENCES habilidad (id)
);
