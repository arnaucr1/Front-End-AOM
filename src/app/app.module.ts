import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

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
import { EditarPerfilDefaultComponent } from './editar-perfil-default/editar-perfil-default.component';
import { NewsComponent } from './news/news.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MostrarEstadisticasComponent } from './mostrar-estadisticas/mostrar-estadisticas.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ChartsModule} from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';

import { registerLocaleData } from '@angular/common';
import localePy from '@angular/common/locales/es-PY';
registerLocaleData(localePy, 'es');

/**
 * Importamos los módulos de social login
 */
import { SocialLoginModule } from "angularx-social-login";
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider  } from 'angularx-social-login';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('525707736535-r9mlfv6mdpifu51f8sroujaq0jjiapg5.apps.googleusercontent.com')
  }
]);
const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'left',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

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
    EditarPasswordComponent,
    NewsComponent,
    FeedbackComponent,
    MyBarChartComponent,
    EditarPerfilDefaultComponent,
    MostrarEstadisticasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    SocialLoginModule,
    HttpModule,
    NotifierModule.withConfig(customNotifierOptions),
    ChartsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    CdkTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
   // NgbModule,NgbdModalContent
    
  ],
  providers: [appRoutingProviders, 
    {
    provide: AuthServiceConfig,
    useFactory: provideConfig
    }, { provide: LOCALE_ID, useValue: 'es-Ar' }],
  bootstrap: [AppComponent]
})
export class AppModule { }