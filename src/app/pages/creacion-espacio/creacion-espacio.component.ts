import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-creacion-espacio',
  templateUrl: './creacion-espacio.component.html',
  styleUrls: ['./creacion-espacio.component.css']
})
export class CreacionEspacioComponent implements OnInit {

  form:FormGroup;

  asignaturas: any[] = ['Fundamentos de programación', 'Física', 'Complemento de base de datos', 'Diseño y pruebas']

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      asignatura: new FormControl(''),
      precio: new FormControl('', [Validators.required, Validators.min(0)]),
      capacidad: new FormControl('', [Validators.required, Validators.min(1)])
    })
  }

  submit(){
    console.log(this.form.value)
  }

}
