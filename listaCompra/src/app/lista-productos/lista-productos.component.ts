import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../models/producto.model';
import { hostViewClassName } from '@angular/compiler';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() productos: Producto[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.productos);

  }

  //  pintar la lista de productos que recibo como input de app component

  pintarListaCompra(): string {
    let resultadoHtml = '';
    for (const producto of this.productos) {
      resultadoHtml += `<li>${producto.titulo}: ${producto.precio * producto.cantidad} Euros</li>`;
    }
    return resultadoHtml;
  }

}
