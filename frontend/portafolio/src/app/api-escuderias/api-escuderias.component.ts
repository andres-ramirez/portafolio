import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Escuderia } from '../modelos/api.model';
import { Escuderias } from '../modelos/modelo.escuderias';

@Component({
  selector: 'app-api-escuderias',
  templateUrl: './api-escuderias.component.html',
  styleUrls: ['./api-escuderias.component.css']
})
export class ApiEscuderiasComponent implements OnInit {

  datosApi: Escuderia []= [];

  datosEscuderias: Escuderias[]=[];

  ordenarCampeonatos: Escuderia[]= [];

  opcionSelecionada = "Escuderias";
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {    
    this.obtenerDatos();  
    
  } 
  
  obtenerDatos(){
    
    this.apiService.getDatos().subscribe(data =>{
      this.datosApi= data;
      this.ordenarCampeonatos = this.datosApi.sort((a, b)=>{
        return (b.campeonatos - a.campeonatos);
      });
      console.log(this.ordenarCampeonatos);
      console.log(this.datosApi);      
                  
    }, error =>{
      console.log(error);
      
    })
    
  }

  

}
