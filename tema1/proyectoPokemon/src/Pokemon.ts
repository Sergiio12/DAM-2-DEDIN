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

    public atacar(victima: Pokemon) : void {
        let factorAleatorio = (Math.random() * 0.15);
        let movimiento : Move; 
        let damage: number;
        if(victima !== undefined) {
            console.log("Preparandote para atacar...");
            movimiento = this.preguntarMovimiento();
            damage = (this.getAtaque() / victima.getDefensa()) * movimiento.getDamage() * (1 - factorAleatorio);   
            victima.setHpActual(victima.getHpActual() - damage);
            if(victima.getHpActual() < 0) {
                victima.setHpActual(0);
                console.log("Victima fulminada.");
            }
            console.log(`Has infligido un daño de ${damage}HP a tu victima.`);
        } else {
            console.log("No se ha inicializado ese objeto?");
        }
    }

        private preguntarMovimiento(): Move {
            let contador: number = 1;
            console.log("Ataques disponibles:");
            this.lMovimientos.forEach(tipoAtaque => {
                console.log(`${contador}: Nombre: ${tipoAtaque.getMovName()}, ataque: ${tipoAtaque.getDamage()}.`);
                contador++;
            });
        
            let numero: string;
            let numeroValido: number | undefined = undefined;
        
            while (numeroValido === undefined) {
                numero = readlineSync.question("Escoge tipo de ataque (numero): ");
                const numParsed = parseInt(numero);

                if (!isNaN(numParsed) && numParsed >= 1 && numParsed <= this.lMovimientos.length) {
                    numeroValido = numParsed; 
                } else {
                    console.log("Introduce una respuesta valida.");
                }
            }
        
            const ataqueSeleccionado = this.lMovimientos[numeroValido - 1];
            console.log(`Has seleccionado: ${ataqueSeleccionado.getMovName()} con un ataque de ${ataqueSeleccionado.getDamage()}.`);
            return ataqueSeleccionado;
        }
        

}

export default Pokemon;