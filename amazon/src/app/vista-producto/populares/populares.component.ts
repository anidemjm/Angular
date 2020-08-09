import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.css']
})
export class PopularesComponent implements OnInit {

  arrProductoPopulares: Producto[];

  constructor(
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.arrProductoPopulares = this.productosService.getProductsPopular();
  }

}
