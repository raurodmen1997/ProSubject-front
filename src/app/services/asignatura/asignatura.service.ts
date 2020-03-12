import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  private urlEndPoint: string = 'http://localhost:8080/api/asignaturas';

  //Inyección de dependencia
  constructor(private http: HttpClient) { }

  getAsignaturas(): Observable<any[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as any[])
    );
  }

  getAsignaturasPorUniversidadYFacultadYGradoYCurso(universidad:string, facultad:string, grado:string, curso:string):Observable<any[]> {
    let url:string = `${this.urlEndPoint}/busquedaAsignaturas?universidad=${universidad}&facultad=${facultad}&grado=${grado}&curso=${curso}`;
    return this.http.get(url).pipe(
      map(response => response as any[])
    );
  }
}
