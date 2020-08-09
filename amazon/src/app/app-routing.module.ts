import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';
import { RelacionadosComponent } from './vista-producto/relacionados/relacionados.component';
import { PopularesComponent } from './vista-producto/populares/populares.component';


const routes: Routes = [
  { path: 'productos', component: ListaProductosComponent },
  { path: 'productos/:tituloCategoria', component: ListaProductosComponent },
  { path: 'productos/:tituloCategoria/:subcategoria', component: ListaProductosComponent },
  {
    path: 'producto/:productoId', component: VistaProductoComponent, children: [
      { path: 'relacionados', component: RelacionadosComponent },
      { path: 'populares', component: PopularesComponent }
    ]
  },
  { path: 'search/:parametroBusqueda', component: ListaProductosComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
