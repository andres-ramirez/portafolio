import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

constructor() { }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

}
