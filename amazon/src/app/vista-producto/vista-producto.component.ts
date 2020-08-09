import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/producto.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})
export class VistaProductoComponent implements OnInit {

  producto: Producto;

  constructor(
    private productosService: ProductosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      // console.log(params);
      this.producto = this.productosService.getProductById(Number(params.productoId));
    });

  }

}
