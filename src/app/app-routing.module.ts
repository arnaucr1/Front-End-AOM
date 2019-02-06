import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { IniciarSesionComponent } from './iniciar/iniciar.component';

const routes: Routes = [
  {path:'',component: IniciarSesionComponent}, 
  { path: 'registro', redirectTo: 'registro',component:RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
