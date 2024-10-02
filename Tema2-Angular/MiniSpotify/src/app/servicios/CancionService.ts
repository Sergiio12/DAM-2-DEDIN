import { Injectable } from "@angular/core";
import { Cancion } from "../modelo/Cancion";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root" //Hace que el servicio este disponible para toda la app.
})

export class CancionService {
    canciones: Cancion[] = [
        {id: 1, titulo: "Cancion 1", reproducida: false},
        {id: 2, titulo: "Cancion 2", reproducida: false},
        {id: 3, titulo: "Cancion 3", reproducida: false}
    ];

    constructor() {}

    getCanciones(): Observable<Cancion[]> {
        return of(this.canciones);
    }

    registrarCancion(titulo: string) : void {
        const nuevaCancion : Cancion = {
            id: this.canciones.length + 1,
            titulo: titulo,
            reproducida: false
        };
        this.canciones.push(nuevaCancion);
    }

}