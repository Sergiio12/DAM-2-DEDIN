"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarritoCompra_1 = require("./CarritoCompra");
var Producto_1 = require("./Producto");
//Productos:
var producto1 = new Producto_1.default("producto1", 2, 5);
var producto2 = new Producto_1.default("producto2", 3, 4);
var producto3 = new Producto_1.default("producto3", 5, 3);
//Lista de productos:
var lProductos = []; //[producto1, producto2, producto3];
//MiCarrito:
var miCarrito = new CarritoCompra_1.default(lProductos);
miCarrito.calcularTotal();
miCarrito.agregarProducto(producto1);
miCarrito.agregarProducto(producto2);
miCarrito.agregarProducto(producto3);
miCarrito.mostrarProductos();
miCarrito.eliminarProducto("producto1");
miCarrito.calcularTotal();
