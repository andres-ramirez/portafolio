import { Component, Inject, OnInit } from '@angular/core';
import { Pilotos } from 'src/app/modelos/modelo.pilotos';
import { ApiService } from 'src/app/servicios/api.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  id_: string,
  nombre: string;
  nacimiento: Date,
  pais: string,
  campeonatos: number,
  podios: number,
  victorias: number,
  poles: number,
  equipo: string,
  numero_coche: number
}

@Component({
  selector: 'app-edicion-pilotos',
  templateUrl: './edicion-pilotos.component.html',
  styleUrls: ['./edicion-pilotos.component.css'],
})
export class EdicionPilotosComponent implements OnInit {


  constructor(public apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.obtenerPilotos();
  }

  piloto = {
    _id: "",
    nombre: "",
    nacimiento: new Date(),
    pais: "",
    campeonatos: 0,
    podios: 0,
    victorias: 0,
    poles: 0,
    equipo: "",
    numero_coche: 0,
  }

  openDialog(dataP: Pilotos) {
    const dialogRef = this.dialog.open(modalPilotosComponent, {
      
      data: {
        _id: dataP._id,
        nombre: dataP.nombre,
        nacimiento: dataP.nacimiento,
        pais: dataP.pais,
        campeonatos: dataP.campeonatos,
        podios: dataP.podios,
        victorias: dataP.victorias,
        poles: dataP.poles,
        equipo: dataP.equipo,
        numero_coche: dataP.numero_coche
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.piloto = result;

      this.apiService.editarPiloto(this.piloto).subscribe(data => {
        this.obtenerPilotos();
      });
    });
  }




  obtenerPilotos() {
    this.apiService.obtenerPilotos().subscribe(data => {
      this.apiService.pilotos = data;
    }, error => {
      console.log(error);
    })
  }

}


@Component({
  selector: 'app-modal-pilotos',
  templateUrl: './modal-pilotos.html',
})

export class modalPilotosComponent {
  constructor(
    public dialogRef: MatDialogRef<EdicionPilotosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}
