import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonajesComponent } from './componentes/personajes/personajes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonajesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SimpsonsAPI';
}
