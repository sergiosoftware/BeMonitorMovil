import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-curesponder-asesoria-calendario',
  templateUrl: './curesponder-asesoria-calendario.page.html',
  styleUrls: ['./curesponder-asesoria-calendario.page.scss'],
})
export class CuresponderAsesoriaCalendarioPage implements OnInit {
  /**
   * Variables para tener control tanto de la fecha como de la hora indicadas para dar respuesta a la asesoria
   */
  private fechaAsesoria;
  private horaAsesoria;
  constructor() { }

  /**
   * Recibir y gurdar los datos brindados por el usuario en la vista
   * @param fechaA Fecha seleccionada por el monitor para brindar la asesoria
   * @param hora Hota selecionada por el monitor para brindar la asesoria
   */
  guardarDatos(fechaA: any, hora: any) {
    this.fechaAsesoria = fechaA;
    this.horaAsesoria = hora;
    console.log(this.fechaAsesoria);
    console.log(this.horaAsesoria);

  }

  ngOnInit() {
  }


}
