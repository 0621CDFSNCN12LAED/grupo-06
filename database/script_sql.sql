/*** INICIO SCRIPT CREACIÓN ESTRUCTURA DE LA DB **/
DROP DATABASE tpo_integrador_digitallab;
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

ALTER TABLE Estudios
ADD CONSTRAINT FK_estudio_ubicacion
    FOREIGN KEY (estudio_ubicacion_id) REFERENCES Estudio_Ubicacion(id);

ALTER TABLE Estudio_Ubicacion
ADD CONSTRAINT FK_ubicacion
    FOREIGN KEY (id_ubicacion) REFERENCES Ubicaciones(id);


/*** FIN SCRIPT CREACIÓN ESTRUCTURA DE LA DB **/

/*** INICIO SCRIPT CARGA DE DATOS ***/
/*** UBICACIONES ***/
INSERT INTO Ubicaciones (descripcion, estado) VALUES ('Extracción en domicilio', 1);
INSERT INTO Ubicaciones (descripcion, estado) VALUES ('Hisopado en domicilio', 1);
INSERT INTO Ubicaciones (descripcion, estado) VALUES ('Extracción en sede', 1);
INSERT INTO Ubicaciones (descripcion, estado) VALUES ('Punción en domicilio', 1);


/*** ESTUDIOS ***/
INSERT INTO Estudios (titulo, descripcion, antes, precio, img, fecha_creacion, fecha_modificacion, estado) 
VALUES ('Perfil lipídico', 'El perfil lipídico mide la concentración de algunas de estas sustancias en la sangre para establecer el riesgo de desarrollar una enfermedad cardiovascular, para el seguimiento del tratamiento de las concentraciones inadecuadas de lípidos.','Debe hacer ayuno de 9-12 horas antes de la obtención de la muestra y solamente se puede beber agua', 8000, '1631156310151_estudio.jpg', SYSDATE(), SYSDATE(), true);

INSERT INTO Estudios (titulo, descripcion, antes, precio, img, fecha_creacion, fecha_modificacion, estado) 
VALUES ('Test Rapido Anticuerpos SarsCovid', 'Se trata de un hisopado nasofaríngeo para detectar en forma directa la presencia de material genético del virus en personas infectadas. Es el método con más alta especificidad. El resultado será positivo mientras dure la presencia viral en el organismo.', 'Se recomienda en casos de pacientes sintomáticos de hasta 7 días de evolución desde la fecha del inicio de los síntomas', 5500, '1631156310153_estudio.jpg', SYSDATE(), SYSDATE(), true);

INSERT INTO Estudios (titulo, descripcion, antes, precio, img, fecha_creacion, fecha_modificacion, estado) 
VALUES ('Preocupacional', 'Estudio requerido por el empleador que incluye: análisis de sangre básico, análisis de orina, ...', 'Debe hacer ayudn de 8hs', 1500, '1631156310150_estudio.jpg', SYSDATE(), SYSDATE(), true);
INSERT INTO Estudios (titulo, descripcion, antes, precio, img, fecha_creacion, fecha_modificacion, estado) 
VALUES ('Test de Parternidad', 'Es un método preciso para resolver cuestiones de parentesco por razones médicas, legales o personales. Las pruebas consisten en determinar el perfil genético de los miembros sometidos a estudio, a partir de una muestra de hisopado o de sangre.', '', 2600, '1631156310148_estudio.jpg', SYSDATE(), SYSDATE(), true);
INSERT INTO Estudios (titulo, descripcion, antes, precio, img, fecha_creacion, fecha_modificacion, estado) 
VALUES ('Test Rapido Anticuerpos SarsCovid', 'Son pruebas rápidas inmunocromatográfica para la detección cualitativa de anticuerpos IgG/IgM anti SARS-COV-2 (COVid-19) que se utilizan con el objetivo de vigilancia de la enfermedad (investigación epidemiológica) y no de diagnóstico.', '', 4000, '1631297563041_estudio.jpg', SYSDATE(), SYSDATE(), true);

/*** ESTUDIO_UBICACION ***/
INSERT INTO Estudio_Ubicacion(id_estudio, id_ubicacion, estado) VALUES (1,1,true);
INSERT INTO Estudio_Ubicacion(id_estudio, id_ubicacion, estado) VALUES (2, 2, true);
INSERT INTO Estudio_Ubicacion(id_estudio, id_ubicacion, estado) VALUES (3, 3, true);
INSERT INTO Estudio_Ubicacion(id_estudio, id_ubicacion, estado) VALUES (4, 3, true);
INSERT INTO Estudio_Ubicacion(id_estudio, id_ubicacion, estado) VALUES (5, 4, true);



/*** FIN SCRIPT CARGA DE DATOS ***/
