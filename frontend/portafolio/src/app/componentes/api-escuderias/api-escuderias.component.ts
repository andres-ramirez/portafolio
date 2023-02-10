import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app//servicios/api.service';
import { Escuderias } from 'src/app//modelos/modelo.escuderias';
import { Pilotos } from 'src/app//modelos/modelo.pilotos';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-api-escuderias',
  templateUrl: './api-escuderias.component.html',
  styleUrls: ['./api-escuderias.component.css']
})
export class ApiEscuderiasComponent implements OnInit {

  datosEscuderias: Escuderias []= [];

  datosPilotos: Pilotos[]= [];

  opcionSelecionada = "Escuderias";

  autenticado : boolean;
  
  constructor(private apiService: ApiService, private router:Router, private isAuthenticated: AutenticacionService) { }

  ngOnInit(): void {    
    this.obtenerEscuderias();
    this.obtenerPilotos();
    this.sesionIniciada();
  }   

  obtenerEscuderias(){
    this.apiService.obtenerEscuderias().subscribe(data =>{
      this.datosEscuderias= data;                         
    }, error =>{
      console.log(error);      
    })    
  }

  sesionIniciada(){
    this.isAuthenticated.isAuthenticated() ? this.autenticado = true : this.autenticado = false;
  }

  obtenerPilotos(){
    this.apiService.obtenerPilotos().subscribe(data =>{
      this.datosPilotos= data;
    }, error =>{
      console.log(error);
    })
  }

  inicioSesion(){
      this.router.navigate(['/iniciarsesion']);
  }

  cerrarSesion(){
    localStorage.removeItem('token');
    this.router.navigate(['/iniciarsesion'])
  }
  

}
