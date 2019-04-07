import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

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
  constructor(public navCtrl: NavController, public alertController: AlertController) { }

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
      const alert = await this.alertController.create({
        header: 'Nota',
        message: 'Tu respuesta a quedado registrada',
        buttons: ['Close']
      });
      this.navCtrl.navigateRoot('/curesponder-asesoria');
      await alert.present();


    } else {
      const alert = await this.alertController.create({
        header: 'Nota',
        message: 'Debes seleccionar una fecha y una hora',
        buttons: ['Close']
      });

      await alert.present();
    }

  }

  ngOnInit() {
  }


}
