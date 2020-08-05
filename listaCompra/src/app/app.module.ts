import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { PrecioTotalCompraComponent } from './precio-total-compra/precio-total-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaProductosComponent,
    PrecioTotalCompraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
