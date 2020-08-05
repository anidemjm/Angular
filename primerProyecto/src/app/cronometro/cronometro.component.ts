import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  /* Cuidado con el tipo INPUT. siempre es un string */
  @Input() inicio: string;
  @Input() fin: string;
  contador: number;

  constructor() {
    this.contador = 12;
  }

  ngOnInit(): void {
    // aqui tenemos disponible el html
    if (this.inicio) {
      this.contador = Number(this.inicio);
    }

  }

  iniciarContador(): void {
    const intervalo = setInterval(() => {
      this.contador--;
      const endContador = (this.fin) ? Number(this.fin) : 0;
      /* let endContador;
      if (this.fin) {
        endContador = Number(this.fin)
      }
      else {
        endContador = 0;
      } */
      if (this.contador === endContador) {
        clearInterval(intervalo);
      }
    }, 1000);
  }

}