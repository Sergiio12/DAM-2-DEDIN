import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;
  registroExitoso = false;
  errorMessage: string | null = null;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    const password = this.form.get('password')?.value;
    const confirmPassword = this.form.get('confirmPassword')?.value;

    if (this.form.valid) {
      if (password !== confirmPassword) {
        this.errorMessage = 'Las contraseñas no coinciden.';
        return;
      }

      this.userService.registerUser(this.form.get('email')?.value, password)
        .subscribe(
          () => {
            this.registroExitoso = true;
            setTimeout(() => this.router.navigate(['/login']), 2000);
          },
          (error) => {
            this.errorMessage = error.error.message || 'Error en el registro. Inténtalo de nuevo.';
          }
        );
    } else {
      this.errorMessage = 'El formulario es inválido. Asegúrate de que todos los campos sean correctos.';
    }
  }
}
