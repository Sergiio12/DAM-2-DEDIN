function convertirCelsiusAFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    var mensaje = clasificarTemperatura(celsius);
    return "Temperatura en Fahrenheit: ".concat(fahrenheit.toFixed(2), " \u00B0F. ").concat(mensaje);
}
function clasificarTemperatura(celsius) {
    if (celsius > 30) {
        return "Hace calor";
    }
    else if (celsius <= 10) {
        return "Hace frío";
    }
    else {
        return "Temperatura moderada";
    }
}
console.log(convertirCelsiusAFahrenheit(35));
console.log(convertirCelsiusAFahrenheit(8));
console.log(convertirCelsiusAFahrenheit(20));
