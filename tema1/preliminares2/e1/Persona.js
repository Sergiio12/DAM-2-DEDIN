"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola ".concat(this.nombre, ", tienes ").concat(this.edad, " a\u00F1os."));
    };
    return Persona;
}());
exports.default = Persona;
