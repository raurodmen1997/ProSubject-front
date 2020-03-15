import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {

  private urlEndPoint: string = 'http://localhost:8080/api/facultades';

  constructor(private http: HttpClient) { }


  getFacultades(): Observable<any[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as any[])
    );
  }


  getFacultadesPorUniversidad(universidad:string):Observable<any[]> {
    let url:string = `${this.urlEndPoint}/busquedaFacultades?universidad=${universidad}`;
    return this.http.get(url).pipe(
      map(response => response as any[])
    );
    
  

    
  }
}
