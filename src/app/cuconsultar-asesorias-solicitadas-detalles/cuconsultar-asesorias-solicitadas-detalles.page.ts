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
     fechaRespuesta:"",
     horaRespuesta:"",
     nombreMonitor:"",
     apellidoMonitor:"",
     correo:""
  }];
  /**
     * Variables para tener control tanto de la fecha como de la hora indicadas para dar respuesta a la asesoria
     */
  private idAsesoria;
  constructor(public navCtrl: NavController, public storage: Storage, public alertController: AlertController, public asesoriaService: AsesoriaService) {
    storage.get('idAsesoria').then((parameter) => {
      console.log(parameter);
      this.idAsesoria = parameter;
      this.cargarDatos();
    });
    
  }  

  ngOnInit() {
  }

  async noDatos() {
    const alert = await this.alertController.create({
      header: 'Nota',
      message: 'Lo sentimos, esta asesoría aun no tiene una respuesta',
      buttons: ['Close']
    });
    this.navCtrl.navigateRoot('/cuconsultar-asesorias-solicitadas');
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
      if(Object.values(data).length==0){
        this.noDatos();
      }else{
        this.asesorias=Object.values(data);
      }
     
    },
    (error=>{
      console.log(error);
    })
    )
  }

}
