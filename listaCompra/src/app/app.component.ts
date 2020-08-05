import { Component, OnInit } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  arrProductos: Producto[];
  precioTotal: number;

  constructor() {
    this.arrProductos = [
      new Producto('leche', 0.35, 20),
      new Producto('pan', 0.40, 2),
      new Producto('carne', 2.5, 2)
    ];
    this.precioTotal = 0;
  }

  ngOnInit(): void {
    this.precioTotal = this.calcularPrecioTotal();
  }

  calcularPrecioTotal(): number {
    let total = 0;
    this.arrProductos.forEach(producto => {
      total = total + (producto.precio * producto.cantidad);
    });
    return total;
  }

  addNewProduct($event): void {
    this.arrProductos.push($event);
    this.precioTotal = this.calcularPrecioTotal();
  }

}
