import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cusolicitar-asesoria',
  templateUrl: './cusolicitar-asesoria.page.html',
  styleUrls: ['./cusolicitar-asesoria.page.scss'],
})
export class CUSolicitarAsesoriaPage implements OnInit {
  casosdeUso = [
    {
      nombre: 'Solicitar Asesoria',
      imagen: 'assets/imagenes/solicitarasesoria.jpg',
      audio: 'assets/sonidos/bombo1.mp3'
    }
  ]

  constructor() {

  }

  getDatos(){
    
  }

  reproducirSonido(instrumento) {
    let sonido = new Audio();
    sonido.src = instrumento.audio;
    sonido.load();
    sonido.play();
  }
  ngOnInit() {

  }

}
