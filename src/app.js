const express = require("express");
const app = express();
const path = require("path");

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

const mainRouter = require("./routes/main-routes");

//Seteos de endpoints
app.use("/", mainRouter);