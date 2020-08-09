import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../services/empleados.service';
import { Departamento } from '../models/departamento.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-empleados',
  templateUrl: './form-empleados.component.html',
  styleUrls: ['./form-empleados.component.css']
})
export class FormEmpleadosComponent implements OnInit {

  arrDepartamentos: Departamento[];

  constructor(private empleadosServices: EmpleadosService,
    private router: Router) { }

  ngOnInit(): void {
    this.arrDepartamentos = this.empleadosServices.getAllDepartments();
  }

  recogerDatosForm(pForm): void {
    console.log('pForm', pForm);
    pForm.activo = (pForm.activo !== true) ? false : true;
    this.empleadosServices.addEmployee(pForm);
    // y despues mandamos la navegacion a home. Router injectable
    this.router.navigate(['/home']);
  }

}
