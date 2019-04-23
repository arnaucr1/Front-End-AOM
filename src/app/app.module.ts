import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {routing, appRoutingProviders} from './app.routing'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IniciarSesionComponent } from "./iniciar/iniciar.component";
import { FootercolorComponent } from './footer-color/footer-color.component';
import { RegistroComponent } from './registro/registro.component';
import { EditarSubscripcionComponent } from './editar-subscripcion/editar-subscripcion.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { EditarPerfilRootComponent } from './editar-perfil-root/editar-perfil-root.component';
import { EditarPasswordComponent } from './editar-password/editar-password.component';
import { RegistroSubscripcionComponent } from './registro-subscripcion/registro-subscripcion.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeAdminComponent } from './homeadmin/homeadmin.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { registerLocaleData } from '@angular/common';
import localePy from '@angular/common/locales/es-PY';
registerLocaleData(localePy, 'es');

/**
 * Importamos los módulos de social login
 */
import { SocialLoginModule } from "angularx-social-login";
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider  } from 'angularx-social-login';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('525707736535-r9mlfv6mdpifu51f8sroujaq0jjiapg5.apps.googleusercontent.com')
  }
]);

 export function provideConfig() {
   return config;
 }

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    FootercolorComponent,
    RegistroComponent,
    EditarSubscripcionComponent,
    EditarPerfilComponent,
    EditarPerfilRootComponent,
    RegistroSubscripcionComponent,
    HomepageComponent,
    HomeAdminComponent,
    EditarPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    SocialLoginModule,
    HttpModule
  ],
  providers: [appRoutingProviders, 
    {
    provide: AuthServiceConfig,
    useFactory: provideConfig
    }, { provide: LOCALE_ID, useValue: 'es-Ar' }],
  bootstrap: [AppComponent]
})
export class AppModule { }