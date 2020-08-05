import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {
  color: string;

  constructor() {
    this.color = 'V'; // R, A, V
  }

  ngOnInit(): void {
    const intervalo = setInterval(() => {
      switch (this.color) {
        case 'R':
          this.color = 'A';
          break;
        case 'A':
          this.color = 'V';
          break;
        case 'V':
          this.color = 'R';
          break;
      }
    }, 200);
  }

}
