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

/*** PACIENTES ***/
INSERT INTO Pacientes(nombre, tipo_documento, nro_documento, fecha_nacimiento, genero, img_perfil, email, contrasenia, terminos)
    VALUES ('Tull Tams', 'DNI', 31303030, SYSDATE(), 'M', null, 'tulltams@gmail.com', '$2a$12$MKrjfwTszjhI4C2AToX1putDW8GTRzceueX/6XE0.Ch.WwP5ehEMa', true);
INSERT INTO Pacientes(nombre, tipo_documento, nro_documento, fecha_nacimiento, genero, img_perfil, email, contrasenia, terminos)
    VALUES ('Pedro Williams', 'DNI', 20859432, SYSDATE(), 'M', null, 'pedrito@gmail.com', '$2a$12$AHV8cTbIk2TULrzBmnBAuu/lnruM9BMlRQvJhcdfAt.IxizZzdw0G', true);
INSERT INTO Pacientes(nombre, tipo_documento, nro_documento, fecha_nacimiento, genero, img_perfil, email, contrasenia, terminos)
    VALUES ('Maria Lour', 'DNI', 40988543, SYSDATE(), 'F', null, 'mariamaria.@gmail.com', '$2a$12$0XNGmJsRlJDjTJCNHkouzuNvMhYTyflDJ6w3DLUfv/sKQPljaV9NG', true);

/*** PACIENTE_ESTUDIO ***/
INSERT INTO Paciente_Estudio(id_estudio, id_paciente, importe) VALUES (1,1,8000);    
INSERT INTO Paciente_Estudio(id_estudio, id_paciente, importe) VALUES (1,3,1500); 
INSERT INTO Paciente_Estudio(id_estudio, id_paciente, importe) VALUES (2,4,2600);
INSERT INTO Paciente_Estudio(id_estudio, id_paciente, importe) VALUES (3,2,5500);    
INSERT INTO Paciente_Estudio(id_estudio, id_paciente, importe) VALUES (1,5,4000);    
/*** FIN SCRIPT CARGA DE DATOS ***/

