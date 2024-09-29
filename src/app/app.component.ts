import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCustomComponentComponent } from './my-custom-component/my-custom-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyCustomComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';
}
