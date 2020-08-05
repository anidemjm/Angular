import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  hobbie: any;

  @Output() guardarAficion: EventEmitter<any>;

  constructor() {
    this.guardarAficion = new EventEmitter();
    this.hobbie = {
      nombre: '',
      aficion: ''
    };
  }

  ngOnInit(): void {
  }

  recogerDatos(): void {
    this.guardarAficion.emit(this.hobbie);
    this.hobbie = {};
  }

}
