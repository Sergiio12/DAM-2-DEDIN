import Move from "./Move";
import Pokemon from "./Pokemon";

let lPokemons: Pokemon[] = [];

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

function mostrarPokemons(lPokemons: Pokemon[]) {
    let contador : number = 0;
    let numMovimientos : number = 0;
    lPokemons.forEach(pokemon => {
        console.log(`Pokemon ${contador+1}: {nombre=${pokemon.getNombre()}, hpActual=${pokemon.getHpActual()}}, hpMax=${pokemon.getHpMax()}, ataque=${pokemon.getAtaque()}, defensa=${pokemon.getDefensa()}, `);
        pokemon.getMovimientos().forEach(movimiento => {
            numMovimientos++;
        });
        console.log(`movimientos=${numMovimientos}}`);
        numMovimientos=0;
        contador++;
    });
}

//Generamos pokemons:
lPokemons = generarPokemons();

//Mostramos pokemons
mostrarPokemons(lPokemons);