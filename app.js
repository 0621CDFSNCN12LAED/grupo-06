const express = require("express");
const app = express();
const path = require("path");

app.listen(3030, () => {
  console.log("Se prendió!");
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});

app.get("/producto-detalle", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/productDetail.html"));
});

app.get("/carrito", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/productCart.html"));
});
