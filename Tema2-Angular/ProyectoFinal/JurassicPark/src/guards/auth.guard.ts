import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../services/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private localStorageService: LocalStorageService, private router: Router) {}

  canActivate(): boolean {
    const token = this.localStorageService.getItem('authToken');
    if (token) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
