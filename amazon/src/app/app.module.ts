import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';
import { RelacionadosComponent } from './vista-producto/relacionados/relacionados.component';
import { PopularesComponent } from './vista-producto/populares/populares.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    VistaProductoComponent,
    RelacionadosComponent,
    PopularesComponent,
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
