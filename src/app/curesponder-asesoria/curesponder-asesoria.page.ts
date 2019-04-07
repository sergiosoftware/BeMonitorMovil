import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

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
   *Estructura temporal, se debe reemplazar por los datos obtenidos del webService desarrollado
   */
  asesoriasDisponibles = [
    {
      codigo: '1',
      asignatura: 'Análisis y diseño de algoritmos',
      tema: 'BackTraking',
      correoEstudiante: 'juliancamy.81@gmail.com'
    },
    {
      codigo: '2',
      asignatura: 'Análisis y diseño de algoritmos',
      tema: 'Ramificación y poda',
      correoEstudiante: 'sergio.1701310061@ucaldas.edu.co'
    },
    {
      codigo: '3',
      asignatura: 'Análisis y diseño de algoritmos',
      tema: 'No se hacer prog dinámica',
      correoEstudiante: 'camilo.171311587@ucaldas.edu.co'
    }
  ]

  constructor(public navCtrl: NavController, public alertController: AlertController) { }

  reproducirSonido(instrumento) {
    let sonido = new Audio();
    sonido.src = instrumento.audio;
    sonido.load();
    sonido.play();
  }
  /**
   * Validar si el usuario selecciono una asesoria para responder, si cumple se redirecciona a una nueva vista
   */
  async guardarYbuscar() {
    if (this.asesoriaSeleccionada != undefined) {
      this.navCtrl.navigateRoot('/curesponder-asesoria-calendario');
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
    this.asesoriaSeleccionada = codigo.codigo;
    console.log('Nuevo estado:' + this.asesoriaSeleccionada);
  }
  ngOnInit() {
  }

}
