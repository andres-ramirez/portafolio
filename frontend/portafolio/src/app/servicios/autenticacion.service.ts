import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

constructor() { }

  public isAuthenticated(): boolean {
    
    let permiso = false;
    localStorage.getItem('token') === null ? permiso =false : permiso = true;
    return permiso;
    
    // return !!localStorage.getItem('token');
  }

}
