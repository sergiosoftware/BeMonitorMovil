import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  casosdeUso = [
    {
      nombre: 'Solicitar Asesoria',
      imagen: 'assets/imagenes/solicitarasesoria.jpg',
      audio: 'assets/sonidos/bombo1.mp3'
    }
  ]

  reproducirSonido(instrumento){
    let sonido=new Audio();
    sonido.src=instrumento.audio;
    sonido.load();
    sonido.play();
  }

}
