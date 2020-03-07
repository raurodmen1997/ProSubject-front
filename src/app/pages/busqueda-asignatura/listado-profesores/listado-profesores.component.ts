import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-profesores',
  templateUrl: './listado-profesores.component.html',
  styleUrls: ['./listado-profesores.component.css']
})
export class ListadoProfesoresComponent implements OnInit {

  profesores: any[] = [
    {
      id:1,
      nombre: 'Cristian',
      apellidos: 'Lorca Brenes',
      dni: '49124656-Z',
      email: 'cristian@hotmail.com',
      telefono: '646245374',
      grado: 'Segundo',
      universidad: 'Universidad de Sevilla',
      titulacion: 'Ingeniería del Software',
      sexo: 'H'
    },
    {
      id:2,
      nombre: 'Laura',
      apellidos: 'Mendez Montes',
      dni: '49124436-Y',
      email: 'laura@hotmail.com',
      telefono: '646245374',
      grado: 'Tercero',
      universidad: 'Universidad de Sevilla',
      titulacion: 'Quimica',
      sexo: 'M'
    },
    {
      id:3,
      nombre: 'Antonio',
      apellidos: 'Segura Jimenez',
      dni: '49124656-Y',
      email: 'antonio@hotmail.com',
      telefono: '646245374',
      grado: 'Primero',
      universidad: 'Universidad de Sevilla',
      titulacion: 'Magisterio',
      sexo: 'H'
    },
    {
      id:4,
      nombre: 'Jesus',
      apellidos: 'Elías Rodriguez',
      dni: '49124651-Y',
      email: 'jesus@hotmail.com',
      telefono: '646245374',
      grado: 'Cuarto',
      universidad: 'Universidad de Sevilla',
      titulacion: 'Project Manager',
      sexo: 'H'
    },
    {
      id:5,
      nombre: 'Marisa',
      apellidos: 'Fernandez Martinez',
      dni: '49124651-Y',
      email: 'maraisa@hotmail.com',
      telefono: '646245374',
      grado: 'Cuarto',
      universidad: 'Universidad de Sevilla',
      titulacion: 'Física',
      sexo: 'M'
    }

  ]

  constructor() { }

  ngOnInit(): void {

  }

}
