import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { VistaServicioComponent } from './servicios/vista-servicio/vista-servicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    HomeComponent,
    ContactoComponent,
    ComentariosComponent,
    VistaServicioComponent
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
