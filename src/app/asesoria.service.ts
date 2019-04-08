import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AsesoriaService {

  constructor(private http: HttpClient) { }

  //WEBSERVICE ASESORIA
  getAsesorias(){
    return this.http.get('http://localhost:8080/Software3/getTodasAsesorias.htm');
  }

  getAsesoriaId(id){
    return this.http.get('http://localhost:8080/Software3/getAsesoria.htm?idAsesoria='+id);
  }
  getAsesoriaAsignatura(asignatura:String){
    return this.http.get('http://10.11.89.128:8083/Software3/getAsesoriaAsignatura.htm?asignatura="'+asignatura+'"');
  }

  addAsesoria(codigoEstudiante,asignatura,tema){
    return this.http.get('http://10.11.89.128:8083/Software3/getAsesoriaJSP.htm?codigoEstudiante='+codigoEstudiante+'&asignatura='+asignatura+'&tema='+tema);
  }


  //WEBSERVICE PARA RESPUESTAS ASESORIA
  getRespuestas(){
    return this.http.get('http://localhost:8080/Software3/getTodasRespuestas.htm');
  }

  getRespuestaId(id){
    return this.http.get('http://localhost:8080/Software3/getRespuestaAsesoria.htm?idAsesoria='+id);
  }
  getRespuestasignatura(asignatura){
    return this.http.get('http://localhost:8080/Software3/getRespuestaAsignatura.htm?asignatura='+asignatura);
  }

  addRespuesta(idAsesoria,codigoMonitor,fecha,hora){
    return this.http.get('http://10.11.89.128:8083/Software3/agregarRespuesta.htm?idAsesoria='+idAsesoria+'&codigoMonitor='+codigoMonitor+'&fecha='+fecha+'&hora='+hora);
  }

}