function imprimirCuadrado(numero) {
    for (var i = 0; i < numero; i++) {
        var linea = "";
        for (var j = 0; j <= numero; j++) {
            linea += "*";
        }
        console.log(linea);
    }
}
imprimirCuadrado(4);
