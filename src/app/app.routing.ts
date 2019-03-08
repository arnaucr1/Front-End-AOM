import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { NgModule } from '@angular/core';
//import { AuthService } from './auth.service';


import { IniciarSesionComponent } from './iniciar/iniciar.component';
import { RegistroComponent } from './registro/registro.component';

import { EditarSubscripcionComponent } from './editar-subscripcion/editar-subscripcion.component';

import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { RegistroSubscripcionComponent } from './registro-subscripcion/registro-subscripcion.component';



//creem la constant appRoutes del tipus Routes amb totes les rutes de la App
const appRoutes:Routes=[ 
    {path: '', redirectTo: 'inicio', pathMatch: 'full' }, //pagina inicial
    {path: 'inicio', component:IniciarSesionComponent},
    {path: 'registro',component:RegistroComponent},
    {path: 'editarsubscripcion', component: EditarSubscripcionComponent,/*canActivate:[AuthService]*/},
    {path: 'editarperfil', component: EditarPerfilComponent,/*canActivate:[AuthService]*/},
    {path: 'registrosubscripcion', component: RegistroSubscripcionComponent,/*canActivate:[AuthService]*/},
    {path: '**', redirectTo: 'inicio', pathMatch: 'full' } //Redireccion a inicio
    ];



    //Creem un array buit que utilitzara Angular
    export const appRoutingProviders:any[]=[];
    //Exportem la variable routing del tipus ModuleWithProviders creada a partir de
    appRoutes
    export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);


    @NgModule({
        exports: [
          RouterModule
        ],
        imports: [
          RouterModule.forRoot(appRoutes)
        ]
      })
      export class AppRoutingModule { }