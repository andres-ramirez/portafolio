import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiEscuderiasComponent } from './api-escuderias/api-escuderias.component';
import { PipeApiPipe } from './pipes/pipe-edad.pipe';
import { FormsModule } from '@angular/forms';
import { OrdenarCampeonatosPipe } from './pipes/ordenar-campeonatos.pipe';
import { ApiPilotosComponent } from './api-pilotos/api-pilotos.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ApiEscuderiasComponent,
    PipeApiPipe,
    OrdenarCampeonatosPipe,
    ApiPilotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
