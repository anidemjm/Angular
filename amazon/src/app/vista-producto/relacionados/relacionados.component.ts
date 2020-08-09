import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-relacionados',
  templateUrl: './relacionados.component.html',
  styleUrls: ['./relacionados.component.css']
})
export class RelacionadosComponent implements OnInit {
  arrProductoRelacionados: Producto[];
  constructor(
    private productosService: ProductosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // donde esta la categoria (en la ruta)
    let productoId: number;
    let categoria: string;
    this.activatedRoute.parent.params.subscribe(params => {
      productoId = Number(params.productoId);
      categoria = this.productosService.getCategoryById(productoId);

      this.arrProductoRelacionados = this.productosService.getProductsByCategory(categoria);
    })


  }

}
