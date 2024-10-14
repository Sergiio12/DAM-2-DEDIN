import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  standalone: true,
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent {
  @Input() message: string = '';
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Mensaje desde el componente hijo');
  }
}