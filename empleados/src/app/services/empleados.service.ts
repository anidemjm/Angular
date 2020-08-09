import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.model';
import { Departamento } from '../models/departamento.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  arrEmpleados: Empleado[];
  arrDepartamentos: Departamento[];
  idActual: number;

  constructor() {
    this.idActual = 4;
    this.arrEmpleados = [
      new Empleado(1, 'Juan', 'Perez', '876543V', 'juan@gmail.com', 'direccion', 'https://randomuser.me/api/portraits/men/73.jpg', true),
      new Empleado(2, 'Pepe', 'Villuela', '8756789G', 'pepe@gmail.com', 'marketing', 'https://randomuser.me/api/portraits/men/74.jpg', false),
      new Empleado(3, 'Maria', 'Garcia', '34567M', 'maria@gmail.com', 'desarrollo', 'https://randomuser.me/api/portraits/women/74.jpg', true)
    ];

    this.arrDepartamentos = [
      new Departamento(1, 'direccion'),
      new Departamento(2, 'marketing'),
      new Departamento(3, 'cuentas'),
      new Departamento(4, 'contabilidad'),
      new Departamento(5, 'desarrollo'),
      new Departamento(6, 'diseño'),
    ];
  }

  getAllEmployes(): Empleado[] {
    return this.arrEmpleados;
  }

  getAllDepartments(): Departamento[] {
    return this.arrDepartamentos;
  }

  getEmployeeById(pId): Empleado {
    let empleadoSeleccionado: Empleado;

    // opcion 1
    for (const empleado of this.arrEmpleados) {
      if (empleado.id === pId) {
        empleadoSeleccionado = empleado;
        break;
      }
    }

    //  opcion 2

    // empleadoSeleccionado = this.arrEmpleados.find(empleado => empleado.id === pId);

    return empleadoSeleccionado;
  }

  addEmployee(pEmpleado): void {
    pEmpleado.id = this.idActual;
    this.arrEmpleados.push(pEmpleado);
    this.idActual++;
    // para comprobar que id se mete correctamente
    console.log(this.arrEmpleados);
  }

  getEmployesByDepartment(pDepartamento): Empleado[] {

    const arrEmpladoDepart = this.arrEmpleados.filter(empleado => empleado.departamento === pDepartamento);

    return arrEmpladoDepart;
  }

}
