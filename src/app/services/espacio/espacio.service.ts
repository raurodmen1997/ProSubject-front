import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EspacioService {
  private urlEndPoint: string = 'http://localhost:8080/api/espacios';

  //Inyección de dependencia
  constructor(private http: HttpClient) { }

  getEspacios(): Observable<any[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as any[])
    );
  }


  getEspaciosPorParametros(universidad:string, facultad:string, grado:string, curso:string, asignatura:string):Observable<any[]> {
    let url:string = `${this.urlEndPoint}/espaciosDisponibles?universidad=${universidad}&facultad=${facultad}&grado=${grado}&curso=${curso}&asignatura=${asignatura}`;
    return this.http.get(url).pipe(
      map(response => response as any[])
    );
  }
}
