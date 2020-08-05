import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numero1: number;
  numero2: number;
  arrNumeros: number[];
  arrProductos: any[];
  textoCarrito: string;

  constructor() {
    this.numero1 = Math.floor(Math.random() * 21);
    this.numero2 = Math.floor((Math.random() * 38) + 2);
    this.arrNumeros = [1, 3, 4, 5, 6, 2, 7, 89, 90, 4];
    this.textoCarrito = '';
    this.arrProductos = [
      {
        tipo: 'Lechuga',
        imagen: 'https://www.lavanguardia.com/r/GODO/LV/p3/WebSite/2016/06/30/Recortada/img_msanoja_20160705-165318_imagenes_lv_getty_gettyimages-122013837-536-kCeH-U4028769755827AF-992x558@LaVanguardia-Web.jpg'
      },
      {
        tipo: 'Tomate',
        imagen: 'https://ecocordoba.com/wp-content/uploads/2016/05/tomate.jpg'
      },
      {
        tipo: 'Pan',
        imagen: 'https://www.recetasderechupete.com/wp-content/uploads/2018/01/Pan-casero-f%C3%A1cil.jpg'
      }
    ];
  }

  getInfo($event): void {
    // console.log('Esto en papa', $event);
    this.textoCarrito += $event + ', ';
  }



}
