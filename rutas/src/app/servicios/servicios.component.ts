import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  contador: number;
  dato: string;


  constructor(private router: Router) {
    this.contador = 0;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.contador = 3;
    }, 3000);
  }

  recogerDato(): void {
    console.log(this.dato);
    setTimeout(() => {
      this.router.navigate(['/comentario']);
    }, 4000);

  }

}
