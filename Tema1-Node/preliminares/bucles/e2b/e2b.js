"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function hacerFactorial(numero) {
    var resultado = 1;
    for (var i = numero; i > 0; i--) {
        resultado *= i;
    }
    return resultado;
}
function esNumero(input) {
    var numero = Number(input);
    return !Number.isNaN(numero);
}
rl.question('Introduce un número: ', function (answer) {
    if (esNumero(answer)) {
        var numero = Number(answer);
        console.log("El n\u00FAmero introducido es ".concat(numero));
        var factorial = hacerFactorial(numero);
        console.log("El factorial de ".concat(numero, " es ").concat(factorial));
        rl.close();
    }
    else {
        console.log("Lo que has introducido no es un número.");
        rl.close();
    }
});
