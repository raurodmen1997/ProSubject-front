import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-busqueda-asignatura',
  templateUrl: './busqueda-asignatura.component.html',
  styles: []
})
export class BusquedaAsignaturaComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder) { }

  lista:any[] = ['hola', 'adios', 'buenas', 'tardes'];

  ngOnInit() {

    this.form = this.fb.group({
      universidad: new FormControl(''),
      grado: new FormControl(''),
      curso: new FormControl(''),
      asignatura: new FormControl('')
    });

  }


  buscar(){
    console.log(this.form.value);
  }

}
