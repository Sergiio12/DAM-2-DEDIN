let cadena: string = "Typescript no se puede comparar con Java.";

function contienePalabra(cadena: string, palabraABuscar: string): boolean {
    cadena = cadena.toLowerCase();
    palabraABuscar = palabraABuscar.toLowerCase();
    
    return cadena.includes(palabraABuscar); 
}

console.log(contienePalabra(cadena, "typescript"));
