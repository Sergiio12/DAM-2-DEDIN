import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmergenciesService {
  private apiUrl = "http://localhost:3000/emergencies";

  constructor(private http: HttpClient) {}

  getEmergencies(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
