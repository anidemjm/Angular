import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from './models/departamento.model';
import { EmpleadosService } from './services/empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  arrDepartamentos: Departamento[];

  constructor(
    private router: Router,
    private empleadosService: EmpleadosService) {
  }

  ngOnInit(): void {
    this.arrDepartamentos = this.empleadosService.getAllDepartments();
  }

  recogerDepartamento($event): void {
    // console.log($event);
    this.router.navigate(['/departamento', $event.target.value]);
  }


}
