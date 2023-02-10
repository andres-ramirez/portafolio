import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Escuderias } from 'src/app/modelos/modelo.escuderias';
import { ApiService } from 'src/app/servicios/api.service';

export interface DialogData {
  id_: string,
  nombre: string;
  jefe_equipo: string,
  sede: string,
  chasis: string,
  motor: string,
  campeonatos: number,
  poles: number,
  pilotos: ["", ""]
}


@Component({
  selector: 'app-edicion-escuderias',
  templateUrl: './edicion-escuderias.component.html',
  styleUrls: ['./edicion-escuderias.component.css']
})
export class EdicionEscuderiasComponent implements OnInit {



  constructor(public apiServiceE: ApiService, public dialog: MatDialog) { }

  ngOnInit() {

    this.obtenerEscuderias();

  }

  escuderia = {
    _id: '',
    nombre: '',
    jefe_equipo: '',
    sede: '',
    chasis: '',
    motor: '',
    campeonatos: 0,
    poles: 0,
    pilotos: [] = ['', '']
  }

  opendialog(dataE: Escuderias) {
    const dialogRef = this.dialog.open(modalEscuderiasComponent, {
      data: {
        _id: dataE._id, 
        nombre: dataE.nombre, 
        jefe_equipo: dataE.jefe_equipo, 
        sede: dataE.sede,
        chasis: dataE.chasis, 
        motor: dataE.motor, 
        campeonatos: dataE.campeonatos,
        poles: dataE.poles, 
        pilotos: dataE.pilotos
      }

    });

    dialogRef.afterClosed().subscribe(result => {

      this.escuderia = result;

      this.apiServiceE.editarEscuderia(this.escuderia).subscribe(data => {
        this.obtenerEscuderias();
      })

    });
  }

  obtenerEscuderias() {
    this.apiServiceE.obtenerEscuderias().subscribe(data => {
      this.apiServiceE.escuderias = data;
    }, error => {
      console.log(error);
    })
  }

}

@Component({
  selector: 'app-modal',
  templateUrl: './modal-escuderias.html',
})

export class modalEscuderiasComponent {
  constructor(
    public dialogRef: MatDialogRef<EdicionEscuderiasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}
