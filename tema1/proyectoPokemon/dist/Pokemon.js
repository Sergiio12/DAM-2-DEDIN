"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
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
    atacar(victima) {
        let factorAleatorio = (Math.random() * 0.15);
        let movimiento;
        let damage;
        if (victima !== undefined) {
            console.log("Preparandote para atacar...");
            movimiento = this.preguntarMovimiento();
            damage = (this.getAtaque() / victima.getDefensa()) * movimiento.getDamage() * (1 - factorAleatorio);
            victima.setHpActual(victima.getHpActual() - damage);
            if (victima.getHpActual() < 0) {
                victima.setHpActual(0);
                console.log("Victima fulminada.");
            }
            console.log(`Has infligido un daño de ${damage}HP a tu victima.`);
        }
        else {
            console.log("No se ha inicializado ese objeto?");
        }
    }
    preguntarMovimiento() {
        let contador = 1;
        console.log("Ataques disponibles:");
        this.lMovimientos.forEach(tipoAtaque => {
            console.log(`${contador}: Nombre: ${tipoAtaque.getMovName()}, ataque: ${tipoAtaque.getDamage()}.`);
            contador++;
        });
        let numero;
        let numeroValido = undefined;
        while (numeroValido === undefined) {
            numero = readlineSync.question("Escoge tipo de ataque (numero): ");
            const numParsed = parseInt(numero);
            if (!isNaN(numParsed) && numParsed >= 1 && numParsed <= this.lMovimientos.length) {
                numeroValido = numParsed;
            }
            else {
                console.log("Introduce una respuesta valida.");
            }
        }
        const ataqueSeleccionado = this.lMovimientos[numeroValido - 1];
        console.log(`Has seleccionado: ${ataqueSeleccionado.getMovName()} con un ataque de ${ataqueSeleccionado.getDamage()}.`);
        return ataqueSeleccionado;
    }
}
exports.default = Pokemon;
