import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AutenticacionService } from './servicios/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class RutasEdicionGuard implements CanActivate {

  constructor(private autenticar: AutenticacionService, private router: Router) { }

  canActivate(): boolean {
    if (this.autenticar.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/iniciarsesion']);
    alert('Inicie sesión para acceder');
    return false;

  }
  
}
