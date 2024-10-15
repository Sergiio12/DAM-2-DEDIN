import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsExampleComponent } from './forms-example/forms-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ReactiveForms';
}
