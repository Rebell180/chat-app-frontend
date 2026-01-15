import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Landingpage } from "./pages/landingpage/landingpage";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Landingpage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App{

  protected readonly title = signal('chat-app-frontend');

  
}
