import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RegistroUsuariosComponent } from "../registro-usuarios/registro-usuarios.component";

@Component({
  selector: 'app-forms-example',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RegistroUsuariosComponent],
  templateUrl: './forms-example.component.html',
  styleUrls: ['./forms-example.component.css']
})
export class FormsExampleComponent {
  userForm: FormGroup;
  users: any[] = []; // Lista para almacenar usuarios registrados.

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.users.push(this.userForm.value); // Añadir usuario a la lista
      //console.log('Usuarios registrados: ', this.users);
      this.userForm.reset(); // Limpiar formulario después de enviar
    } else {
      console.error('Formulario no válido. ', this.userForm.errors);
    }
  } 
}
