import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BusquedaAsignaturaService {
  private urlEndPoint: string = 'http://localhost:8080/api/universidades';

  //Inyección de dependencia
  constructor(private http: HttpClient) { }

  getUniversidades(): Observable<any[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as any[])
    );
  }
}
