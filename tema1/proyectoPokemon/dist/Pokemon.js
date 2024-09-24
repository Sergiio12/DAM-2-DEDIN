"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import Type from "./Type";
class Pokemon {
    constructor(nombre, hpMax, ataque, defensa) {
        this.nombre = nombre;
        this.hpMax = hpMax;
        this.hpActual = hpMax;
        this.ataque = ataque;
        this.defensa = defensa;
        this.lMovimientos = [];
    }
    getHpActual() {
        return this.hpActual;
    }
    setHpActual(hpActual) {
        this.hpActual = hpActual;
    }
    getHpMax() {
        return this.hpMax;
    }
    setHpMax(hpMax) {
        this.hpMax = hpMax;
    }
    getAtaque() {
        return this.ataque;
    }
    setAtaque(ataque) {
        this.ataque = ataque;
    }
    getDefensa() {
        return this.defensa;
    }
    setDefensa(defensa) {
        this.defensa = defensa;
    }
    setMovimientos(lMovimientos) {
        this.lMovimientos = lMovimientos;
    }
    getMovimientos() {
        return this.lMovimientos;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
}
exports.default = Pokemon;
