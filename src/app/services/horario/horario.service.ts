import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
}
