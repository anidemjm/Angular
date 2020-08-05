import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'neo-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  @Input() num1: string;
  @Input() num2: string;
  resultado: number;
  estado: string;

  constructor() {
    this.resultado = 0;
    this.estado = 'rojodisabled';
  }

  ngOnInit(): void {

  }

  mostrarResultado(): void {
    this.resultado = Number(this.num1) + Number(this.num2);
    this.estado = (this.estado !== 'rojoenabled') ? 'rojoenabled' : 'rojodisabled';
  }

}
