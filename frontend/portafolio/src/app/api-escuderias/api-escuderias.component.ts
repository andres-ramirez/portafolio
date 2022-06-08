import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api-escuderias',
  templateUrl: './api-escuderias.component.html',
  styleUrls: ['./api-escuderias.component.css']
})
export class ApiEscuderiasComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.obtenerDatos();
  }

  obtenerDatos(){

    this.apiService.getDatos().subscribe(data =>{
      console.log(data);      
    }, error =>{
      console.log(error);
      
    })
    
  }

}
