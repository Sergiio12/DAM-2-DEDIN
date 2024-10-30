import { Component, OnInit } from '@angular/core';
import { ParkService } from '../../services/park.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  parkStatus: any;

  constructor(private parkService: ParkService) {}

  ngOnInit(): void {
    this.parkService.getParkStatus().subscribe(
      data => {
        this.parkStatus = data;
        console.log('Estado del parque:', this.parkStatus);
      },
      error => {
        console.error('Error al obtener el estado del parque:', error);
      }
    );
  }

}
