function generarOpcionAleatoria() {
    return Math.floor(Math.random() * 3);
}
function obtenerOpcionString(opcion) {
    switch (opcion) {
        case 0: return "Piedra";
        case 1: return "Papel";
        case 2: return "Tijera";
        default: return "";
    }
}
function determinarGanador(jugador1, jugador2) {
    if (jugador1 === jugador2) {
        return "Empate";
    }
    else if ((jugador1 === 0 && jugador2 === 2) ||
        (jugador1 === 1 && jugador2 === 0) ||
        (jugador1 === 2 && jugador2 === 1)) {
        return "Jugador 1 gana";
    }
    else {
        return "Jugador 2 gana";
    }
}
function jugarPiedraPapelTijera() {
    var jugador1 = generarOpcionAleatoria();
    var jugador2 = generarOpcionAleatoria();
    var opcionJugador1 = obtenerOpcionString(jugador1);
    var opcionJugador2 = obtenerOpcionString(jugador2);
    console.log("Jugador 1: ".concat(opcionJugador1));
    console.log("Jugador 2: ".concat(opcionJugador2));
    var resultado = determinarGanador(jugador1, jugador2);
    console.log("Resultado: ".concat(resultado));
}
jugarPiedraPapelTijera();
