var cadena = "Typescript no se puede comparar con Java.";
function contienePalabra(cadena, palabraABuscar) {
    cadena = cadena.toLowerCase();
    palabraABuscar = palabraABuscar.toLowerCase();
    return cadena.includes(palabraABuscar);
}
console.log(contienePalabra(cadena, "typescript"));
