import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Task } from "../models/Task";


@Injectable({
    providedIn: "root"
})

export class TodoService {
    tareas: Task[] = [
        { id: 1, titulo: 'Task 1', completada: false },
        { id: 2, titulo: 'Task 2', completada: true },
        { id: 3, titulo: 'Task 3', completada: false }
    ];

    constructor() {}

    getTareas(): Observable<Task[]> {
        return of(this.tareas);
    }

    registrarTarea(titulo: string) : void {
        const nuevaTarea: Task = {
            id: this.tareas.length + 1,
            titulo: titulo,
            completada: false
        };
        this.tareas.push(nuevaTarea);
    }

}