import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AsesoriaService {

  constructor(private http: HttpClient) { }

  //WEBSERVICE ASESORIA
  getAsesorias(){
    return this.http.get('http://bemonitor.phx.enscaled.us/getTodasAsesorias.htm');
  }

  getAsesoriaId(id){
    return this.http.get('http://bemonitor.phx.enscaled.us/getAsesoria.htm?idAsesoria='+id);
  }
  getAsesoriaAsignatura(asignatura:String){
    return this.http.get('http://bemonitor.phx.enscaled.us/getAsesoriaAsignatura.htm?asignatura="'+asignatura+'"');
  }

  addAsesoria(codigoEstudiante,asignatura,tema){
    return this.http.get('http://bemonitor.phx.enscaled.us/getAsesoriaJSP.htm?codigoEstudiante='+codigoEstudiante+'&asignatura='+asignatura+'&tema='+tema);
  }

  getAsesoriasEstudiante(codigoEstudiante){
    return this.http.get('http://bemonitor.phx.enscaled.us/getAsesoriasEstudiante.htm?codigoEstudiante='+codigoEstudiante);
  }

  getDetallesAsesoria(idAsesoria){
    return this.http.get('http://bemonitor.phx.enscaled.us/getDetallesAsesoria.htm?idAsesoria='+idAsesoria);

  }


  //WEBSERVICE PARA RESPUESTAS ASESORIA
  getRespuestas(){
    return this.http.get('http://bemonitor.phx.enscaled.us/getTodasRespuestas.htm');
  }

  getRespuestaId(id){
    return this.http.get('http://bemonitor.phx.enscaled.us/getRespuestaAsesoria.htm?idAsesoria='+id);
  }
  getRespuestasignatura(asignatura){
    return this.http.get('http://bemonitor.phx.enscaled.us/getRespuestaAsignatura.htm?asignatura='+asignatura);
  }

  addRespuesta(idAsesoria,codigoMonitor,fecha,hora){
    return this.http.get('http://bemonitor.phx.enscaled.us/agregarRespuesta.htm?idAsesoria='+idAsesoria+'&codigoMonitor='+codigoMonitor+'&fecha='+fecha+'&hora='+hora);
  }

}