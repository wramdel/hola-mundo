import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent } from './saludo/saludo.component';

@Component({
  selector: 'app-root',
  // Importamos SaludoComponent para poder usarlo dentro de app.html
  imports: [RouterOutlet, SaludoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
