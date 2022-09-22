import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiEscuderiasComponent } from './componentes/api-escuderias/api-escuderias.component';
import { EdicionEscuderiasComponent } from './componentes/edicion-escuderias/edicion-escuderias.component';
import { EdicionPilotosComponent } from './componentes/edicion-pilotos/edicion-pilotos.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import {RutasEdicionGuard} from './rutas-edicion.guard';  

const routes: Routes = [
  { path: "", component: PrincipalComponent},
  { path: "api-f1", component: ApiEscuderiasComponent},
  { path: "iniciarsesion", component: InicioSesionComponent},
  { path: "edicion-pilotos", component: EdicionPilotosComponent, canActivate: [RutasEdicionGuard]},
  { path: "edicion-escuderias", component: EdicionEscuderiasComponent, canActivate: [RutasEdicionGuard]},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
