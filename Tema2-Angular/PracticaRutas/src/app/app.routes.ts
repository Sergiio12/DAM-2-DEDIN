import { Routes } from '@angular/router';
import { CursosComponent } from './paginas/cursos/cursos.component';
import { DetallesCursoComponent } from './paginas/detalles-curso/detalles-curso.component';

export const routes: Routes = [
    { path: '', redirectTo: 'cursos', pathMatch: 'full' }, // Redirige a 'cursos' cuando la ruta raíz está vacía
    { path: 'cursos', component: CursosComponent }, // Ruta para la lista de cursos
    { path: 'cursos/:id', component: DetallesCursoComponent } // Ruta para los detalles del curso basado en el ID
];
