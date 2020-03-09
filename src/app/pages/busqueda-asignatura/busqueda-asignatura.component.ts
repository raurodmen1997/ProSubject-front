import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, FormGroup, FormControl } from '@angular/forms';
import { BusquedaAsignaturaService } from 'src/app/services/busqueda-asignatura/busqueda-asignatura.service';
import { GradoService } from 'src/app/services/services.index';

@Component({
  selector: 'app-busqueda-asignatura',
  templateUrl: './busqueda-asignatura.component.html',
  styles: []
})
export class BusquedaAsignaturaComponent implements OnInit {

  form:FormGroup;
  universidades:any[];

  grados:any[];

  constructor(private fb:FormBuilder, private busquedaAsignaturaService:BusquedaAsignaturaService, private gradoService:GradoService) { }

  lista:any[] = ['hola', 'adios', 'buenas', 'tardes'];

  ngOnInit() {
    this.inicializarFormulario();
    this.busquedaAsignaturaService.getUniversidades().subscribe(data=>{
      this.universidades = data;
      console.log(this.universidades);

      this.gradoService.getGrados().subscribe(data=>{
        this.grados = data;
        console.log(this.grados);
      });



    });


    

  }


  inicializarFormulario(){
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
