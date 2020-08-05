import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  nombre: string;
  apellidos: string;
  edad: number;
  pais: string;

  persona: any;

  constructor() {
    this.nombre = '';
    this.apellidos = '';
    this.edad = 0;
    this.pais = 'es';

    this.persona = {
      nombre: 'Victor',
      apellidos: 'Martinez',
      edad: 25,
      pais: 'gb'
    };
  }

  ngOnInit(): void {
    // const tiempo = setTimeout(() => {
    //   this.nombre = 'Juan Tamariz';
    // }, 5000);
  }

  enviarFormulario(): void {
    console.log(this.persona);
  }



}
