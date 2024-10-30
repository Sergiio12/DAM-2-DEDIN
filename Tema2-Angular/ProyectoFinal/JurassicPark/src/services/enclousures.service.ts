import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnclousuresService {
  private apiUrl = "https://localhost:3000/enclousures";

  constructor(private http: HttpClient) {}

  getDinosaurs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
