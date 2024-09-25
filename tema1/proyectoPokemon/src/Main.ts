import Move from "./Move";
import Pokemon from "./Pokemon";
import * as readlineSync from 'readline-sync';

//                                       DECLARACION DE VARIABLES.


let lPokemons: Pokemon[] = [];
let pokemonElegido: Pokemon;
let pokemonRivalInicial: Pokemon;


//                                       DECLARACION DE METODOS


function generarPokemons() : Pokemon[] {
    let movimientos: Move[] = [];
    let lPokemons: Pokemon[] = [];
    let defensa;

    // ----------------------- Charizard ----------------------- 
    //Movimientos:
    const mov1 = new Move("Llamarada Infernal", 120);
    const mov2 = new Move("Fuego Sagrado", 100);
    const mov3 = new Move("Vuelo Abrasador", 90);
    const mov4 = new Move("Aliento Dracónico", 85);

    movimientos = [mov1, mov2, mov3, mov4];

    //Pokemon:
    const charizard = new Pokemon("Charizard", 150, 100, 80);
    charizard.setMovimientos(movimientos);
    lPokemons.push(charizard);

    // ----------------------- Blastoise ----------------------- 
    //Movimientos:
    const mov5 = new Move("Maremoto Explosivo", 100);
    const mov6 = new Move("Rayo Acuático", 95);
    const mov7 = new Move("Burbuja Tormentosa", 80);
    const mov8 = new Move("Escudo de Agua", 0); // Movimiento defensivo

    movimientos = [mov5, mov6, mov7, mov8];

    //Pokemon:
    const blastoise = new Pokemon("Blastoise", 180, 85, 90);
    blastoise.setMovimientos(movimientos);
    lPokemons.push(blastoise);

    // ----------------------- Venusaur ----------------------- 
    //Movimientos:
    const mov9 = new Move("Enredadera Venenosa", 90);
    const mov10 = new Move("Polvo Toxicógeno", 70);
    const mov11 = new Move("Rayo Solar", 110);
    const mov12 = new Move("Ruptura de Tierra", 100);

    movimientos = [mov9, mov10, mov11, mov12];

    //Pokemon:
    const venusaur = new Pokemon("Venusaur", 160, 80, 85);
    venusaur.setMovimientos(movimientos);
    lPokemons.push(venusaur);

    // ----------------------- Pikachu ----------------------- 
    //Movimientos:
    const mov13 = new Move("Trueno Fulminante", 110);
    const mov14 = new Move("Impacto Voltio", 95);
    const mov15 = new Move("Destello Relámpago", 85);
    const mov16 = new Move("Electrochorro", 100);

    movimientos = [mov13, mov14, mov15, mov16];

    //Pokemon:
    const pikachu = new Pokemon("Pikachu", 120, 90, 40);
    pikachu.setMovimientos(movimientos);
    lPokemons.push(pikachu);

    // ----------------------- Charmander ----------------------- 
    //Movimientos:
    const mov17 = new Move("Sombras Acechantes", 95);
    const mov18 = new Move("Maldición Tenebrosa", 90);
    const mov19 = new Move("Explosión Fantasmal", 120);
    const mov20 = new Move("Niebla Envenenada", 80);

    movimientos = [mov17, mov18, mov19, mov20];

    //Pokemon:
    const charmander = new Pokemon("Charmander", 100, 80, 60);
    charmander.setMovimientos(movimientos);
    lPokemons.push(charizard);


    return lPokemons;
}

function preguntarPokemon(lPokemons: Pokemon[]) : Pokemon {
    let contador : number = 1;
    let numMovimientos : number = 0;
    console.log("Lista de pokemons:");
    lPokemons.forEach(pokemon => {
        let numMovimientos: number = pokemon.getMovimientos().length;
        
        console.log(`Pokemon ${contador}: {nombre=${pokemon.getNombre()}, hpActual=${pokemon.getHpActual()}, hpMax=${pokemon.getHpMax()}, ataque=${pokemon.getAtaque()}, defensa=${pokemon.getDefensa()}, movimientos=${numMovimientos}}`);
        
        contador++;
    });

    let respUsuario : string;
    let numeroValido : number | undefined = undefined;

    while(numeroValido === undefined) {
        respUsuario = readlineSync.question("Selecciona pokemon: ");
        const respUsuarioParsed = parseInt(respUsuario);
        if(!isNaN(respUsuarioParsed) && respUsuarioParsed >= 1 && respUsuarioParsed <= lPokemons.length) {
            numeroValido = respUsuarioParsed;
        } else {
            console.log("Introduce una respuesta valida.");
        }
    }
    const pokemonElegido = lPokemons[numeroValido - 1];
    //console.log("Has elegido a " + pokemonElegido.getNombre() + ".");
    return pokemonElegido;
}

function mostrarDatosPokemonElegido(miPokemon: Pokemon) : void {
    //Empezamos turno nosotros:
    console.log();
    console.log("Informacion de tu pokemon (" + miPokemon.getNombre() + "):");
    console.log("Vida maxima: " + miPokemon.getHpActual() + "HP.");
    console.log("Ataque: " + miPokemon.getAtaque() + ".");
    console.log("Defensa: " + miPokemon.getDefensa() + ".");
    console.log("Movimientos: " + miPokemon.getMovimientos().length + ".");
    console.log();
}

function generarRivalAleatorio(lPokemons: Pokemon[]) : Pokemon { 
    let indexAleatorio : number;
    let pokemonRival : Pokemon;
    console.log("Generando rival...");
    indexAleatorio =  Math.floor(Math.random() * lPokemons.length);
    pokemonRival = lPokemons[indexAleatorio];
    console.log("Tu rival es: " + pokemonRival.getNombre() + ".");
    console.log("Informacion:");
    console.log("Vida maxima: " + pokemonRival.getHpActual() + "HP.");
    console.log("Ataque: " + pokemonRival.getAtaque() + ".");
    console.log("Defensa: " + pokemonRival.getDefensa() + ".");
    console.log("Movimientos: " + pokemonRival.getMovimientos().length + ".");
    console.log();
    return pokemonRival;
}

function preguntarContinuacion(): string {
    let resp : string;
    let respValido: boolean = false;
    resp = readlineSync.question("¿Quieres continuar combatiendo con otros Pokémon? (SI/NO): ");
    while (!respValido) {
        resp = readlineSync.question("¿Quieres continuar combatiendo con otros Pokémon? (SI/NO): ");
        if (resp.toLowerCase() === "si" || resp.toLowerCase() === "no") {
            respValido = true;
        } else {
            console.log("Responde con 'SI' o 'NO'.");
        }
    }
    return resp;
}

function finalizarCombate(respUsuario: string): boolean {
    return respUsuario.toLowerCase() === "si";
}

function preguntarAccion() {
    let accion : string;
    let respValida : boolean = false;
    let numeroParseado : number;
    while(!respValida) {
        console.log();
        console.log("Acciones disponibles:");
        console.log("1. Atacar.");
        console.log("2. Curarme.");
        console.log();
        accion = readlineSync.question("Elige accion:");
        numeroParseado = parseInt(accion);

        if(!isNaN(numeroParseado) || numeroParseado === 1 || numeroParseado === 2) {
            respValida = true;
        } else {
            console.log("Error: Se espera que introduzcas un valor numerico (1 o 2).");
        }

    }
}

function realizarAccion(accion : number) {

}

function iniciarCombate(miPokemon : Pokemon, pokemonRival : Pokemon) {
    let turno : number = 0;
    let seguirCombatiendo : boolean = true;
    while(miPokemon.getHpActual() > 0 && seguirCombatiendo) {

    }
}


//                                       LLAMADA A LOS METODOS


//Generamos pokemons:
lPokemons = generarPokemons();
//Preguntamos cual queremos usar:
pokemonElegido = preguntarPokemon(lPokemons);
mostrarDatosPokemonElegido(pokemonElegido);
pokemonRivalInicial = generarRivalAleatorio(lPokemons);