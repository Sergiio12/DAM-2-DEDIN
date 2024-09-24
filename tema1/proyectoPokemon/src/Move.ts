class Move {
    private movName: string;
    private damageMov: number;

    constructor(movName: string, damageMov: number) {
        this.movName = movName;
        this.damageMov = damageMov;
    }

    public getMovName() : string {
        return this.movName;
    }

    public setMove(movName: string) : void {
        this.movName = movName;
    }

    public getDamageName() : number {
        return this.damageMov;
    }

    public setDamage(damageMov: number) : void {
        this.damageMov = damageMov;
    }

}

export default Move;