import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpGetComponent } from './components/http-get/http-get.component';

const routes: Routes = [{ path: 'get', component: HttpGetComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
