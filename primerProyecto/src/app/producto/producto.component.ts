import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() tipo: string;
  @Input() imagen: string;

  // EventEmitter se tiene que importar de @angular/core
  @Output() obtenerProducto: EventEmitter<string>;

  constructor() {
    this.obtenerProducto = new EventEmitter();

  }

  ngOnInit(): void {
  }

  verProducto(): void {
    this.obtenerProducto.emit(this.tipo);
  }

}
