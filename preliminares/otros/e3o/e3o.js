function dibujarPiramide(n) {
    for (var i = 0; i < n; i++) {
        var linea = "";
        for (var j = 0; j < n - i - 1; j++) {
            linea += " ";
        }
        for (var j = 0; j < 2 * i + 1; j++) {
            linea += "*";
        }
        console.log(linea);
    }
}
dibujarPiramide(5);
