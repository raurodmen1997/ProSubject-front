import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

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
}
