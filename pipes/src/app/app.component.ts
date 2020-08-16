import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  precio: number;
  currentDate: Date;
  numero: number;
  porcentaje: number;
  nombres: string[];
  inicio: number;
  fin: number;

  constructor() {
    this.precio = 1499.99;
    this.currentDate = new Date();
    this.numero = 334323.23344;
    this.porcentaje = Math.random();
    this.nombres = ['Juan', 'Jose', 'Vicky', 'Rafa'];
    this.inicio = 0;
    this.fin = this.nombres.length;
  }

  ngOnInit(): void {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }
  onInicio($event): void {
    this.inicio = $event.target.value;
  }
  onFin($event): void {
    this.fin = $event.target.value;
  }
}
