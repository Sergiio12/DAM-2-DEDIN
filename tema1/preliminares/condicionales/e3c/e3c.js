var anio = 1;
function esAnioValido(anio) {
    if (anio > 1000 && anio < 10000) {
        return true;
    }
    return false;
}
function esAnioBisiesto(anio) {
    if (anio % 4 == 0) {
        console.log("Año es bisiesto.");
    }
    else {
        console.log("Año no es bisiesto.");
    }
}
if (esAnioValido(anio)) {
    esAnioBisiesto(anio);
}
else {
    console.log("Año no válido.");
}
