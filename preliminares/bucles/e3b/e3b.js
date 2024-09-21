"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function esNumValido(input) {
    var numero = Number(input);
    return !Number.isNaN(numero);
}
function numeroCorrecto(numero) {
    return (numero > 0 && numero < 10);
}
function pedirNumero() {
    rl.question('Introduce un número: ', function (answer) {
        if (esNumValido(answer)) {
            var numero = Number(answer);
            if (numeroCorrecto(numero)) {
                console.log("Has introducido el n\u00FAmero: ".concat(numero));
                rl.close();
            }
            else {
                console.log("Número incorrecto. Debe estar en el rango (0, 9].");
                pedirNumero(); // Volver a pedir el número
            }
        }
        else {
            console.log("(No has introducido un número)");
            pedirNumero(); // Volver a pedir el número
        }
    });
}
// Inicia el proceso
pedirNumero();
