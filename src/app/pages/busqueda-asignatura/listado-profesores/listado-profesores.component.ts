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
      curso: {
        id:2,
        nombre:'Segundo'
      },
      universidad: {
        id:1,
        nombre:'Universidad de Sevilla'
      },
      grado: {
        id:1,
        nombre:'Ingeniería del Software'
      },
      sexo: 'H',
      valoracionMedia: 4
    },
    {
      id:2,
      nombre: 'Laura',
      apellidos: 'Mendez Montes',
      dni: '49124436-Y',
      email: 'laura@hotmail.com',
      telefono: '646245374',
      curso: {
        id:3,
        nombre:'Tercero'
      },
      universidad: {
        id:2,
        nombre:'Universidad de Sevilla'
      },
      grado: {
        id:2,
        nombre:'Química'
      },
      sexo: 'M',
      valoracionMedia: 7
    },
    {
      id:3,
      nombre: 'Antonio',
      apellidos: 'Segura Jimenez',
      dni: '49124656-Y',
      email: 'antonio@hotmail.com',
      telefono: '646245374',
      curso: {
        id:1,
        nombre:'Primero'
      },
      universidad: {
        id:3,
        nombre:'Universidad de Sevilla'
      },
      grado: {
        id:3,
        nombre:'Magisterio'
      },
      sexo: 'H',
      valoracionMedia: 9
    },
    {
      id:4,
      nombre: 'Jesus',
      apellidos: 'Elías Rodriguez',
      dni: '49124651-Y',
      email: 'jesus@hotmail.com',
      telefono: '646245374',
      curso: {
        id:4,
        nombre:'Cuarto'
      },
      universidad: {
        id:4,
        nombre:'Universidad de Huelva'
      },
      grado: {
        id:4,
        nombre:'Matemáticas'
      },
      sexo: 'H',
      valoracionMedia: 8.7
    },
    {
      id:5,
      nombre: 'Marisa',
      apellidos: 'Fernandez Martinez',
      dni: '49124651-Y',
      email: 'marisa@hotmail.com',
      telefono: '646245374',
      curso: {
        id:4,
        nombre:'Cuarto'
      },
      universidad: {
        id:5,
        nombre:'Universidad de Sevilla'
      },
      grado: {
        id:5,
        nombre:'Física'
      },
      sexo: 'M',
      valoracionMedia: 7
    },
    {
      id:6,
      nombre: 'Pedro',
      apellidos: 'Brenes Alba',
      dni: '49124651-Y',
      email: 'pedro@hotmail.com',
      telefono: '646245374',
      curso: {
        id:4,
        nombre:'Cuarto'
      },
      universidad: {
        id:6,
        nombre:'Universidad de Madrid'
      },
      grado: {
        id:6,
        nombre:'Periodismo'
      },
      sexo: 'H',
      valoracionMedia: 1
    },
    {
      id:7,
      nombre: 'Maria',
      apellidos: 'Fernandez Martinez',
      dni: '49124651-Y',
      email: 'maria@hotmail.com',
      telefono: '646245374',
      curso: {
        id:2,
        nombre:'Segundo'
      },
      universidad: {
        id:7,
        nombre:'Universidad de Sevilla'
      },
      grado: {
        id:7,
        nombre:'Derecho'
      },
      sexo: 'M',
      valoracionMedia: 10
    }

  ]

  constructor() { }

  ngOnInit(): void {

  }

}
