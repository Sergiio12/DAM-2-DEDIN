import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function hacerFactorial(numero: number): number {
    let resultado: number = 1;
    for (let i = numero; i > 0; i--) {
        resultado *= i;
    }
    return resultado;
}

function esNumero(input: string): boolean {
    const numero = Number(input);
    return !Number.isNaN(numero);
}

rl.question('Introduce un número: ', (answer) => {
    if (esNumero(answer)) {
        const numero = Number(answer);
        const factorial = hacerFactorial(numero);
        console.log(`El factorial de ${numero} es ${factorial}`);
        rl.close();
    } else {
        console.log("Lo que has introducido no es un número.");
        rl.close();
    }
});
