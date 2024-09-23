import Producto from "./Producto";

class CarritoCompra {
    private lProductos : Producto[];


    constructor(lProductos : Producto[]) {
        this.lProductos = lProductos;
    }


    public mostrarProductos() : void {
        if(this.lProductos.length == 0)  {
            console.log("Error: No hay productos en la lista.");
        } else {
            let count: number = 0;
            for(let producto of this.lProductos) {
                console.log(`Producto = {Nombre=${producto.getNombre()}, Cantidad=${producto.getCantidad()}, Precio=${producto.getPrecio()}}.`);
                count++;
            }
        }
    }

    public agregarProducto(producto : Producto) : void {
        this.lProductos.push(producto);
    }

    public eliminarProducto(nombre : string) : void {
        this.lProductos = this.lProductos.filter(producto => producto.getNombre() !== nombre);
        console.log("Producto eliminado con exito. Lista de productos ahora:");
        this.mostrarProductos();
    }

    public calcularTotal() : void {
        if(this.lProductos.length !== 0) {
            let total: number = 0;
            for(let producto of this.lProductos) {
                total = total + (producto.getPrecio() * producto.getCantidad());
            }
            console.log("El importe de la compra ascienda a:",total,"euros.");
        } else {
            console.log("No se puede calcular el total porque la lista esta vacia.");
        }
    }

}

export default CarritoCompra;