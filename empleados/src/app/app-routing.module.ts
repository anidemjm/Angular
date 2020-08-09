import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { FormEmpleadosComponent } from './form-empleados/form-empleados.component';
import { VistaEmpleadoComponent } from './vista-empleado/vista-empleado.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: ListaEmpleadosComponent },
  { path: 'register', component: FormEmpleadosComponent },
  { path: 'departamento/:departamento', component: ListaEmpleadosComponent },
  { path: 'empleado/:empleadoId', component: VistaEmpleadoComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
