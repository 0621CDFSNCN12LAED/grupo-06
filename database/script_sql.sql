CREATE DATABASE tpo_integrador_digitallab;

USE tpo_integrador_digitallab;

CREATE TABLE Pacientes(
	id INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(100) NOT NULL,
    tipo_documento VARCHAR(10) NOT NULL,
    nro_documento INT NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    genero VARCHAR(1) NOT NULL,
    img_perfil VARCHAR(150) NULL,
    email VARCHAR(100) NOT NULL,
	contrasenia VARCHAR(100) NOT NULL,
	terminos TINYINT NOT NULL,
	PRIMARY KEY(id)
),

CREATE TABLE Estudios(
	titulo VARCHAR(150) NOT NULL,

),