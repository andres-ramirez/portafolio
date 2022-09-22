import { Component, OnInit } from '@angular/core';
import { Pilotos } from 'src/app/modelos/modelo.pilotos';
import { ApiService } from 'src/app/servicios/api.service';
declare var window: any;

@Component({
  selector: 'app-edicion-pilotos',
  templateUrl: './edicion-pilotos.component.html',
  styleUrls: ['./edicion-pilotos.component.css'],
})
export class EdicionPilotosComponent implements OnInit {
  
  formModal: any;
  
  constructor(public apiService: ApiService) { }
  
  piloto= {
    _id:"",
    nombre: "",
    nacimiento: new Date(),
    pais: "",
    campeonatos: 0,
    podios: 0,
    victorias:0,
    poles: 0,
    equipo: "",
    numero_coche: 0,
  } 
  
  
  ngOnInit() {    
    this.obtenerPilotos();   
  }
  
  obtenerPilotos(){
    this.apiService.obtenerPilotos().subscribe(data =>{
      this.apiService.pilotos = data;                   
    }, error =>{
      console.log(error);
    })
  }
  
  llenarDatos(dataP: Pilotos){
    this.piloto._id = dataP._id;    
    this.piloto.nombre = dataP.nombre;
    this.piloto.nacimiento = dataP.nacimiento;
    this.piloto.pais = dataP.pais;
    this.piloto.campeonatos = dataP.campeonatos;
    this.piloto.podios = dataP.podios;
    this.piloto.victorias = dataP.victorias;
    this.piloto.poles = dataP.poles;
    this.piloto.equipo = dataP.equipo;
    this.piloto.numero_coche = dataP.numero_coche;
    
    console.log(dataP);
    
  }
  
  editarPiloto(){ 
    this.apiService.editarPiloto(this.piloto).subscribe(data =>{
      this.formModal.hide();
    } , error =>{
      console.log(error);
    } )    
  }
  
}
