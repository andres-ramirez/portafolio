import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiEscuderiasComponent } from './api-escuderias/api-escuderias.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: "", component: PrincipalComponent},
  { path: "api-f1", component: ApiEscuderiasComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
