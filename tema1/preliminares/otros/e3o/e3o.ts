function dibujarPiramide(n: number) {
    for (let i = 0; i < n; i++) {
        let linea = "";

        for (let j = 0; j < n - i - 1; j++) {
            linea += " ";
        }

        for (let j = 0; j < 2 * i + 1; j++) {
            linea += "*";
        }

        console.log(linea);
    }
}

dibujarPiramide(5);
