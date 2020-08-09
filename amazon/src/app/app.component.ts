import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  busqueda: string;

  constructor(private router: Router) {
    this.busqueda = '';
  }

  recogerBusqueda(): void {
    // console.log(this.busqueda);
    // para poder enviar a una ruta desde un evento necesito el inyectable Router
    this.router.navigate(['/search', this.busqueda])
  }
}
