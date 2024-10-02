let numero : number = 3;

function analizarNumero(numero : number) {
    if(numero < 0) {
        console.log("El numero es negativo.");
    } else if(numero > 0) {
        console.log("El numero es positivo.");
    } else {
        console.log("El numero es igual a cero.");
    }
}

analizarNumero(numero);