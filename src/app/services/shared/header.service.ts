import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  menu: any = [
    { titulo: 'Login', url: '/login' },
    //{ titulo: 'Inicio', url: '/inicio' },
    { titulo: 'Espacios', url: '/busqueda-asignatura' },

    //----CRISTIAN----
    { titulo: 'Creación de espacio', url: '/creacion-espacio'},
    { titulo: 'Espacios profesor', url: '/espacios-profesor'},
    { titulo: 'Espacios alumno', url: '/espacios-alumno'},

   
  ];

  constructor() { }
}
