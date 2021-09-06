const express = require("express");
const app = express();
const path = require("path");

app.listen(3030, () => {
    console.log("Se prendió!");
});

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");

app.set("views", "./src/views");

const mainRouter = require("./src/routes/main-routes");

app.use("/", mainRouter);