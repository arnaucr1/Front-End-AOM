import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {routing, appRoutingProviders} from './app.routing'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IniciarSesionComponent } from "./iniciar/iniciar.component";
import { FootercolorComponent } from './footer-color/footer-color.component';
import { RegistroComponent } from './registro/registro.component';
import { EditarSubscripcionComponent } from './editar-subscripcion/editar-subscripcion.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { RegistroSubscripcionComponent } from './registro-subscripcion/registro-subscripcion.component'
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
/**
 * Importamos los módulos de social login
 */
import { SocialLoginModule } from "angularx-social-login";
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider  } from 'angularx-social-login';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('561602290896109')
  },
  {
    id: LinkedInLoginProvider.PROVIDER_ID,
    provider: new LinkedInLoginProvider('78iqy5cu2e1fgr')
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
    RegistroSubscripcionComponent
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
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
