import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { PersonajeServiceService } from '../../servicios/personaje-service.service';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent implements OnInit {
  personaje: any[] = [];

  constructor(private personajeService: PersonajeServiceService) {}

  ngOnInit(): void {
    this.personajeService.getPersonajes().subscribe((data) => {
      this.personaje = data;
    });
  }
  
}
