import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  private urlEndPoint: string = 'http://localhost:8080/api/profesores';

  constructor(private http: HttpClient) { }

  getProfesorPorId(id: Number){
    let url:string = `${this.urlEndPoint}/${id}`;
    return this.http.get(url).pipe(
      map(response => response as any)
    )
  }
}
