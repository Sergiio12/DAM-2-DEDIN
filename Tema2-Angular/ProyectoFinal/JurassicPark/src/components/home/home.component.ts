import { Component, OnInit } from '@angular/core';
import { ParkService } from '../../services/park.service';
import { CommonModule } from '@angular/common';
import { DinosaurService } from '../../services/dinosaurs.service';
import { EnclousuresService } from '../../services/enclousures.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Corrección: debe ser 'styleUrls' en plural
})
export class HomeComponent implements OnInit {
  coins: number = 0;
  clickCount: number = 0;
  clicksToNextUnlock: number = 10;
  message: string = '';
  dinosaurs: any[] = [];
  enclosures: any[] = [];
  dinosauriosComprados: number[] = []; 
  recintosComprados: number[] = []; 
  userId: string = '';

  constructor(
    private dinosaurService: DinosaurService,
    private enclosureService: EnclousuresService, // Corrección del nombre de servicio
    private parkService: ParkService
  ) {}

  ngOnInit() {
    this.dinosaurService.getDinosaurs().subscribe(data => {
      this.dinosaurs = data;
    });

    this.enclosureService.getEnclousures().subscribe(data => { 
      this.enclosures = data;
    });

    this.parkService.getParkStatus().subscribe(data => {
      this.coins = data.coins;
      this.dinosauriosComprados = data.dinosaurIds || [];
      this.recintosComprados = data.recintosIds || [];
      this.userId = data.userId;  
    });
  }

  handleClick() {
    this.clickCount++;
    this.coins += 50; 
    this.updateUnlockStatus();
    this.updatePark();
  }

  updateUnlockStatus() {
    this.clicksToNextUnlock = 10 - (this.clickCount % 10);
    this.message = this.clickCount % 10 === 0 ? '¡Nueva mejora desbloqueada!' : '';
  }

  buyDinosaur(dinosaur: any) {
    if (this.coins >= dinosaur.cost) {
      this.coins -= dinosaur.cost;
      this.dinosauriosComprados.push(dinosaur.id); 
      this.message = `Has comprado un ${dinosaur.name}.`;
      this.updatePark();
    }
  }

  buyEnclosure(enclosure: any) {
    if (this.coins >= enclosure.cost) {
      this.coins -= enclosure.cost;
      this.recintosComprados.push(enclosure.id); 
      this.message = `Has comprado el recinto ${enclosure.name}.`;
      this.updatePark();
    }
  }

  updatePark() {
    const data = {
      userId: this.userId,
      coins: this.coins,
      dinosaurIds: this.dinosauriosComprados,
      recintosIds: this.recintosComprados,
    };

    this.parkService.updatePark(data).subscribe(response => {
      console.log('Parque actualizado:', response);
    });
  }
}
