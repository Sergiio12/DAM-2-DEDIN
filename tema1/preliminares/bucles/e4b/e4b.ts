const nombres = ["Ana", "Luis", "Pedro", "Javier", "Mario", "Carlota", "Juan"];

function iterarElementos(nombres: string[]) {
    for(let nombreIterado of nombres) {
        console.log(nombreIterado);
    }
}

iterarElementos(nombres);