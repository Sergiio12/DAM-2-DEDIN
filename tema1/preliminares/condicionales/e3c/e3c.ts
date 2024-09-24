let anio : number = 2024;

function esAnioValido(anio : number): boolean {
    if(anio > 1000 && anio < 10000) {
        return true;
    }
    return false;
}

function esAnioBisiesto(anio : number) {
    if(anio % 4 == 0) {
        console.log("Año es bisiesto.");
    } else {
        console.log("Año no es bisiesto.");
    }
}

if(esAnioValido(anio)) {
    esAnioBisiesto(anio);
} else {
    console.log("Año no válido.");
}