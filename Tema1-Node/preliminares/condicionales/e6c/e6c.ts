function generarOpcionAleatoria(): number {
    return Math.floor(Math.random() * 3);
}

function obtenerOpcionString(opcion: number): string {
    switch(opcion) {
        case 0: return "Piedra";
        case 1: return "Papel";
        case 2: return "Tijera";
        default: return "";
    }
}

function determinarGanador(jugador1: number, jugador2: number): string {
    if (jugador1 === jugador2) {
        return "Empate";
    } else if (
        (jugador1 === 0 && jugador2 === 2) || 
        (jugador1 === 1 && jugador2 === 0) || 
        (jugador1 === 2 && jugador2 === 1)
    ) {
        return "Jugador 1 gana";
    } else {
        return "Jugador 2 gana";
    }
}

function jugarPiedraPapelTijera(): void {
    let jugador1 = generarOpcionAleatoria();
    let jugador2 = generarOpcionAleatoria();
    
    let opcionJugador1 = obtenerOpcionString(jugador1);
    let opcionJugador2 = obtenerOpcionString(jugador2);
    
    console.log(`Jugador 1: ${opcionJugador1}`);
    console.log(`Jugador 2: ${opcionJugador2}`);
    
    let resultado = determinarGanador(jugador1, jugador2);
    console.log(`Resultado: ${resultado}`);
}

jugarPiedraPapelTijera();
