import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DinosaursService {
  private apiUrl = "https://localhost:3000/dinosaurs";

  constructor(private http: HttpClient) {}

  getDinosaurs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}