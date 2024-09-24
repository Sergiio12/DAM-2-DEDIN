function hacerTriangulo(numero) {
    for (var i = 1; i <= numero; i++) {
        var linea = ""; // Inicializa una cadena vacía
        for (var j = 0; j < i; j++) {
            linea += "*"; // Agrega un asterisco a la línea
        }
        console.log(linea); // Imprime la línea completa
    }
}
// Ejemplo de uso
hacerTriangulo(5);
