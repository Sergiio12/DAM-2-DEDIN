function hacerTriangulo(numero: number) {
    for (let i = 1; i <= numero; i++) {
        let linea = "";
        for (let j = 0; j < i; j++) {
            linea += "*";
        }
        console.log(linea);
    }
}

hacerTriangulo(5);
