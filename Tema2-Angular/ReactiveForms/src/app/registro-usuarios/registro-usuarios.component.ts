import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent {
  @Input() users: any[] = []; // Recibe la lista de usuarios del padre
}
