function convertirCelsiusAFahrenheit(celsius: number): string {
    let fahrenheit = (celsius * 9 / 5) + 32;
    
    let mensaje = clasificarTemperatura(celsius);
    
    return `Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)} °F. ${mensaje}`;
}

function clasificarTemperatura(celsius: number): string {
    if (celsius > 30) {
        return "Hace calor";
    } else if (celsius <= 10) {
        return "Hace frío";
    } else {
        return "Temperatura moderada";
    }
}

console.log(convertirCelsiusAFahrenheit(35));
console.log(convertirCelsiusAFahrenheit(8));
console.log(convertirCelsiusAFahrenheit(20));
