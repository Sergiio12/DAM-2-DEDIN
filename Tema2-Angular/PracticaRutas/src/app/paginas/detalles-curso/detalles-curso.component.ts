import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../../servicios/cursos.service';

@Component({
  selector: 'app-detalles-curso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles-curso.component.html',
  styleUrls: ['./detalles-curso.component.css']
})
export class DetallesCursoComponent implements OnInit {
  curso: any;
  id: string | null;

  constructor(private route: ActivatedRoute, private cursosService: CursosService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if (this.id) {
      const cursoId = parseInt(this.id, 10);
      this.curso = this.cursosService.getCursoPorId(cursoId);
    }
  }
}
