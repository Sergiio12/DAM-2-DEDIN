import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cancion } from '../../modelo/Cancion';
import { CancionService } from '../../servicios/CancionService';

@Component({
  selector: 'app-canciones',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.css'
})
export class CancionesComponent implements OnInit {
  canciones: Cancion[] = [];
  nuevoTituloCancion: string = "";

  constructor (private cancionServicio: CancionService) {} //Traemos el servicio?



  ngOnInit(): void { //Esto "interactua" con los servicios.
    this.cancionServicio.getCanciones().subscribe(canciones =>{
      this.canciones = canciones;
    });
  }

  implementarCancion() : void { //Este metodo se vuelve a hacer, porque el servicio seria el que contacta con la Base de datos.
    if(this.nuevoTituloCancion.trim()) {
      this.cancionServicio.registrarCancion(this.nuevoTituloCancion);
      this.nuevoTituloCancion = "";
    }
  }

}
