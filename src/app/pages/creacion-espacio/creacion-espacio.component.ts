import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BusquedaAsignaturaService } from 'src/app/services/busqueda-asignatura/busqueda-asignatura.service';
import { GradoService, CursoService, AsignaturaService, FacultadService, EspacioService } from 'src/app/services/services.index';


@Component({
  selector: 'app-creacion-espacio',
  templateUrl: './creacion-espacio.component.html',
  styleUrls: ['./creacion-espacio.component.css']
})
export class CreacionEspacioComponent implements OnInit {

  form:FormGroup;

  universidades: any[];
  facultades: any[];
  grados: any[];
  cursos: any[];
  asignaturas: any[];

  constructor(private fb: FormBuilder,
    private busquedaAsignaturaService: BusquedaAsignaturaService,
    private facultadService: FacultadService,
    private gradoService: GradoService,
    private cursoService: CursoService,
    private asignaturaService: AsignaturaService) { }

  ngOnInit() {

    this.inicializarFormulario();

    this.busquedaAsignaturaService.getUniversidades().subscribe(data=>{
      this.universidades = data;
      console.log(this.universidades);

      this.cursoService.getCursos().subscribe(data=>{
        this.cursos = data;
        console.log(this.cursos);
      });
    });
  }

  inicializarFormulario(){
    //CAMPOS DEL FORMULARIO Y VALIDACIONES
    this.form = this.fb.group({
      universidad: new FormControl('', Validators.required),
      facultades: new FormControl('', Validators.required),
      grado: new FormControl('', Validators.required),
      curso: new FormControl('', Validators.required),
      asignatura: new FormControl('', Validators.required),
      precio: new FormControl('', [Validators.required, Validators.min(0)]),
      capacidad: new FormControl('', [Validators.required, Validators.min(1)])
    })


    //CAMBIOS EN EL SELECT DE UNIVERSIDAD
    this.form.get('universidad').valueChanges.subscribe(data=>{

      if(data !== ''){
        this.facultadService.getFacultadesPorUniversidad(this.form.get('universidad').value).subscribe(res=>{
          this.facultades = res;
        });
      }else{
        this.form.get('facultad').setValue('');
        this.facultades = [];
      }

    });

    //CAMBIO EN EL SELECT DE FACULTAD

    this.form.get('facultades').valueChanges.subscribe(data=>{

      if(data !== ''){
        this.gradoService.getGradosPorUniversidadYFacultad(this.form.get('universidad').value, this.form.get('facultades').value).subscribe(res=>{
          this.grados = res;
        });
      }else{
        this.form.get('grado').setValue('');
        this.grados = [];
      }


    });

    //CAMBIO EN EL SELECT DE CURSO
    this.form.get('curso').valueChanges.subscribe(data=>{

      if(data !== ''){
        this.asignaturaService.getAsignaturasPorUniversidadYFacultadYGradoYCurso(this.form.get('universidad').value, this.form.get('facultades').value, this.form.get('grado').value, this.form.get('curso').value).subscribe(res=>{
          this.asignaturas = res;
        });
      }else{
        this.form.get('asignaturas').setValue('');
        this.asignaturas = [];
      }


    });
  }

  submit(){
    console.log(this.form.value)
  }

}
