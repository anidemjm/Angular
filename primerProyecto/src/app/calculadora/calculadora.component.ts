import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado: string;

  constructor() {
    this.resultado = '';
  }

  ngOnInit(): void {
  }

  onClick($event): void {
    this.resultado += $event.target.innerText;
  }

  obtenerResultado(): void {
    const operacion: number = eval(this.resultado);
    this.resultado = String(operacion);
  }

  resetCalculadora(): void {
    this.resultado = '';
  }

}
