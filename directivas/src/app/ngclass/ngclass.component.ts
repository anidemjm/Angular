import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  arrEstilos: string[];
  activo: boolean;


  constructor() {
    this.arrEstilos = ['fondoAzul', 'textoRojo'];
    this.activo = true;
  }

  ngOnInit(): void {
  }

  cambiarEstado(): void {
    /* if (this.activo) {
      this.activo = false;
    } else {
      this.activo = true;
    } */

    // this.activo = (this.activo) ? false : true;

    this.activo = !this.activo;

  }

}
