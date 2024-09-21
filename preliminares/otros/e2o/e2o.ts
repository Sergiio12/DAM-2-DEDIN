function imprimirCuadrado(numero: number) {
    for(let i = 0; i < numero; i++) {
        let linea = "";
        for(let j = 0; j <= numero; j++) {
            linea += "*";
        }
        console.log(linea);
    }
}

imprimirCuadrado(4); 