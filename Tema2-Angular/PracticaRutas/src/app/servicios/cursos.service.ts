import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private cursos: any[] = [
    { id: 1, nombre: "Spring Boot", descripcion: "Framework para desarrollo de aplicaciones web." },
    { id: 2, nombre: "Angular", descripcion: "Framework para construir interfaces de usuario." },
    { id: 3, nombre: "React", descripcion: "Framework para construir interfaces de usuario." },
  ];

  constructor() {}

  getCursos() {
    return this.cursos;
  }

  getCursoPorId(id: number) {
    return this.cursos.find(curso => curso.id === id);
  }
}
