class Producto {
    private nombre: string;
    private precio: number;
    private cantidad: number;

    constructor(nombre: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    public getNombre() : string {
        return this.nombre;
    }

    public setNombre(nombre: string) {
        return this.nombre;
    }

    public getPrecio() : number {
        return this.precio;
    }

    public setPrecio(precio: number) {
        this.precio = precio;
    }

    public getCantidad() : number {
        return this.cantidad;
    }

    public setCantidad(cantidad : number) {
        this.cantidad = cantidad;
    }

}

export default Producto;