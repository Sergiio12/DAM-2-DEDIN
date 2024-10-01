import { Component, OnInit } from '@angular/core';
//Importamos aqui para que Typescript reconozca los modulos.
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/TodoService';
import { Task } from '../../models/Task';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, CommonModule], //Es necesario para que Angular sepa que este componente esta utilizando esos modulos especificos en su contexto.
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  tareas: Task[] = [];
  nuevoTituloTarea : string = "";

  constructor(private todoService: TodoService) {
    
  }

  ngOnInit(): void {
    this.todoService.getTareas().subscribe(tareas => {
      this.tareas = tareas;
    });
  } 
  
  implementarTarea() : void {
    if(this.nuevoTituloTarea.trim()) {
      this.todoService.registrarTarea(this.nuevoTituloTarea);
      this.nuevoTituloTarea = "";
    }
  }

}
