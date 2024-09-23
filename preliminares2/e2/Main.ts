import CarritoCompra from "./CarritoCompra";
import Producto from "./Producto";

//Productos:
const producto1 = new Producto("producto1", 2, 5);
const producto2 = new Producto("producto2", 3, 4);
const producto3 = new Producto("producto3", 5, 3);

//Lista de productos:
const lProductos: Producto[] = []; //[producto1, producto2, producto3];

//MiCarrito:
const miCarrito = new CarritoCompra(lProductos);
miCarrito.calcularTotal();
miCarrito.agregarProducto(producto1);
miCarrito.agregarProducto(producto2);
miCarrito.agregarProducto(producto3);
miCarrito.mostrarProductos();
miCarrito.eliminarProducto("producto1");
miCarrito.calcularTotal();