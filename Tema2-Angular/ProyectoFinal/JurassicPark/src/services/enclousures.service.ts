import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnclousuresService {
  private apiUrl = "http://localhost:3000/enclosures";

  constructor(private http: HttpClient) {}

  getEnclousures(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
