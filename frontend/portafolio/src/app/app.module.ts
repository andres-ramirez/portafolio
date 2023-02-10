import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiEscuderiasComponent } from './componentes/api-escuderias/api-escuderias.component';
import { PipeApiPipe } from './pipes/pipe-edad.pipe';
import { FormsModule } from '@angular/forms';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { EdicionPilotosComponent, modalPilotosComponent } from './componentes/edicion-pilotos/edicion-pilotos.component';
import { EdicionEscuderiasComponent, modalEscuderiasComponent } from './componentes/edicion-escuderias/edicion-escuderias.component';
import { RutasEdicionGuard } from './rutas-edicion.guard';
import { JwtInterceptorInterceptor } from './interceptor/jwt-interceptor.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, } from '@angular/material/form-field';
import {MaterialExampleModule} from '../material.module';


@NgModule({
  declarations: [			
    AppComponent,
    PrincipalComponent,
    ApiEscuderiasComponent,
    PipeApiPipe,
    InicioSesionComponent,
    EdicionPilotosComponent,
    EdicionEscuderiasComponent,
    modalEscuderiasComponent,
    modalPilotosComponent   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MaterialExampleModule
  ],
  providers: [ 
    RutasEdicionGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,
      multi: true      
    },
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
