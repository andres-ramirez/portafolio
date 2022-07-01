import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiEscuderiasComponent } from './api-escuderias/api-escuderias.component';
import { PipeApiPipe } from './pipes/pipe-edad.pipe';
import { FormsModule } from '@angular/forms';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { EdicionPilotosComponent } from './edicion-pilotos/edicion-pilotos.component';
import { EdicionEscuderiasComponent } from './edicion-escuderias/edicion-escuderias.component';
import { RutasEdicionGuard } from './rutas-edicion.guard';

@NgModule({
  declarations: [			
    AppComponent,
    PrincipalComponent,
    ApiEscuderiasComponent,
    PipeApiPipe,
    InicioSesionComponent,
      EdicionPilotosComponent,
      EdicionEscuderiasComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ 
    RutasEdicionGuard
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
