const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
//Configuración para métodos override HTTP de PUT y DELETE
const methodOverride = require("method-override");
const expressSession = require("express-session");
/* const loggedUser = require("./middleware/autorLoggedUser"); */

//Uso CORS para evitar problemas de acceso desde REACT
app.use(
    cors({
        //Le agrego el servidor de React que es desde donde acepto pedidos, de ningun otro lado salvo react.
        origin: "http://localhost:3000",
    })
);

//Se levanta webserver
app.listen(3030, () => {
    console.log("Se prendió! port: 3030");
});

//Va a servir los archivos publicos desde /img (esta es su raíz)
app.use(express.static(path.join(__dirname, "../public")));

//Configuración del entorno para capturar los datos de formulario como objeto literal y tambien transformarlo a JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Configuración del motor de vistas EJS
app.set("view engine", "ejs");

//Configuración de la carpeta donde se alojan las views
app.set("views", (path.join(__dirname, "../src/views")));

//Configuración de express session
app.use(
    expressSession({
        secret: "hay que hacerse estudios",
        saveUninitialized: true,
        resave: true,
    })
);

//Configuración para métodos override HTTP de PUT y DELETE
app.use(methodOverride("_method"));

//Ruteadores
const mainRouter = require("./routes/main-routes");

//Seteos de endpoints
app.use("/", mainRouter);

// logueo

/* app.use (loggedUser); */


//Configuración captura error 404
app.use((req, res, next) => {
    res.status(404).render("404-not-found");
    next();
});