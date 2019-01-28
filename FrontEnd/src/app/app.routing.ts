import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { IniciarSesionComponent } from './iniciar/iniciar.component';

//creem la constant appRoutes del tipus Routes amb totes les rutes de la App
const appRoutes:Routes=[
    {path:'',component:IniciarSesionComponent}, //pagina inicial
    {path:'registro',component:IniciarSesionComponent},
    {path: '**', component: IniciarSesionComponent } // ** indica el path quan en un error
    ];
    //Creem un array buit que utilitzara Angular
    export const appRoutingProviders:any[]=[];
    //Exportem la variable routing del tipus ModuleWithProviders creada a partir de
    appRoutes
    export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);