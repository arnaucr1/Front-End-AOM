import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { NgModule } from '@angular/core';
//import { AuthService } from './auth.service';


import { IniciarSesionComponent } from './iniciar/iniciar.component';
import { RegistroComponent } from './registro/registro.component';

import { EditarSubscripcionComponent } from './editar-subscripcion/editar-subscripcion.component';

import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { EditarPerfilRootComponent } from './editar-perfil-root/editar-perfil-root.component';
import { RegistroSubscripcionComponent } from './registro-subscripcion/registro-subscripcion.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeAdminComponent } from './homeadmin/homeadmin.component';
import { EditarPasswordComponent } from './editar-password/editar-password.component';
import { NewsComponent } from './news/news.component';
import { FeedbackComponent } from './feedback/feedback.component';



//creem la constant appRoutes del tipus Routes amb totes les rutes de la App
const appRoutes:Routes=[ 
    {path: '', redirectTo: 'inicio', pathMatch: 'full' }, //pagina inicial
    {path: 'inicio', component:IniciarSesionComponent},
    {path: 'registro',component:RegistroComponent},
    {path: 'editarsubscripcion', component: EditarSubscripcionComponent,/*canActivate:[AuthService]*/},
    {path: 'editarperfil', component: EditarPerfilComponent,/*canActivate:[AuthService]*/},
    {path: 'editarperfilroot', component: EditarPerfilRootComponent,/*canActivate:[AuthService]*/},
    {path: 'registrosubscripcion', component: RegistroSubscripcionComponent,/*canActivate:[AuthService]*/},
    {path: 'homepage', component: HomepageComponent,/*canActivate:[AuthService]*/},
    {path: 'homeadmin', component: HomeAdminComponent,/*canActivate:[AuthService]*/},
    {path: 'modifypass', component: EditarPasswordComponent,/*canActivate:[AuthService]*/},
    {path: 'news', component: NewsComponent,/*canActivate:[AuthService]*/},
    {path: 'feedback', component: FeedbackComponent,/*canActivate:[AuthService]*/},
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