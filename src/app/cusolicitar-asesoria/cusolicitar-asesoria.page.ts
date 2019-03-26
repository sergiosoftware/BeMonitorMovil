import {
  Component,
  ViewChild
} from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AsesoriaService} from '../asesoria.service'

@Component({
  selector: 'app-cusolicitar-asesoria',
  templateUrl: './cusolicitar-asesoria.page.html',
  styleUrls: ['./cusolicitar-asesoria.page.scss'],
})

export class CUSolicitarAsesoriaPage {
  /**
   * Define atributes of class 
   * */
  private asignaturaAsesoria: string;
  private temaAsesoria: string;
  form: FormGroup;

  // Validation error messages that will be displayed for each form field with errors.
  validation_messages = {
    'temaA': [
      { type: 'pattern', message: 'Debe ingresar un tema para la asesoría' }
    ],
    'asignaturaA': [
      { type: 'pattern', message: 'Debe ingresar una asignatura para la asesoría' }
    ]
  }
  constructor(public formBuilder: FormBuilder, public asesoriaService:AsesoriaService) {
    // Create the form and define fields and validators.
    this.form = this.formBuilder.group({
      asignaturaA: ['', Validators.pattern('[A-Z]+[0-9]+[A-Z]+[0-9]+')],
      temaA: ['', Validators.pattern('[A-z0-9]+(\s*[A-z0-9]*)*[A-z0-9]')]
    });
  }
  /*
   * Save form values.
   */
  save() {
    if ((this.form.valid) && (this.form.get('temaA').value != '')) {
      // Save your values, using this.form.get('myField').value;
      this.asignaturaAsesoria = this.form.get('asignaturaA').value;
      this.temaAsesoria = this.form.get('temaA').value;
      console.log("datos obtenidos");
      console.log(this.asignaturaAsesoria);
      console.log(this.temaAsesoria);
      let codigoEstudiante=1701310061;
      this.asesoriaService.addAsesoria(codigoEstudiante,this.asignaturaAsesoria,this.temaAsesoria).subscribe((data)=>{
        console.log(data);
      },
      (error=>{
        console.log(error);
      })
      )
    }
  }
}
