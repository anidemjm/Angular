import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() nuevoProducto: EventEmitter<Producto>;
  newproduct: Producto;

  constructor() {
    this.nuevoProducto = new EventEmitter();
    this.newproduct = new Producto();
  }

  // Evento que recoja los valores del formulario y emita a nuevoproducto dichos valores.

  ngOnInit(): void {
  }

  capturarNuevoProducto(): void {
    this.newproduct.precio = Number(this.newproduct.precio);
    this.newproduct.cantidad = Number(this.newproduct.cantidad);
    // opcion 1: spread operator y haciendo una copia del objeto
    // this.nuevoProducto.emit({ ...this.newproduct });

    // opcion 2: vaciando el objeto al final
    this.nuevoProducto.emit(this.newproduct);
    this.newproduct = new Producto();
  }

}
