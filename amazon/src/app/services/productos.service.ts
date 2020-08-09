import { Injectable, forwardRef } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  arrProductos: Producto[];

  constructor() {
    this.arrProductos = [
      new Producto(1, 'Portatil HP con camara', 'Un portatil bueno bonito y barato', 200, 'electronica'),
      new Producto(2, 'Smart Tv', 'Con balance de negros impresionante', 1200, 'electronica', true),
      new Producto(3, 'Google home mini', 'Tu asistente virtual', 59, 'electronica'),
      new Producto(4, 'Camara Canon 80D', 'Para inmortalizar todos tus momentos', 600, 'electronica'),
      new Producto(5, 'Cuaderno de anillas', 'Para escribir todos los datos que quieras', 1.5, 'papeleria', true),
      new Producto(6, 'Boligrafo', 'Con punta fina para que no se salga el trazo', 0.50, 'papeleria'),
    ];
  }

  getAllProduct(): Producto[] {
    return this.arrProductos;
  }

  getProductsByCategory(pCategoria): Producto[] {
    // como filtro una array para obtener mas pequeño
    let arrFiltrado: Producto[];
    arrFiltrado = this.arrProductos.filter(producto => {
      return producto.categoria === pCategoria;
    });

    return arrFiltrado;
  }

  getProductById(pId): Producto {
    let productoCargado: Producto;
    for (const producto of this.arrProductos) {
      if (producto.id === pId) {
        productoCargado = producto;
        break;
      }
    }

    // opcion 2 funcion flecha con find 
    // productoCargado = this.arrProductos.find(producto => producto.id === pId);

    return productoCargado;
  }


  getProductsByName(pBusqueda): Producto[] {
    let arrFiltradoProducts: Producto[];

    arrFiltradoProducts = this.arrProductos.filter(producto => {
      /*  
        cuando tengo cadena de caracteres javascript me facilita una funcion que me permite buscar un texto determinado en una cadena caracteres.
        estudiar javascript -> java / string.include(palabra)
      */
      return producto.nombre.toLowerCase().includes(pBusqueda.toLowerCase());
    });

    return arrFiltradoProducts;

  }

  getProductsPopular(): Producto[] {
    let arrFiltradoPopulares: Producto[];

    arrFiltradoPopulares = this.arrProductos.filter(producto => {
      return producto.popular === true;
    });

    return arrFiltradoPopulares;
  }

  getCategoryById(pIdProducto): string {
    let categoria: string;
    for (const producto of this.arrProductos) {
      if (producto.id === pIdProducto) {
        categoria = producto.categoria;
        break;
      }
    }

    return categoria;
  }

}
