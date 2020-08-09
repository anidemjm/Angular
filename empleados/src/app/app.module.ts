import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEmpleadosComponent } from './form-empleados/form-empleados.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { VistaEmpleadoComponent } from './vista-empleado/vista-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    FormEmpleadosComponent,
    ListaEmpleadosComponent,
    VistaEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
