"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Move_1 = __importDefault(require("./Move"));
const Pokemon_1 = __importDefault(require("./Pokemon"));
let lPokemons = [];
function generarPokemons() {
    let movimientos = [];
    let lPokemons = [];
    let defensa;
    // ----------------------- Charizard ----------------------- 
    //Movimientos:
    const mov1 = new Move_1.default("Llamarada Infernal", 120);
    const mov2 = new Move_1.default("Fuego Sagrado", 100);
    const mov3 = new Move_1.default("Vuelo Abrasador", 90);
    const mov4 = new Move_1.default("Aliento Dracónico", 85);
    movimientos = [mov1, mov2, mov3, mov4];
    //Pokemon:
    const charizard = new Pokemon_1.default("Charizard", 150, 100, 80);
    charizard.setMovimientos(movimientos);
    lPokemons.push(charizard);
    // ----------------------- Blastoise ----------------------- 
    //Movimientos:
    const mov5 = new Move_1.default("Maremoto Explosivo", 100);
    const mov6 = new Move_1.default("Rayo Acuático", 95);
    const mov7 = new Move_1.default("Burbuja Tormentosa", 80);
    const mov8 = new Move_1.default("Escudo de Agua", 0); // Movimiento defensivo
    movimientos = [mov5, mov6, mov7, mov8];
    //Pokemon:
    const blastoise = new Pokemon_1.default("Blastoise", 180, 85, 90);
    blastoise.setMovimientos(movimientos);
    lPokemons.push(blastoise);
    // ----------------------- Venusaur ----------------------- 
    //Movimientos:
    const mov9 = new Move_1.default("Enredadera Venenosa", 90);
    const mov10 = new Move_1.default("Polvo Toxicógeno", 70);
    const mov11 = new Move_1.default("Rayo Solar", 110);
    const mov12 = new Move_1.default("Ruptura de Tierra", 100);
    movimientos = [mov9, mov10, mov11, mov12];
    //Pokemon:
    const venusaur = new Pokemon_1.default("Venusaur", 160, 80, 85);
    venusaur.setMovimientos(movimientos);
    lPokemons.push(venusaur);
    // ----------------------- Pikachu ----------------------- 
    //Movimientos:
    const mov13 = new Move_1.default("Trueno Fulminante", 110);
    const mov14 = new Move_1.default("Impacto Voltio", 95);
    const mov15 = new Move_1.default("Destello Relámpago", 85);
    const mov16 = new Move_1.default("Electrochorro", 100);
    movimientos = [mov13, mov14, mov15, mov16];
    //Pokemon:
    const pikachu = new Pokemon_1.default("Pikachu", 120, 90, 40);
    pikachu.setMovimientos(movimientos);
    lPokemons.push(pikachu);
    // ----------------------- Charmander ----------------------- 
    //Movimientos:
    const mov17 = new Move_1.default("Sombras Acechantes", 95);
    const mov18 = new Move_1.default("Maldición Tenebrosa", 90);
    const mov19 = new Move_1.default("Explosión Fantasmal", 120);
    const mov20 = new Move_1.default("Niebla Envenenada", 80);
    movimientos = [mov17, mov18, mov19, mov20];
    //Pokemon:
    const charmander = new Pokemon_1.default("Charmander", 100, 80, 60);
    charmander.setMovimientos(movimientos);
    lPokemons.push(charizard);
    return lPokemons;
}
function mostrarPokemons(lPokemons) {
    let contador = 0;
    let numMovimientos = 0;
    lPokemons.forEach(pokemon => {
        console.log(`Pokemon ${contador + 1}: {nombre=${pokemon.getNombre()}, hpActual=${pokemon.getHpActual()}}, hpMax=${pokemon.getHpMax()}, ataque=${pokemon.getAtaque()}, defensa=${pokemon.getDefensa()}, `);
        pokemon.getMovimientos().forEach(movimiento => {
            numMovimientos++;
        });
        console.log(`movimientos=${numMovimientos}}`);
        numMovimientos = 0;
        contador++;
    });
}
//Generamos pokemons:
lPokemons = generarPokemons();
//Mostramos pokemons
mostrarPokemons(lPokemons);
