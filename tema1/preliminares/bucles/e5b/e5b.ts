const ObjetoPrueba = {
    propiedad1: 1,
    propiedad2: "Andres",
    propiedad3: false
};

let propiedades = 0;

function contarPropiedades(objeto: object) {
    for(let clave in objeto) {
        propiedades++;
    }
}

contarPropiedades(ObjetoPrueba);
console.log("Propiedades del objeto: " + propiedades);