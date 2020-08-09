import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../services/empleados.service';
import { Empleado } from '../models/empleado.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-empleado',
  templateUrl: './vista-empleado.component.html',
  styleUrls: ['./vista-empleado.component.css']
})
export class VistaEmpleadoComponent implements OnInit {

  empleado: Empleado;

  constructor(
    private empleadosService: EmpleadosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // params recibe un objeto con uno a varios parametros cuya clave es la parte dinamica que hemos definido en la ruta: empleadoId
      this.empleado = this.empleadosService.getEmployeeById(Number(params.empleadoId));

      // console.log(this.empleado);

    });

  }

}
