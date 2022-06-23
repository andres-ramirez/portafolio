import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { Escuderia } from '../modelos/api.model';
import { Escuderias } from '../modelos/modelo.escuderias';
import { Pilotos } from '../modelos/modelo.pilotos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api-escuderias',
  templateUrl: './api-escuderias.component.html',
  styleUrls: ['./api-escuderias.component.css']
})
export class ApiEscuderiasComponent implements OnInit {

  datosApi: Escuderia []= [];

  datosEscuderias: Escuderias []= [];

  datosPilotos: Pilotos[]= [];

  opcionSelecionada = "Escuderias";
  
  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {    
    this.obtenerDatos();  
    this.obtenerEscuderias();
    this.obtenerPilotos();
    
  } 
  
  obtenerDatos(){    
    this.apiService.getDatos().subscribe(data =>{
      this.datosApi= data;                   
    }, error =>{
      console.log(error);
      
    })    
  } 

  obtenerEscuderias(){
    this.apiService.obtenerEscuderias().subscribe(data =>{
      this.datosEscuderias= data;
      console.log(this.datosEscuderias);
                         
    }, error =>{
      console.log(error);      
    })    
  }

  obtenerPilotos(){
    this.apiService.obtenerPilotos().subscribe(data =>{
      this.datosPilotos= data;
      console.log(this.datosPilotos);                     
    }, error =>{
      console.log(error);
    })
  }

  inicioSesion(){
      this.router.navigate(['/iniciarsesion']);
  }
  









  

}
