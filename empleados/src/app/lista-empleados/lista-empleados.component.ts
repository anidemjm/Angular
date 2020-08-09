import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado.model';
import { EmpleadosService } from '../services/empleados.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  arrEmpleados: Empleado[];

  constructor(
    private empleadosService: EmpleadosService,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
    // separar entre cargar todos los empleados o de cada departamento
    let departamento = '';
    this.activatedRoute.params.subscribe(params => {
      departamento = params.departamento;
      if (departamento !== undefined) {
        // pido al servicio los empleados por departamento
        this.arrEmpleados = this.empleadosService.getEmployesByDepartment(departamento);
      } else {
        this.arrEmpleados = this.empleadosService.getAllEmployes();
      }
    });

  }

}
