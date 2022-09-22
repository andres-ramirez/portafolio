import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Escuderias } from '../modelos/modelo.escuderias';
import { Pilotos } from '../modelos/modelo.pilotos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:4000/api-escuderias';
  urlUser = 'http://localhost:4000/usuarios';

  pilotos: Pilotos[] = [];
  escuderias: Escuderias[] =[];

  constructor(private http: HttpClient) { 
  }

  obtenerEscuderias():Observable<Escuderias[]>{
    return this.http.get<Escuderias[]>(`${this.url}/escuderias`);
  }

  obtenerPilotos():Observable<Pilotos[]>{
    return this.http.get<Pilotos[]>(`${this.url}/pilotos`);
  }

  editarPiloto(piloto: Pilotos):Observable<Pilotos>{
    return this.http.put<Pilotos>(`${this.url}/editarpiloto/${piloto._id}`, piloto);
  }

  editarEscuderia(escuderia: Escuderias):Observable<Escuderias>{
    return this.http.put<Escuderias>(`${this.url}/editarescuderia/${escuderia._id}`, escuderia);
  }

  iniciarSesion(user: any):Observable<any>{
    return this.http.post<any>(`${this.urlUser}/login`, user);
  }


}
