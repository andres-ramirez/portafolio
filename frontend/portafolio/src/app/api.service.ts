import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Escuderia } from './modelos/api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:4000/api-escuderias';

  constructor(private http: HttpClient) { }

  getDatos():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }


}
