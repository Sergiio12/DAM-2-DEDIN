import Move from "./Move";
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

}

export default Pokemon;