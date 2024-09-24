"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarritoCompra = /** @class */ (function () {
    function CarritoCompra(lProductos) {
        this.lProductos = lProductos;
    }
    CarritoCompra.prototype.mostrarProductos = function () {
        if (this.lProductos.length == 0) {
            console.log("Error: No hay productos en la lista.");
        }
        else {
            var count = 0;
            for (var _i = 0, _a = this.lProductos; _i < _a.length; _i++) {
                var producto = _a[_i];
                console.log("Producto = {Nombre=".concat(producto.getNombre(), ", Cantidad=").concat(producto.getCantidad(), ", Precio=").concat(producto.getPrecio(), "}."));
                count++;
            }
        }
    };
    CarritoCompra.prototype.agregarProducto = function (producto) {
        this.lProductos.push(producto);
    };
    CarritoCompra.prototype.eliminarProducto = function (nombre) {
        this.lProductos = this.lProductos.filter(function (producto) { return producto.getNombre() !== nombre; });
        console.log("Producto eliminado con exito. Lista de productos ahora:");
        this.mostrarProductos();
    };
    CarritoCompra.prototype.calcularTotal = function () {
        if (this.lProductos.length !== 0) {
            var total = 0;
            for (var _i = 0, _a = this.lProductos; _i < _a.length; _i++) {
                var producto = _a[_i];
                total = total + (producto.getPrecio() * producto.getCantidad());
            }
            console.log("El importe de la compra ascienda a:", total, "euros.");
        }
        else {
            console.log("No se puede calcular el total porque la lista esta vacia.");
        }
    };
    return CarritoCompra;
}());
exports.default = CarritoCompra;
