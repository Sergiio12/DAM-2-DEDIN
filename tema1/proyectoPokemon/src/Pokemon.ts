import Move from "./Move";
import * as readlineSync from 'readline-sync';
//import Type from "./Type";

class Pokemon {
    private nombre : string;
    private hpActual: number;
    private hpMax: number;
    private ataque: number;
    private defensa: number;
    private lMovimientos: Move[];

    constructor(nombre: string, hpMax: number, ataque: number, defensa: number) {
        this.nombre = nombre;
        this.hpMax = hpMax;
        this.hpActual = hpMax;
        this.ataque = ataque;
        this.defensa = defensa;
        this.lMovimientos = [];
    }

    public getHpActual() : number {
        return this.hpActual;
    }

    public setHpActual(hpActual: number) : void {
        this.hpActual = hpActual;
    }

    public getHpMax() : number {
        return this.hpMax;
    }

    public setHpMax(hpMax: number) : void {
        this.hpMax = hpMax;
    }

    public getAtaque() : number {
        return this.ataque;
    }

    public setAtaque(ataque: number) : void {
        this.ataque = ataque;
    }

    public getDefensa() : number {
        return this.defensa;
    }

    public setDefensa(defensa: number) : void {
        this.defensa = defensa;
    }

    public setMovimientos(lMovimientos: Move[]) : void {
        this.lMovimientos = lMovimientos;
    }

    public getMovimientos() : Move[] {
        return this.lMovimientos;
    }

    public getNombre() : string {
        return this.nombre;
    }

    public setNombre(nombre: string) : void {
        this.nombre = nombre;
    }

    public atacar(victima: Pokemon, miTurno : boolean) : void { 
        if(victima === undefined) {
            console.log("Objeto victima no creado?");
        } else {
            let damage: number;
            let movimiento : Move;
            let factorAleatorio = (Math.random() * 0.15);
            if(miTurno) { //Si es mi turno:
                console.log("Preparandote para atacar...");
                console.log();
                movimiento = this.preguntarMovimiento();
                damage = (this.getAtaque() / victima.getDefensa()) * movimiento.getDamage() * (1 - factorAleatorio);   
                victima.setHpActual(victima.getHpActual() - damage);
                if(victima.getHpActual() < 0) {
                    victima.setHpActual(0);
                }
                console.log(`${this.getNombre()} ha infligido un daño de ${damage}HP a ${victima.getNombre()}.`);
                console.log();
            } else { //Si no es mi turno:
                console.log("La IA esta atacando realizando ataque...");
                console.log();
                movimiento = this.escogerMovimientoAleatorio();
                damage = (this.getAtaque() / victima.getDefensa()) * movimiento.getDamage() * (1 - factorAleatorio);
                victima.setHpActual(victima.getHpActual() - damage);
                if(victima.getHpActual() < 0) {
                    victima.setHpActual(0);
                }
                console.log(`${this.getNombre()} ha infligido un daño de ${damage}HP a ${victima.getNombre()}.`);
                console.log();
            }
        }
    }

    private escogerMovimientoAleatorio() : Move { //Metodo pensado para la IA
        let indiceAleatorio = Math.floor(Math.random() * this.lMovimientos.length);
        console.log("La IA ha escogido el movimiento: " + this.lMovimientos[indiceAleatorio].getMovName());
        return this.lMovimientos[indiceAleatorio];
    }

    private preguntarMovimiento(): Move { //Metodo pensado para el que ejecuta el programa.
        let contador: number = 1;
        console.log("Ataques disponibles:");
        this.lMovimientos.forEach(tipoAtaque => {
            console.log(`${contador}: Nombre: ${tipoAtaque.getMovName()}, ataque: ${tipoAtaque.getDamage()}.`);
            contador++;
        });
    
        let numero: string;
        let numeroValido: number | undefined = undefined;
        console.log();

        while (numeroValido === undefined) {
            numero = readlineSync.question("Escoge tipo de ataque (numero): ");
            const numParsed = parseInt(numero);

            if (!isNaN(numParsed) && numParsed >= 1 && numParsed <= this.lMovimientos.length) {
                numeroValido = numParsed; 
                console.log();
            } else {
                console.log("Introduce una respuesta valida.");
            }
        }
    
        const ataqueSeleccionado = this.lMovimientos[numeroValido - 1];
        console.log(`Has seleccionado ${ataqueSeleccionado.getMovName()} con un ataque de ${ataqueSeleccionado.getDamage()}.`);
        return ataqueSeleccionado;
    }
        

}

export default Pokemon;