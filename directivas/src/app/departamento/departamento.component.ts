import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  departamento: number;
  arrDepartamentos: any[];

  constructor() {
    this.departamento = 1;
    this.arrDepartamentos = [
      {
        id: 1,
        title: 'Contabilidad',
        manager: 'Juan Antonio',
        email: 'contabilidad@empresa.com'
      },
      {
        id: 2,
        title: 'Comercial',
        manager: 'Rodrigo',
        email: 'comercial@empresa.com'
      },
      {
        id: 3,
        title: 'Clientes',
        manager: 'Lucia',
        email: 'clientes@empresa.com'
      },
      {
        id: 4,
        title: 'Direccion',
        manager: 'Marta',
        email: 'direccion@empresa.com'
      }
    ];
  }

  ngOnInit(): void {
  }

  cargarSeccion(numeroSeccion): void {
    this.departamento = numeroSeccion;
  }

}
