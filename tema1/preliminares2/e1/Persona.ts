class Persona {
    private nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() : void {
        console.log(`Hola ${this.nombre}, tienes ${this.edad} años.`);
    }

}

export default Persona;