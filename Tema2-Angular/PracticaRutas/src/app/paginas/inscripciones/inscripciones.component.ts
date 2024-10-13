import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscripciones',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {
  inscripcionForm: FormGroup;
  usuariosInscritos: { nombre: string; correo: string; curso: string }[] = [];

  constructor(private fb: FormBuilder) {
    this.inscripcionForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      curso: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    if (this.inscripcionForm.valid) {
      const { nombre, correo, curso } = this.inscripcionForm.value;

      this.usuariosInscritos.push({ nombre, correo, curso });

      alert("Te has inscrito correctamente en el curso.");

      this.inscripcionForm.reset();
    } else {
      alert("Por favor, completa todos los campos correctamente.");
    }
  }
}
