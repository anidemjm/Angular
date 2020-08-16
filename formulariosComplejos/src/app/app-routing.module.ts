import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioModelComponent } from './formulario-model/formulario-model.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: FormularioModelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
