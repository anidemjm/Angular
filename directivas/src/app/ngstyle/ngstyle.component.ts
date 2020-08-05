import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  color: string;
  tamano: number;
  estilosParrafo: any;
  prioridad: string;
  estilosH1: any;

  constructor() {
    this.prioridad = 'urgente';
    this.color = 'red';
    this.tamano = 12;
    this.estilosParrafo = {
      backgroundColor: (this.prioridad === 'urgente') ? 'orange' : 'lightblue',
      fontSize: '12px',
      color: 'white',
    };
    this.estilosH1 = {
      fontSize: '20px',
    };
  }

  ngOnInit(): void {
    const intervalo = setInterval(() => {
      this.tamano++;
      if (this.tamano >= 24) {
        clearInterval(intervalo);
      }
    }, 2000);

  }


  /* crear un boton que me cambie la propiedad estilos de parrafo bgcolor tomato, y añada border radius 20px, padding 10px y una transicion de 1s;
  */

  cambiarEstilos(): void {
    this.estilosParrafo.backgroundColor = 'tomato';
    this.estilosParrafo.borderRadius = '20px';
    this.estilosParrafo.padding = '10px';
    this.estilosParrafo.transition = '1s';
  }

  cambiarFuente($event): void {
    this.estilosH1.fontSize = $event.target.value + 'px';
  }

}
