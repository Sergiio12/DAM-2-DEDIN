import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajeServiceService {
  private apiUrl = 'https://api.sampleapis.com/cartoons/cartoons2D';

  constructor(private http: HttpClient) { }

  getPersonajes() {
    return this.http.get<any[]>(this.apiUrl);
  }

}
