import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-curesponder-asesoria',
  templateUrl: './curesponder-asesoria.page.html',
  styleUrls: ['./curesponder-asesoria.page.scss'],
})
export class CuresponderAsesoriaPage implements OnInit {
  segundaPage = "curesponder-asesoria-calendario";
  asesoriaSeleccionada: string;
  asesoriasDisponibles = [
    {
      codigo: '1',
      asignatura: 'Análisis y diseño de algoritmos',
      tema: 'BackTraking',
      correoEstudiante: 'juliancamy.81@gmail.com',
      responder: '1', isChecked: true
    },
    {
      codigo: '2',
      asignatura: 'Análisis y diseño de algoritmos',
      tema: 'Ramificación y poda',
      correoEstudiante: 'sergio.1701310061@ucaldas.edu.co',
      responder: '2', isChecked: true
    },
    {
      codigo: '3',
      asignatura: 'Análisis y diseño de algoritmos',
      tema: 'No se hacer prog dinámica',
      correoEstudiante: 'camilo.171311587@ucaldas.edu.co',
      responder: '3', isChecked: true
    }
  ]

  constructor(public navCtrl: NavController) { }
  
  reproducirSonido(instrumento){
    let sonido=new Audio();
    sonido.src=instrumento.audio;
    sonido.load();
    sonido.play();
  }

  guardarYbuscar(){
    this.navCtrl.navigateRoot('/curesponder-asesoria-calendario');
  }
  asesoriaActual(codigo) {
    this.asesoriaSeleccionada=codigo.codigo;
    console.log('Nuevo estado:' + this.asesoriaSeleccionada);
  }
  ngOnInit() {
  }

}
