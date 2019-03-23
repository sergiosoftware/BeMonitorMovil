import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file';
import { JsonPipe } from '@angular/common';
import { writeFile } from 'fs';

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

  constructor(private file: File) {

  }
  public items: Array<{ codigoEstudiante: string; asignatura: string; tema: string }> = [];
  crearAsesoria(codigoEstudian: string, asignature: string, tem: string) {
    this.items.push({
        codigoEstudiante: codigoEstudian,
        asignatura: asignature,
        tema: tem
      });
      this.writeJSON("asesorias.json", this.items);


  }

  readJson(object) {
    this.items = JSON.parse(object);
  }

  writeJSON(filename, object) {
    return this.file.writeFile(this.file.dataDirectory, filename, JSON.stringify(object), { replace: false })
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
