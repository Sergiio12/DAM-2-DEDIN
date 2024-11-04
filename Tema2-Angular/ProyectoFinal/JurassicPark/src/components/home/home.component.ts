import { Component, OnInit } from '@angular/core';
import { ParkService } from '../../services/park.service';
import { CommonModule } from '@angular/common';
import { EnclousuresService } from '../../services/enclousures.service';
import { DinosaurService } from '../../services/dinosaurs.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
  gameCompleted: boolean = false;

  constructor(
    private dinosaurService: DinosaurService,
    private enclosureService: EnclousuresService,
    private parkService: ParkService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dinosaurService.getDinosaurs().subscribe(data => {
      this.dinosaurs = data.map((dino: any) => ({
        ...dino,
        comprado: false 
      }));
      this.checkGameCompletion();
    });

    this.enclosureService.getEnclousures().subscribe(data => { 
      this.enclosures = data.map((enclosure: any) => ({
        ...enclosure,
        comprado: false
      }));
      this.checkGameCompletion();
    });

    this.parkService.getParkStatus().subscribe(data => {
      this.coins = data.coins;
      this.dinosauriosComprados = data.dinosaurIds || [];
      this.recintosComprados = data.recintosIds || [];
      this.userId = data.userId;

      this.updatePurchaseStatus();

      this.checkGameCompletion();
    });
  }

  updatePurchaseStatus() {
    this.dinosaurs.forEach(dino => {
      dino.comprado = this.dinosauriosComprados.includes(dino.id);
    });
    this.enclosures.forEach(enclosure => {
      enclosure.comprado = this.recintosComprados.includes(enclosure.id);
    });
  }

  handleClick() {
    if (!this.gameCompleted) {
      this.clickCount++;
      this.coins += 50;
      this.updateUnlockStatus();
      this.updatePark();
    }
  }

  updateUnlockStatus() {
    this.clicksToNextUnlock = 10 - (this.clickCount % 10);
    this.message = this.clickCount % 10 === 0 ? '¡Nueva mejora desbloqueada!' : '';
  }

  buyDinosaur(dinosaur: any) {
    if (this.recintosComprados.length === 0) {
      this.message = 'Debes comprar al menos un recinto antes de poder comprar dinosaurios.';
      return;
    }

    if (this.coins >= dinosaur.cost && !dinosaur.comprado) {
      this.coins -= dinosaur.cost;
      dinosaur.comprado = true;
      this.dinosauriosComprados.push(dinosaur.id); 
      this.updatePark();
      this.message = `¡Has comprado a ${dinosaur.name}!`;
      this.checkGameCompletion();
    } else if (dinosaur.comprado) {
      this.message = `¡Ya has comprado a ${dinosaur.name}!`;
    } else {
      this.message = 'No tienes suficientes monedas para comprar este dinosaurio.';
    }
  }

  buyEnclosure(enclosure: any) {
    if (this.coins >= enclosure.cost && !enclosure.comprado) {
      this.coins -= enclosure.cost;
      enclosure.comprado = true;
      this.recintosComprados.push(enclosure.id); 
      this.updatePark();
      this.message = `¡Has comprado el recinto ${enclosure.name}!`;
      this.checkGameCompletion();
    } else if (enclosure.comprado) {
      this.message = `¡Ya has comprado el recinto ${enclosure.name}!`;
    } else {
      this.message = 'No tienes suficientes monedas para comprar este recinto.';
    }
  }

  updatePark() {
    const data = {
      userId: this.userId,
      coins: this.coins,
      dinosaurIds: this.dinosauriosComprados,
      recintosIds: this.recintosComprados,
    };

    this.parkService.updatePark(data).subscribe({
      next: (response) => console.log('Parque actualizado:', response),
      error: (error) => console.error('Error al actualizar el parque:', error)
    });
  }

  checkGameCompletion() {
    const allDinosaursBought = this.dinosaurs.every(dino => dino.comprado);
    const allEnclosuresBought = this.enclosures.every(enclosure => enclosure.comprado);

    if (allDinosaursBought && allEnclosuresBought) {
      this.gameCompleted = true;
    } else {
      this.gameCompleted = false;
    }
  }
}
