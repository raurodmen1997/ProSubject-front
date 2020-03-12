import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  menu: any = [
    { titulo: 'Login', url: '/login' },
    { titulo: 'Inicio', url: '/inicio' },
    { titulo: 'Busqueda de asignatura', url: '/busqueda-asignatura' },

    //----CRISTIAN----
    { titulo: 'Listado profesores', url: '/profesores'},
    { titulo: 'Creación de espacio', url: '/creacion-espacio'}
   
  ];

  constructor() { }
}
