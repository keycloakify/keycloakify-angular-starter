import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from "@keycloakify/angular/login/components/hello-world/hello-world.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloWorldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';
}
