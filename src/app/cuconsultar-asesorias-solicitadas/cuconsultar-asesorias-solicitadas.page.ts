import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import {AsesoriaService} from '../asesoria.service'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-cuconsultar-asesorias-solicitadas',
  templateUrl: './cuconsultar-asesorias-solicitadas.page.html',
  styleUrls: ['./cuconsultar-asesorias-solicitadas.page.scss'],
})
export class CuconsultarAsesoriasSolicitadasPage implements OnInit {
/**
   *Variable para verificar que opcion de checkbox se selecciona en la vista 
   */
  asesoriaSeleccionada: '0';
  /**
   * Estructura real de las asesorías
   */
  asesorias=[{
     idasesoria:"",
     codigoAsignatura:0,
     tema:"",
     fechaPublicacion:"",
     estudiante:0
  }];

  
  /**
   * variable local que simula el codigo del estudiante 
   */
  estudiante="1701310061";


  constructor(public navCtrl: NavController, public alertController: AlertController, public asesoriaService: AsesoriaService, public storage:Storage) { 
   this.cargarDatos();
  }
  /**
   * Validar si el usuario selecciono una asesoria para ver mas detalles, si cumple se redirecciona a una nueva vista
   */
  async guardarYbuscar(asesoriaSeleccionada) {
    if (asesoriaSeleccionada != undefined) {
      await this.storage.set('idAsesoria',asesoriaSeleccionada.idasesoria);
      await this.navCtrl.navigateForward(['/cuconsultar-asesorias-solicitadas-detalles']);
    } else {
      const alert = await this.alertController.create({
        header: 'Nota',
        message: 'Debes seleccionar una asesoria para ver mas detalles',
        buttons: ['Close']
      });

      await alert.present();
    }
  }
  ngOnInit() {
  }

  /**
   * Inicializa la lista de asesorias de la asignatura del monitor
   * Consumiendo el webservice
   */
  cargarDatos(){
    this.asesoriaService.getAsesoriasEstudiante(this.estudiante).subscribe((data)=>{
      console.log(data);
      this.asesorias=Object.values(data);
    },
    (error=>{
      console.log(error);
    })
    )
  }

}
