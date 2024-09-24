import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function esNumValido(input: string): boolean {
    const numero = Number(input);
    return !Number.isNaN(numero);
}

function numeroCorrecto(numero: number): boolean {
    return (numero > 0 && numero < 10);
}

function pedirNumero() {
    rl.question('Introduce un número: ', (answer) => {
        if (esNumValido(answer)) {
            const numero = Number(answer);
            if (numeroCorrecto(numero)) {
                console.log(`Has introducido el número: ${numero}`);
                rl.close();
            } else {
                console.log("Número incorrecto. Debe estar en el rango (0, 9].");
                pedirNumero();
            }
        } else {
            console.log("(No has introducido un número)");
            pedirNumero();
        }
    });
}

pedirNumero();
