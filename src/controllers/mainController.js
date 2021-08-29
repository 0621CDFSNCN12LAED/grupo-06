const path = require('path');

const controller = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/index.html'));
    },
    register: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/users/register.html'));
    },
    login: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/users/login.html'));
    },
    productoDetalle: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/products/productDetail.html'));
    },
    carrito: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/products/productCart.html'));
    },
    crearProducto: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/products/crearProducto.html'));
    },
    modificarProducto: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/products/modificarProducto.html'));
    },
    listadoProductos: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/products/listadoProductos.html'));
    },
    perfilUsuario: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/users/perfil.html'));
    },
    /*agregar contacto, nosotros y sedes*/

};

module.exports = controller;