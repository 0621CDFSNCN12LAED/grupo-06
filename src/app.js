const express = require("express");
const app = express();
const path = require("path");
//Configuración para métodos override HTTP de PUT y DELETE
const methodOverride = require("method-override");

//Se levanta webserver
app.listen(3030, () => {
    console.log("Se prendió!");
});

//Va a servir los archivos publicos desde /img (esta es su raíz)
app.use(express.static(path.join(__dirname, "../public")));

//Configuración del entorno para capturar los datos de formulario como objeto literal y tambien transformarlo a JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Configuración del motor de vistas EJS
app.set("view engine", "ejs");

//Configuración de la carpeta donde se alojan las views
app.set("views", "./src/views");

//Configuración para métodos override HTTP de PUT y DELETE
app.use(methodOverride("_method"));

//Ruteadores
const mainRouter = require("./routes/main-routes");

//Seteos de endpoints
app.use("/", mainRouter);