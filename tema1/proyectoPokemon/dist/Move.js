"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Move {
    constructor(movName, damageMov) {
        this.movName = movName;
        this.damageMov = damageMov;
    }
    getMovName() {
        return this.movName;
    }
    setMove(movName) {
        this.movName = movName;
    }
    getDamageName() {
        return this.damageMov;
    }
    setDamage(damageMov) {
        this.damageMov = damageMov;
    }
}
exports.default = Move;
