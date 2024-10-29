import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LocalStorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string | null = null;

  constructor(
    private userService: UserService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userService.loginUser(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).subscribe(
        response => {
          if (response && response.token) {
            this.localStorageService.setItem('authToken', response.token);
            this.router.navigate(['/home']);
          }
        },
        error => {
          this.loginError = 'Credenciales incorrectas. Intente de nuevo.';
        }
      );
    }
  }
}
