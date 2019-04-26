import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import {AsesoriaService} from '../asesoria.service'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-curesponder-asesoria',
  templateUrl: './curesponder-asesoria.page.html',
  styleUrls: ['./curesponder-asesoria.page.scss'],
})
export class CuresponderAsesoriaPage implements OnInit {
  /**
   *Variable para verificar que opcion de checkbox se selecciona en la vista 
   */
  asesoriaSeleccionada: '0';
  /**
   * Estructura real de las asesorías
   */
  asesorias=[{
     idasesoria:"",
     nombreAsignatura:"",
     tema:"",
     fechaPublicacion:"",
     estudiante:0
  }];

  
  /**
   * variable local que simula la asignatura del monitor
   */
  asesoria="G8F0059";


  constructor(public navCtrl: NavController, public alertController: AlertController, public asesoriaService: AsesoriaService, public storage:Storage) { 
   this.cargarDatos();
  }
  /**
   * Validar si el usuario selecciono una asesoria para responder, si cumple se redirecciona a una nueva vista
   */
  async guardarYbuscar() {
    if (this.asesoriaSeleccionada != undefined) {
      await this.storage.set('idAsesoria',this.asesoriaSeleccionada);
      await this.navCtrl.navigateForward(['/curesponder-asesoria-calendario']);
    } else {
      const alert = await this.alertController.create({
        header: 'Nota',
        message: 'Debes seleccionar una solicitud de asesoria para responder',
        buttons: ['Close']
      });

      await alert.present();
    }
  }
  /**
   * Obtener en tiempo de ejecucion la asesoria selecionada por el actor par darle respuesta
   * @param codigo nos indica el codigo de la asignatura que va a recibir la respuesta
   */
  asesoriaActual(codigo) {
    this.asesoriaSeleccionada = codigo.idasesoria;
    console.log('Nuevo estado:' + this.asesoriaSeleccionada);
    
  }
  ngOnInit() {
  }

  /**
   * Inicializa la lista de asesorias de la asignatura del monitor
   * Consumiendo el webservice
   */
  cargarDatos(){
    this.asesoriaService.getAsesoriaAsignatura(this.asesoria).subscribe((data)=>{
      console.log(data);
      this.asesorias=Object.values(data);
    },
    (error=>{
      console.log(error);
    })
    )
  }

}
