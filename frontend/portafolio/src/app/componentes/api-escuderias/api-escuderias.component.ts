import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app//servicios/api.service';
import { Escuderias } from 'src/app//modelos/modelo.escuderias';
import { Pilotos } from 'src/app//modelos/modelo.pilotos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api-escuderias',
  templateUrl: './api-escuderias.component.html',
  styleUrls: ['./api-escuderias.component.css']
})
export class ApiEscuderiasComponent implements OnInit {

  datosEscuderias: Escuderias []= [];

  datosPilotos: Pilotos[]= [];

  opcionSelecionada = "Escuderias";
  
  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {    
    this.obtenerEscuderias();
    this.obtenerPilotos();
    
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
