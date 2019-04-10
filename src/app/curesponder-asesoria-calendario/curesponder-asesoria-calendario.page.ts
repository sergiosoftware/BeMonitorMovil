import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, NavParams } from '@ionic/angular';
import {AsesoriaService} from '../asesoria.service'
import { Storage } from '@ionic/storage';

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
  private idAsesoria;
  constructor(public navCtrl: NavController,public storage:Storage, public alertController: AlertController, public asesoriaService:AsesoriaService) { 
    storage.get('idAsesoria').then((parameter)=>
      {
        console.log(parameter);
        this.idAsesoria=parameter;
      })
  }

  /**
   * Recibir y gurdar los datos brindados por el usuario en la vista
   * @param fechaA Fecha seleccionada por el monitor para brindar la asesoria
   * @param hora Hota selecionada por el monitor para brindar la asesoria
   */
  async guardarDatos(fechaA: any, hora: any) {
    if (fechaA != undefined && hora != undefined) {
      this.fechaAsesoria = fechaA;
      this.horaAsesoria = hora;
      console.log(this.fechaAsesoria);
      console.log(this.horaAsesoria);
      
      console.log(this.idAsesoria);

      this.asesoriaService.addRespuesta(1,1701122317,this.fechaAsesoria,this.horaAsesoria).subscribe((data)=>{
        console.log(data);
        this.crearRespuestaCorrecta();
      },
      (error=>{
        console.log(error);
      })
      )
    } else {
      

      this.crearRespuestaIncorrecta();
    }

  }

  ngOnInit() {
  }

  async crearRespuestaCorrecta(){
    const alert = await this.alertController.create({
      header: 'Nota',
      message: 'Tu respuesta a quedado registrada',
      buttons: ['Close']
    });
    this.navCtrl.navigateRoot('/home');
    await alert.present();
  }

  async crearRespuestaIncorrecta(){
    const alert = await this.alertController.create({
      header: 'Nota',
      message: 'Debes seleccionar una fecha y una hora',
      buttons: ['Close']
    });
    this.navCtrl.navigateRoot('/home');
    await alert.present();
  }

}
