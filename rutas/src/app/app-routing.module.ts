import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { VistaServicioComponent } from './servicios/vista-servicio/vista-servicio.component';

/*
  /services estamos cargando la lista de servicios

  /services/diseño-web
  /services/1    cargaré un componente que sea la vista de un servicio

*/


const routes: Routes = [
  // { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServiciosComponent },
  { path: 'service/:servicioId', component: VistaServicioComponent },
  { path: 'contacta', component: ContactoComponent },
  { path: 'comentario', component: ComentariosComponent },
  { path: '**', redirectTo: '/services' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
