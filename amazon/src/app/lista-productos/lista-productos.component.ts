import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto.model';
import { ProductosService } from '../services/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: Producto[];
  constructor(
    private productosService: ProductosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // necesito recoger el parametro variable de la ruta para saber a que funcion llamar si getAll o getProductsByCategory
    let categoria: string = '';
    let palabra: string = '';
    this.activatedRoute.params.subscribe(params => {

      console.log(params);

      categoria = params.tituloCategoria;
      palabra = params.parametroBusqueda;

      console.log(categoria, palabra);

      if (categoria !== undefined) {
        this.productos = this.productosService.getProductsByCategory(categoria);
      } else if (palabra !== undefined) {
        this.productos = this.productosService.getProductsByName(palabra);
      } else {
        this.productos = this.productosService.getAllProduct();
      }
    });


    //this.productos = this.productosService.getAllProduct();
    // console.log('productos', this.productos);
  }

}
