import { NgModule } from '@angular/core';
//import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { IniciarSesionComponent } from './iniciar/iniciar.component';
import { EditarSubscripcionComponent } from './editar-subscripcion/editar-subscripcion.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
