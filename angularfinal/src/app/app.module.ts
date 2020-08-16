import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    BlogComponent,
    FormularioComponent,
  ],
  imports: [BrowserModule, routing, HttpClientModule, FormsModule],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
