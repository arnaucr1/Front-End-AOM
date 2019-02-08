import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { NgModule } from '@angular/core';


import { IniciarSesionComponent } from './iniciar/iniciar.component';
import { RegistroComponent } from './registro/registro.component';
import { editarPerfilComponent } from './editarperfil/editarperfil.component';

//creem la constant appRoutes del tipus Routes amb totes les rutes de la App
const appRoutes:Routes=[ 
    {path:'',component:IniciarSesionComponent}, //pagina inicial
    {path:'registro',component:RegistroComponent},
    {path: 'editarperfil', component: editarPerfilComponent },
    {path: '**', component: IniciarSesionComponent } // ** indica el path quan en un error
  
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