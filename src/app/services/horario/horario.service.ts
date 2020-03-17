import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  private urlEndPoint: string = 'http://localhost:8080/api/horarios';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  //Inyección de dependencia
  constructor(private http: HttpClient) { }

  guardarHorario(horario: any){

    return this.http.post(this.urlEndPoint, horario, {headers: this.httpHeaders}).pipe(
      res => {return res}
    );
  }

  getHorariosDeEspacio(espacioId: number){
    let url:string = `${this.urlEndPoint}/espacio/${espacioId}`;
    return this.http.get(url).pipe(
      map(response => response as any[])
    )
  }

  getHorariosPorAlumno(idAlumno: number){
    let url:string = `${this.urlEndPoint}/alumno/${idAlumno}`;
    return this.http.get(url).pipe(
      map(response => response as any[])
    )
  }



  insertarAlumno(horarioId:number, alumnoId:number){
    let url:string = `${this.urlEndPoint}/insertarAlumno?horarioId=${horarioId}&alumnoId=${alumnoId}`;
    return this.http.put(url, {}).pipe(
      map(response => response as any),
      catchError(e =>{
        console.error(e.error.mensaje);
        swal.fire('Error al inscribirse en el horario.', `${e.error.mensaje}`, 'error');
        return throwError(e);
      })

    );
  }
}
