import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  menu: any = [
    { titulo: 'Login', url: '#' },
    { titulo: 'Inicio', url: '/inicio' },
    { titulo: 'Busqueda de asignatura', url: '/busqueda-asignatura' }
   
  ];

  constructor() { }
}
