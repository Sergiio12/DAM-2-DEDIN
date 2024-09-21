var ObjetoPrueba = {
    propiedad1: 1,
    propiedad2: "Andres",
    propiedad3: false
};
var propiedades = 0;
function contarPropiedades(objeto) {
    for (var clave in objeto) {
        propiedades++;
    }
}
contarPropiedades(ObjetoPrueba);
console.log("Propiedades del objeto: " + propiedades);
