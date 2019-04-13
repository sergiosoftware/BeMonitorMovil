import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import {AsesoriaService} from '../asesoria.service'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-cuconsultar-asesorias-solicitadas-detalles',
  templateUrl: './cuconsultar-asesorias-solicitadas-detalles.page.html',
  styleUrls: ['./cuconsultar-asesorias-solicitadas-detalles.page.scss'],
})
export class CuconsultarAsesoriasSolicitadasDetallesPage implements OnInit {
  /**
   * Estructura real de las asesorías detalladas
   */
  asesorias=[{
     asignatura:"",
     tema:0,
     fechaRespuesta:"",
     nombreMonitor:"",
     correoMonitor:""
  }];
  /**
     * Variables para tener control tanto de la fecha como de la hora indicadas para dar respuesta a la asesoria
     */
  private idAsesoria;
  constructor(public navCtrl: NavController, public storage: Storage, public alertController: AlertController, public asesoriaService: AsesoriaService) {
    storage.get('idasesoria').then((parameter) => {
      console.log(parameter);
      this.idAsesoria = parameter;
    });
    this.cargarDatos();
  }  

  ngOnInit() {
  }

  async crearRespuestaCorrecta() {
    const alert = await this.alertController.create({
      header: 'Nota',
      message: 'Tu respuesta a quedado registrada',
      buttons: ['Close']
    });
    this.navCtrl.navigateRoot('/home');
    await alert.present();
  }

  async crearRespuestaIncorrecta() {
    const alert = await this.alertController.create({
      header: 'Nota',
      message: 'Debes seleccionar una fecha y una hora',
      buttons: ['Close']
    });
    this.navCtrl.navigateRoot('/home');
    await alert.present();
  }
  /**
   * Regresar a la vista de las solicitudes registradas
     */
  async regresar() {
    this.navCtrl.navigateForward(['/cuconsultar-asesorias-solicitadas']);
  }

  /**
   * Inicializa la lista de asesorias detalladas del estudainte
   * Consumiendo el webservice
   */
  cargarDatos(){
    this.asesoriaService.getDetallesAsesoria(this.idAsesoria).subscribe((data)=>{
      console.log(data);
      this.asesorias=Object.values(data);
    },
    (error=>{
      console.log(error);
    })
    )
  }

}
