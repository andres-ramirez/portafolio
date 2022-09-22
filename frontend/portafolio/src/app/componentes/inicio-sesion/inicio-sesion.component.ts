import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';



@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  user = {
    usuario: '',
    pass: ''
  }
  

  constructor(private autenticar: ApiService, private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion(){
    console.log(this.user);
    
    this.autenticar.iniciarSesion(this.user).subscribe(
      (data) => {
        console.log(data);
        localStorage.setItem('token', data.token);
        this.router.navigate(['/edicion-pilotos']);
      },
      (error) => {
        console.log(error);
        alert('Usuario o contraseña incorrectos');
      } 
    )
  }
    
  

}
