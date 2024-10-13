import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CursosService } from '../../servicios/cursos.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  cursos: any[];

  constructor(private cursosService: CursosService) {
    this.cursos = this.cursosService.getCursos();
  }
}
