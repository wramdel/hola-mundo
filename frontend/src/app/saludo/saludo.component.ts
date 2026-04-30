import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './saludo.component.html'
})
export class SaludoComponent {
  private http = inject(HttpClient);

  // Texto que el usuario escribe en el input (vinculado con ngModel)
  nombre = '';

  // Mensaje devuelto por el backend.
  // Usamos signal() para que la vista se actualice automáticamente
  // cuando llega la respuesta del HTTP. (Sin signal, en modo zoneless
  // la vista no se re-renderiza tras el subscribe y parecería que
  // hace falta un segundo click.)
  respuesta = signal('');

  // URL del endpoint del backend
  //private url = 'https://exogena-tools.onrender.com/api/saludo';
  private url = 'http://localhost:10000/api/saludo';

  // Envía el nombre al backend al hacer click en el botón
  enviar() {
    this.http
      .post<{ mensaje: string }>(this.url, { nombre: this.nombre })
      .subscribe({
        // Guarda la respuesta del servidor para mostrarla en pantalla
        next: (res) => this.respuesta.set(res.mensaje),
        // Si algo falla, mostramos un mensaje simple
        error: () => this.respuesta.set('Error al conectar con el backend')
      });
  }
}
