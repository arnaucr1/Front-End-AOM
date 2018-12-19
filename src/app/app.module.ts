import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Routes,RouterModule} from '@angular/router';

import { IniciarSesionComponent } from "./iniciar/iniciar.component";
import { FootercolorComponent } from './footer-color/footer-color.component';
import { RegistroComponent } from './registro/registro.component';


import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    FootercolorComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
