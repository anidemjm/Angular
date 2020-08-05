import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  titulo: string;
  nombre: string;
  color: string;

  constructor() {
    this.titulo = 'Estoy desde mi ts escribiendo una variable';
    this.nombre = 'Gema';
    this.color = 'azul';
  }

  ngOnInit(): void {
  }


  cambiarColor($event): void {
    console.log($event);
    this.color = 'verde';
  }

  cambiarTexto($event): void {
    this.nombre = $event.target.value;

  }

}

