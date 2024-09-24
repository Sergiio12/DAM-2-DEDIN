var calificacion : number = 50;

function obtenerCalificacion(calificacion : number): void {
    if(calificacion >= 0 && calificacion <= 100) {
        if(calificacion >= 0 && calificacion <= 40) {
            console.log("Insuficiente.");
        } else if(calificacion == 50) {
            console.log("Suficiente.");
        } else if(calificacion == 60) {
            console.log("Bien.");
        } else if(calificacion == 70 || calificacion == 80) {
            console.log("Notable.");
        } else {
            console.log("Sobresaliente.");
        }
    } else {
        console.log("Error: La califación debe estar en el rango [0, 100].");
    }
}

obtenerCalificacion(calificacion);