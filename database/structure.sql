/*** INICIO SCRIPT CREACIÓN ESTRUCTURA DE LA DB **/
DROP DATABASE tpo_integrador_digitallab;
CREATE DATABASE tpo_integrador_digitallab;

USE tpo_integrador_digitallab;

CREATE TABLE Pacientes(
	id INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(100) NOT NULL,
	apellido VARCHAR(100) NOT NULL,
    tipo_documento VARCHAR(10) NOT NULL,
    nro_documento INT NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    genero VARCHAR(1) NOT NULL,
    img_perfil VARCHAR(150) NULL,
    email VARCHAR(100) NOT NULL,
	contrasenia VARCHAR(100) NOT NULL,
	terminos TINYINT NOT NULL,
	estado TINYINT NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE Ubicaciones(
	id INT NOT NULL AUTO_INCREMENT,
	descripcion VARCHAR(100) NOT NULL,
	estado TINYINT NOT NULL,
    PRIMARY KEY(id)
);


CREATE TABLE Estudios(
	id INT NOT NULL AUTO_INCREMENT,
	titulo VARCHAR(150) NOT NULL,
	descripcion TEXT NOT NULL,
	antes VARCHAR(255) NOT NULL,
	/* estudio_ubicacion_id INT NOT NULL, */
	precio FLOAT NOT NULL,
	img VARCHAR(255) NULL,
	fecha_creacion DATE NOT NULL,
	fecha_modificacion DATE NOT NULL,
	estado TINYINT NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE Estudio_Ubicacion(
	id INT NOT NULL AUTO_INCREMENT,
	id_estudio INT NOT NULL,
	id_ubicacion INT NOT NULL,
	estado TINYINT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (id_estudio) REFERENCES Estudios(id)
);

CREATE TABLE Paciente_Estudio(
	id INT NOT NULL AUTO_INCREMENT,
	id_estudio INT NOT NULL,
	id_paciente INT NOT NULL,    
    importe FLOAT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (id_estudio) REFERENCES Estudios(id),
    FOREIGN KEY (id_paciente) REFERENCES Pacientes(id)
);

ALTER TABLE Estudio_Ubicacion
ADD CONSTRAINT FK_ubicacion
    FOREIGN KEY (id_ubicacion) REFERENCES Ubicaciones(id);

/*** FIN SCRIPT CREACIÓN ESTRUCTURA DE LA DB **/
